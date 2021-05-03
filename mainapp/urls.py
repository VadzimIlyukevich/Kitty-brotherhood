from django.urls import path
from .views import *
import rest_framework_simplejwt.views as jwt_views

urlpatterns = [
    path('', BaseView.as_view(), name='home'),
    path('breed/', BreedListView.as_view(), name='breed_list'),
    # path('<slug:slug>/', FormOfCatDetailView.as_view(), name='form_list'),
    path('about/', AboutView.as_view(), name='about'),
    path('volunteer/', VolunteerView.as_view(), name='volunteerer'),
    path('test/', TestView.as_view(), name='test'),
    path('spa/', index),
    path('token/obtain', jwt_views.TokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('register', CreateUser.as_view(), name="create_user"),
    path('logout', LogoutUser.as_view(), name="logout_user"),

]
