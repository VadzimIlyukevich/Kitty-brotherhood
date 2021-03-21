from django.views.generic.detail import SingleObjectMixin
from django.views.generic import View
from .models import FormOfCat, Breed


class FormDetailMixin(SingleObjectMixin):

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['forms'] = FormOfCat.object.get_all_form()
        return context


class BreedDetailMixin(SingleObjectMixin):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['breeds'] = Breed.object.get_all_breed()
        return context
