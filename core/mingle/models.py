from PIL import Image
from moviepy import VideoFileClip
import os
from django.db import models
from django.contrib.auth import get_user_model
from django.forms import ValidationError
from django.core.validators import FileExtensionValidator
from utils.utils import post_media_directory_path
User = get_user_model()


class Post(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    content = models.TextField(max_length=3000)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Создано {self.user.username} в {self.created_at}"

    class Meta:
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'


class Like(models.Model):
    class LIKE_CHOICES(models.TextChoices):
        LIKE = 'Like'
        DISLIKE = 'Dislike'

    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE,related_name='likes')
    like_type = models.CharField(max_length=7, choices=LIKE_CHOICES.choices)
    created_at = models.DateTimeField(auto_now=True)

    def clean(self):
        if Like.objects.filter(user=self.user,post=self.post):
            raise ValidationError(
                "Невозможно поставить лайк или дизлайк дважды в 1 посте."
            )
        if self.like_type not in Like.LIKE_CHOICES.values:
            raise ValidationError(
                "Тип лайка должен соответствовать [Like, Dislike]")
        return super().clean()
    
    class Meta:
        unique_together = ('user', 'post')

    def __str__(self):
        return f"{self.user.username}  {'лайкнул' if self.like_type == Like.LIKE_CHOICES.LIKE else 'дизлайкнул'} пост {self.post.id}"

    class Meta:
        verbose_name = 'Лайк'
        verbose_name_plural = 'Лайки'


class Friend(models.Model):
    user = models.ForeignKey(
        to=User, on_delete=models.CASCADE, related_name='friendships')
    friend = models.ForeignKey(
        to=User, on_delete=models.CASCADE, related_name='friends')

    class Meta:
        unique_together = ('user', 'friend')

    def clean(self):
        if Friend.objects.filter(user=self.friend, friend=self.user).exists():
            raise ValidationError(
                f"{self.user} уже в друзьях с {self.friend}.")
        if self.user.pk == self.friend.pk:
            raise ValidationError(
                "Невозможно добавить в друзья себя.")
            
    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user.username} в друзьях у {self.friend.username}"

    class Meta:
        verbose_name = 'Друг'
        verbose_name_plural = 'Друзья'


class SavedPost(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'post')

    def __str__(self):
        return f"Post {self.post.id} saved by {self.user.username}"


class SharedPost(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    post = models.ForeignKey(
        to=Post, on_delete=models.CASCADE, related_name='shared_posts')
    shared_friend = models.ForeignKey(
        to=User, on_delete=models.CASCADE, related_name='shared_friends')
    share_string = models.URLField()


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Комментарий от {self.user.username}, оставлен {self.created_at}"

    class Meta:
        verbose_name = 'Коментарий'
        verbose_name_plural = 'Коментарий'


class PostMedia(models.Model):
    class MediaType(models.TextChoices):
        IMAGE = 'image'
        VIDEO = 'video'

    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='media')
    content_type = models.CharField(
        max_length=10,
        choices=MediaType.choices,
    )
    file = models.FileField(
        upload_to=post_media_directory_path,
        validators=[
            FileExtensionValidator(allowed_extensions=[
                'jpg', 'jpeg', 'png', 'mp4', 'mov', 'avi'])
        ]
    )
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Медиа к посту {self.post.pk}"
    

    def save(self, *args, **kwargs):
        """Сохраняем объект, чтобы получить доступ к файлу."""
        is_new = self.pk is None
        super().save(*args, **kwargs)
        try:
            file_extension = os.path.splitext(self.file.name)[-1].lower()

            if file_extension in ['.jpg', '.jpeg', '.png', '.gif']:
                self.content_type = 'image'
                try:
                    with Image.open(self.file.path) as img:
                        img.verify()
                except Exception:
                    raise ValueError("Неправильный файл изображения.")

            elif file_extension in ['.mp4', '.mov', '.avi', '.mkv']:
                self.content_type = 'video'
                try:
                    with VideoFileClip(self.file.path) as video:
                        if video.duration > 300:  # Ограничение в 5 минут
                            raise ValueError(
                                "Видео не может длиться больше 5 минут.")
                except Exception as e:
                    raise ValueError(f"Неправильный видеофайл: {e}")
            else:
                raise ValueError(
                    "Неподдерживаемый тип файла. Разрешены только фото и видео.")

            super().save(update_fields=["content_type"])

        except ValueError as e:
            if is_new:
                self.delete() 
            raise e
    
    class Meta:
        verbose_name = 'Медиа'
        verbose_name_plural = 'Медиа'
