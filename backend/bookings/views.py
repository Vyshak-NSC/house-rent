# bookings/views.py
from rest_framework import serializers
from django.db.models import Q
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Booking
from .serializers import BookingSerializer
from .permissions import IsOwner  # Import from 'bookings/permissions.py'
from rest_framework import permissions
from rest_framework.decorators import action


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        tenant = self.request.user
        property_obj = serializer.validated_data['property']
        start_date = serializer.validated_data['start_date']
        end_date = serializer.validated_data['end_date']

        # Check if booking already exists (confirmed) for the same property in that date range
        existing = Booking.objects.filter(
            property=property_obj,
            status='confirmed'
        ).filter(
            Q(start_date__lte=end_date) & Q(end_date__gte=start_date)
        )

        if existing.exists():
            raise serializers.ValidationError("This property is already booked for the selected dates.")

        serializer.save(tenant=tenant)
    @action(detail=True, methods=['patch'], permission_classes=[IsOwner])
    def confirm_booking(self, request, pk=None):
        booking = self.get_object()
        if booking.property.owner != request.user:
            return Response({'detail': 'You are not the owner of this property.'}, status=status.HTTP_403_FORBIDDEN)
        
        booking.status = 'confirmed'
        booking.save()
        return Response({'status': 'Booking confirmed.'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['patch'], permission_classes=[IsOwner])
    def reject_booking(self, request, pk=None):
        booking = self.get_object()
        if booking.property.owner != request.user:
            return Response({'detail': 'You are not the owner of this property.'}, status=status.HTTP_403_FORBIDDEN)
        
        booking.status = 'rejected'
        booking.save()
        return Response({'status': 'Booking rejected.'}, status=status.HTTP_200_OK)
