from django.conf.urls import url
from django.urls import path, include
from .views import *

urlpatterns = [
    path('spa/', BaseView.as_view(), name='home'),
    path('breed/', BreedListView.as_view(), name='breed_list'),
    # path('<slug:slug>/', FormOfCatDetailView.as_view(), name='form_list'),
    path('about/', AboutView.as_view(), name='about'),
    path('volunteer/', VolunteerView.as_view(), name='volunteerer'),
    path('test/', TestView.as_view(), name='test'),
    path('', index),
    path('auth/', auth),
    url('', include('social_django.urls', namespace='social')),
]
