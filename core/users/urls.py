from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(),name='token'),
    path('token/refresh/', TokenRefreshView.as_view(),name='refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('user/', UserDataView.as_view()),
    path('verify/', UserSendEmailView.as_view()),
    path('register/',UserCreateView.as_view(),name='register')
]

