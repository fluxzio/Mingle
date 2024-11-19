from django.urls import path
from .views import *


urlpatterns = [
    path('posts/all/',PopularPostListView.as_view())
]