from django.db import models
from django.contrib.auth.models import AbstractUser
from utils.utils import user_directory_path

    
    
class User(AbstractUser):
    photo = models.ImageField(
        upload_to=user_directory_path, blank=True, null=True)
    
    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'