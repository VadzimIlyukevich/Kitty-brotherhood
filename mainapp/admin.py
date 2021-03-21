from django import forms
from django.contrib import admin

from .models import *


# class FormChoiceField(forms.ModelChoiceField):
#     pass
#
#
# class FormOfCatAdmin(admin.ModelAdmin):
#
#     def formfield_for_foreignkey(self, db_field, request, **kwargs):
#         if db_field.name == 'category_form_cat':
#             return print(FormChoiceField(Breed.objects.filter(slug='longhaired')))
#         return super().formfield_for_foreignkey(db_field, request, **kwargs)


admin.site.register(Breed)
admin.site.register(FormOfCat)
admin.site.register(Cat)
admin.site.register(Volunteer)
