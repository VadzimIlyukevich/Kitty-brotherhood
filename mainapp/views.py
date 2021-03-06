from django.http import HttpResponseRedirect, HttpResponseNotFound, JsonResponse
from django.shortcuts import render, redirect
from django.views import View
import requests

api_url = "https://cryptic-bastion-34651.herokuapp.com/api/"


class BaseView(View):
    def get(self, request):
        return render(request, 'base.html')


class TestView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'test.html')


class AboutView(View):
    def get(self, request):
        breeds = requests.get(api_url + "breed").json()
        return render(request, 'about.html', context={'breeds': breeds})


class VolunteerView(View):
    def get(self, request):
        volunteers = requests.get(api_url + "volunteer").json()
        return render(request, 'volunteer.html', context={'volunteers': volunteers})

    def post(self, request):
        if request.method == "POST":
            payload = {
                "full_name": request.POST['full_name'],
                "phone": request.POST['phone'],
                "email": request.POST['email'],
                "about": request.POST['about'],
            }
            status_code = requests.post(api_url + "volunteer", json=payload)
            if status_code.status_code != 200:
                return redirect('home')
            else:
                return HttpResponseRedirect('/')
        return render(request, 'volunteer.html', {})


class BreedListView(View):
    def get(self, request):
        breeds = requests.get(api_url + "breed").json()
        return render(request, 'breed_list.html', context={'breeds': breeds})


def index(request):
    return render(request, 'index.html')


def auth(request):
    return render(request, 'oauth.html')
