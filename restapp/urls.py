from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views

from .views import *

router = routers.SimpleRouter()
router.register('breed', BreedApiViewsSet, basename='breed')
router.register('volunteer', VolunteerApiViewsSet, basename='volunteer')
router.register('form', FormApiViewsSet, basename='form')
urlpatterns = [
    path('token/obtain', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('register', CreateUser.as_view(), name="create_user"),
    path('logout', LogoutUser.as_view(), name="logout_user"),
]
urlpatterns += router.urls
