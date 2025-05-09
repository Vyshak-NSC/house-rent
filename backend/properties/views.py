from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .models import Property
from .serializers import PropertySerializer
from .permissions import IsOwner  # Your custom IsOwner permission
from rest_framework import serializers


class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

    # Allow unauthenticated users to view properties (GET)
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        if self.request.user.role != 'owner':  # Add check for 'owner' role
            raise serializers.ValidationError("Only owners can create properties.")
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        # If the action is 'update' or 'destroy', only allow the owner to perform it
        if self.action in ['update', 'destroy']:
            self.permission_classes = [IsOwner]  # Owner-only permission for updates and deletions
        return super().get_permissions()
