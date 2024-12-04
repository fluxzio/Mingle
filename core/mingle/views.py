from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, CreateAPIView
from .serializers import *
from .models import *
from utils.types import InjectedHttpRequest
from typing import TYPE_CHECKING
from rest_framework import status
if TYPE_CHECKING:
    from services.posts import PostService


class PopularPostListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request: InjectedHttpRequest):
        service: "PostService" = request.container.get('post-service')
        return service.get_popular_posts(serializer_class=PostSerializer, request=request)


class CommentsListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        post_id = self.kwargs.get('post_id')
        return self.queryset.filter(post_id=post_id).order_by('-created_at')


class RecommendedFriendsListView(ListAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)


class CommentCreateAPIView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer
    permission_classes = [IsAuthenticated]


class PostLikeView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = LikePostSerializer
    queryset = Like.objects.all()

    def post(self,request):
        like_type = request.data.get('like_type')
        
        post = Post.objects.get(
            pk=self.kwargs.get('post_id')
        )
        
        if Like.objects.filter(
            post=post,
            user=request.user
        ).exists():
            like = Like.objects.get(
                post=post,
                user=request.user
            )
            like.like_type = like_type
            like.save()
            return Response(
                status=status.HTTP_200_OK
            )
        else:
            like = Like.objects.create(
                post=post,
                user=request.user,
                like_type=like_type
            )
            return Response(
                status=status.HTTP_201_CREATED
            )
