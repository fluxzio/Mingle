from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny
from .serializers import UserRegistrationSerializer, UserSerializer
from utils.types import InjectedHttpRequest
from typing import TYPE_CHECKING
from .models import User


if TYPE_CHECKING:
    from services.email import EmailService


class UserDataView(APIView):
    """ View to get user data """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class UserSendEmailView(APIView):
    """ View to verify provided user email """
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request: InjectedHttpRequest):
        service: "EmailService" = request.container.get("email-service")
        service.send_verification_code(
            "fluxziodev@yandex.kz",
            "123456"
        )
        return Response({})


class UserCreateView(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    