from mingle.models import Post
from rest_framework import serializers
from users.models import User

class UserPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','photo']

class PostSerializer(serializers.ModelSerializer):
    user = UserPostSerializer()
    class Meta:
        model = Post
        fields = ['id', 'content','created_at','user']

