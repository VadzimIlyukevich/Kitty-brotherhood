from .models import Volunteer
from django.forms import ModelForm


class VolunteerForm(ModelForm):
    class Meta:
        model = Volunteer
        fields = ['full_name', 'phone', 'email', 'about']


class TestForm(ModelForm):
    class Meta:
        model = Volunteer
        fields = ['full_name']

