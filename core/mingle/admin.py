from django.contrib import admin
from .models import *


@admin.register(Post)
class PostModelAdmin(admin.ModelAdmin):
    pass

@admin.register(Like)
class LikeModelAdmin(admin.ModelAdmin):
    pass


@admin.register(Friend)
class FriendModelAdmin(admin.ModelAdmin):
    pass


@admin.register(Comment)
class CommentModelAdmin(admin.ModelAdmin):
    pass
