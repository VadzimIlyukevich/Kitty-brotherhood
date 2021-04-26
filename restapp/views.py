from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from .serializers import *
from .models import Breed


class BaseApiView(APIView):
    def get(self, request):
        breeds = Breed.objects.all()
        serializer = BreedSerializer(breeds, many=True)
        return Response(serializer.data)


class BreedApiViewsSet(viewsets.ModelViewSet):
    queryset = Breed.objects.all()
    serializer_class = BreedSerializer

    action_to_serializer = {
        'list': BreedDetailSerializer,
        'retrieve': BreedDetailSerializer,
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class FormApiViewsSet(viewsets.ModelViewSet):
    queryset = FormOfCat.objects.all()
    serializer_class = FormSerializer

    action_to_serializer = {
        'list': FormListSerializer,
        'retrieve': FormListSerializer,
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class VolunteerApiViewsSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerCreateSerializer


class VolunteerApiView(APIView):
    def post(self, request):
        volunteer_request = VolunteerCreateSerializer(data=request.data)
        if volunteer_request.is_valid():
            volunteer_request.save()
        return Response(volunteer_request.data, status=201)

    def get(self, request):
        volunteers = Volunteer.objects.all()
        serializer = VolunteerCreateSerializer(volunteers, many=True)
        return Response(serializer.data)
