from django.shortcuts import render, redirect
from django.views import View
from django.views.generic import DetailView, ListView
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Breed, FormOfCat
from .serializers import *
from .forms import VolunteerForm
from .mixin import FormDetailMixin, BreedDetailMixin


class BaseApiView(View):
    def get(self, request):
        breeds = Breed.object.all()
        serializer = BreedSerializer(breeds, many=True)
        return render(request, 'base.html', {'breeds': serializer.data})


class TestView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'test.html')


class AboutView(View):
    def get(self, request, *args, **kwargs):
        breeds = Breed.object.all()
        serializer = BreedSerializer(breeds, many=True)
        return render(request, 'about.html', {'breeds': serializer.data})


class VolunteerApiView(APIView):
    def post(self, request):
        volunteer_request = VolunteerCreateSerializer(data=request.data)
        if volunteer_request.is_valid():
            volunteer_request.save()
        return Response(volunteer_request.data, status=201)

    def get(self, request, *args, **kwargs):
        breeds = Breed.object.all()
        serializer = BreedSerializer(breeds, many=True)
        return render(request, 'volunteer.html', {'breeds': serializer.data})


class VolunteerView(View):
    def get(self, request, *args, **kwargs):
        breeds = Breed.object.all()
        serializer = BreedSerializer(breeds, many=True)
        return render(request, 'volunteer.html', {'breeds': serializer.data})


class BreedListView(View):
    def get(self, request):
        breeds = Breed.object.all()
        serializer = BreedSerializer(breeds, many=True)
        return render(request, 'breed_list.html', {'breeds': serializer.data})