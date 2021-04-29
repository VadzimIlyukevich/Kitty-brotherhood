from rest_framework import serializers
from .models import *


class BreedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breed
        fields = "__all__"


class BreedDetailSerializer(serializers.ModelSerializer):
    posts = serializers.SerializerMethodField()

    class Meta:
        model = Breed
        fields = "__all__"

    @staticmethod
    def get_posts(obj):
        return FormSerializer(FormOfCat.objects.filter(category_form_cat=obj), many=True).data


class VolunteerCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = "__all__"


class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormOfCat
        fields = "__all__"


class FormListSerializer(serializers.ModelSerializer):
    category_form_cat = BreedSerializer()

    class Meta:
        model = FormOfCat
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "password")

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
