from django.http import HttpResponseRedirect, HttpResponseNotFound
from django.shortcuts import render, redirect
from django.views import View
import requests

api_url = "http://127.0.0.1:8000/api/"


class BaseView(View):
    def get(self, request):
        breeds = requests.get(api_url + "breed").json()
        return render(request, 'base.html', context={'breeds': breeds})


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
            list = {
                "full_name": request.POST['full_name'],
                "phone": request.POST['phone'],
                "email": request.POST['email'],
                "about": request.POST['about'],
            }
            status_code = requests.post(api_url + "volunteer", json=list)
            if status_code.status_code != 200:
                return redirect('home')
            else:
                return HttpResponseRedirect('/')
        return render(request, 'volunteer.html', {'volunteer': list})


class BreedListView(View):
    def get(self, request):
        breeds = requests.get(api_url + "breed").json()
        return render(request, 'breed_list.html', context={'breeds': breeds})
