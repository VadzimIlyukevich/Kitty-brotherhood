from django.urls import path
from rest_framework import routers

from .views import *

router = routers.SimpleRouter()
router.register('breed', BreedApiViewsSet, basename='breed')
router.register('volunteer', VolunteerApiViewsSet, basename='volunteer')
router.register('form', FormApiViewsSet, basename='form')
urlpatterns = []
urlpatterns += router.urls

