from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from .serializers import *
from .models import *
from utils.types import InjectedHttpRequest
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from services.posts import PostService


class PopularPostListView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request: InjectedHttpRequest):
        service: "PostService" = request.container.get('post-service')
        return service.get_popular_posts(serializer_class=PostSerializer, request=request)


class CommentsListView(ListAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        post_id = self.kwargs.get('post_id')
        return self.queryset.filter(post_id=post_id)


class RecommendedFriendsListView(ListAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
