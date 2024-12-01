from .models import *
from rest_framework import serializers
from users.models import User
from utils.types import InjectedHttpRequest
from typing import TYPE_CHECKING
from django.core.exceptions import ObjectDoesNotExist
if TYPE_CHECKING:
    from services.posts import PostService

class LikePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['id', 'like_type']

class UserPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','photo']


class MediaPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostMedia
        fields = ['id', 'content_type', 'file', 'uploaded_at']

class PostSerializer(serializers.ModelSerializer):
    user = UserPostSerializer()
    media = MediaPostSerializer(many=True, read_only=True)
    likes = serializers.SerializerMethodField()
    is_liked = serializers.SerializerMethodField()
    
    class Meta:
        model = Post
        fields = ['id', 'content','created_at','user','media','likes','is_liked']

    def get_likes(self,obj: Post):
        return obj.likes.all().count()
    
    def get_is_liked(self,obj: Post):
        request: InjectedHttpRequest = self.context.get('request')
        try:
            like = Like.objects.get(user=request.user, post=obj)
            serialized = LikePostSerializer(like)
            return serialized.data
        except ObjectDoesNotExist as ex:
            return None
        
class CommentSerializer(serializers.ModelSerializer):
    user = UserPostSerializer()
    class Meta:
        model = Comment
        fields = ['id', 'content', 'created_at','user']
        

class FriendSerializer(serializers.ModelSerializer):
    friend = UserPostSerializer()
    class Meta:
        model = Friend
        fields = ['id','friend',]
        
        
class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['user','post','content']