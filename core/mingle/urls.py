from django.urls import path
from .views import *


urlpatterns = [
    path('posts/all/',PopularPostListView.as_view()),
    path('posts/<int:post_id>/', CommentsListView.as_view()),
    path('recommend/friends/', RecommendedFriendsListView.as_view())
]