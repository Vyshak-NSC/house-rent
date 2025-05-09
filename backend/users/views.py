from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.serializers import ModelSerializer

User = get_user_model()

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role']

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register_user(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    role = request.data.get('role')

    if not all([username, email, password, role]):
        return Response({'error': 'Missing fields'}, status=400)

    user = User.objects.create_user(username=username, email=email, password=password, role=role)
    return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
