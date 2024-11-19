from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,IsAuthenticatedOrReadOnly
from .serializers import UserSerializer

class UserDataView(APIView):
    """ View to get user data """
    permission_classes = []

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    
class UserSendEmailView(APIView):
    """ View to verify provided user email """
    def get(self,request):
        """ TODO: Setup email service """
        return Response({})
        


