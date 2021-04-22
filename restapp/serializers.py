from rest_framework import serializers
from .models import *


class BreedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breed
        fields = "__all__"


class VolunteerCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = "__all__"
