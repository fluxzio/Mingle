from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from dependencies.dependencies import get_post_service
from .serializers import *


class PopularPostListView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        posts = get_post_service().get_popular_posts()
        serialized = PostSerializer(posts,many=True)
        return Response({
            'posts': serialized.data
        })


