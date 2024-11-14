from django.db import models
from django.contrib.auth import get_user_model
from django.forms import ValidationError

User = get_user_model()


class Post(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    content = models.TextField(max_length=3000)
    created_at = models.DateField(auto_now_add=True)
    # Исправленный момент: использование ManyToMany для лайков
    likes = models.ForeignKey(
        to='Like', blank=True,on_delete=models.CASCADE,null=True, related_name='liked_posts')

    def __str__(self):
        return f"Post by {self.user.username} created at {self.created_at}"


class Like(models.Model):
    LIKE_CHOICES = [
        ('like', 'Like'),
        ('dislike', 'Dislike'),
    ]
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE)
    like_type = models.CharField(max_length=7, choices=LIKE_CHOICES)
    created_at = models.DateTimeField(auto_now=True)

    class Meta:
        # Уникальность сочетания (пользователь, пост, тип лайка)
        unique_together = ('user', 'post')

    def __str__(self):
        return f"{self.user.username} {self.like_type}d post {self.post.id}"


class Friend(models.Model):
    user = models.ForeignKey(
        to=User, on_delete=models.CASCADE, related_name='friendships')
    friend = models.ForeignKey(
        to=User, on_delete=models.CASCADE, related_name='friends')

    class Meta:
        # Гарантируем уникальность пары (user, friend) и наоборот
        unique_together = ('user', 'friend')

    def clean(self):
        # Проверка, чтобы не добавлять обратную связь, если она уже существует
        if Friend.objects.filter(user=self.friend, friend=self.user).exists():
            raise ValidationError(
                "Friendship already exists in reverse direction.")

    def save(self, *args, **kwargs):
        # Вызываем clean() при сохранении, чтобы пройти проверку
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user.username} is friends with {self.friend.username}"

class SavedPost(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE)


    class Meta:
            # Уникальность сочетания (пользователь, пост), чтобы избежать дублирования сохранённых постов
            unique_together = ('user', 'post')

    def __str__(self):
        return f"Post {self.post.id} saved by {self.user.username}"
        
class SharedPost(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE,related_name='shared_posts')
    shared_friend = models.ForeignKey(to=User,on_delete=models.CASCADE,related_name='shared_friends')
    share_string = models.URLField()