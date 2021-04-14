from django.urls import path
from .views import *

urlpatterns = [
    path('', BaseApiView.as_view(), name='home'),
    path('breed/', BreedListView.as_view(), name='breed_list'),
    # path('<slug:slug>/', FormOfCatDetailView.as_view(), name='form_list'),
    path('about/', AboutView.as_view(), name='about'),
    path('volunteer/', VolunteerApiView.as_view(), name='volunteer'),
    path('test/', TestView.as_view(), name='test'),
]
