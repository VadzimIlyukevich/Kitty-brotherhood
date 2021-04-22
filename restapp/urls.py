from django.urls import path
from .views import *

urlpatterns = [
    path('breed', BaseApiView.as_view(), name='breed'),
    path('volunteer', VolunteerApiView.as_view(), name='volunteer'),
]
