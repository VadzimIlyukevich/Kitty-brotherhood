from django.shortcuts import render, redirect
from django.views import View
from django.views.generic import DetailView, ListView
from .models import Breed, FormOfCat
from .forms import VolunteerForm
from .mixin import FormDetailMixin, BreedDetailMixin


class BaseView(View):
    def get(self, request, *args, **kwargs):
        breeds = Breed.object.all()
        return render(request, 'base.html', {'breeds': breeds})


class TestView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'test.html')


class AboutView(View):
    def get(self, request, *args, **kwargs):
        breeds = Breed.object.all()
        return render(request, 'about.html', {'breeds': breeds})


class VolunteerView(View):
    def get(self, request, *args, **kwargs):
        breeds = Breed.object.get_all_breed()
        return render(request, 'volunteer.html', {'breeds': breeds})

    def post(self, request):
        error = ''
        if request.method == 'POST':
            form = VolunteerForm(request.POST)
            if form.is_valid():
                form.save()
                return redirect('home')
            else:
                error = 'Форма была заполнена не верно'
        form = VolunteerForm()

        data = {
            'form': form,
            'error': error
        }
        return render(request, 'volunteer.html', data)


class BreedListView(View):
    def get(self, request, *args, **kwargs):
        breeds = Breed.object.all()
        return render(request, "breed_list.html", {'breed_list': breeds})


class FormOfCatDetailView(View):
    def get(self, request, *args, **kwargs):
        breeds = Breed.object.get_all_breed()
        return render(request, "form.html", {'breed_list': breeds})
# class FormOfCatDetailView(View):
#     def get(self, request, slug):
#         breed = Breed.object.all()
#         form = FormOfCat.object.all()
#         return render(request, "form.html", {"breed_list": breed, "forms": form})
