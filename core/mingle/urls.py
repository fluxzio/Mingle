from django.urls import path
from .views import *


urlpatterns = [
    path('posts/all/',PopularPostListView.as_view(),name='list_posts'),
    path('posts/<int:post_id>/', CommentsListView.as_view(),name='comments'),
    path('friends/', RecommendedFriendsListView.as_view()),
    path('comment/send/', CommentCreateAPIView.as_view()),
    path('post/<int:post_id>/like/', CommentCreateAPIView.as_view()),

]