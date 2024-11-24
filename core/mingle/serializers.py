from .models import *
from rest_framework import serializers
from users.models import User


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
    class Meta:
        model = Post
        fields = ['id', 'content','created_at','user','media']

        
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
        