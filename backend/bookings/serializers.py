from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'tenant', 'property', 'status', 'booking_date', 'start_date', 'end_date']
        read_only_fields = ['tenant', 'booking_date']
