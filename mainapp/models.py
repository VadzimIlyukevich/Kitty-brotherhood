from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse

User = get_user_model()


class BreedManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()

    def get_all_breed(self):
        qs = list(self.get_queryset().annotate().values())
        return qs


class Breed(models.Model):
    breed_name = models.CharField(max_length=255, verbose_name='Название породы')
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to="breeds/")
    breed_description = models.CharField(max_length=255, verbose_name='Описание породы')
    object = BreedManager()

    class Meta:
        verbose_name = "Порода"
        verbose_name_plural = "Породы"

    def __str__(self):
        return self.breed_name


class FormManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()

    def get_all_form(self):
        qs = list(self.get_queryset().annotate().values())
        return qs


class FormOfCat(models.Model):
    category_form_cat = models.ForeignKey(Breed, verbose_name='Вид Кошки', on_delete=models.CASCADE)
    name_of_form = models.CharField(max_length=255, verbose_name='Название вида')
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to="forms/")
    form_description = models.CharField(max_length=255, verbose_name='Описание вида')
    object = FormManager()

    def __str__(self):
        return self.name_of_form

    class Meta:
        verbose_name = "Вид"
        verbose_name_plural = "Виды"


class Cat(models.Model):
    category_cat = models.ForeignKey(Breed, verbose_name='Порода Кошки', on_delete=models.CASCADE)
    name_specification = models.ForeignKey(FormOfCat, verbose_name='Вид Кошки', on_delete=models.CASCADE)
    slug = models.SlugField(unique=True)
    lifespan = models.PositiveIntegerField(verbose_name='Продолжительность жизни')
    cat_color = models.CharField(max_length=255, verbose_name='Окрас')
    personality = models.CharField(max_length=255, verbose_name='Характер')
    nutrition = models.CharField(max_length=255, verbose_name='Питание')
    image = models.ImageField(upload_to="cats/")

    def __str__(self):
        return "{}".format(self.name_specification.name_of_form)

    class Meta:
        verbose_name = "Кот"
        verbose_name_plural = "Коты"


class Volunteer(models.Model):
    full_name = models.CharField(max_length=255, verbose_name='ФИО')
    phone = models.CharField(max_length=20, verbose_name='Номер телефона')
    email = models.EmailField()
    about = models.TextField(verbose_name='Коммантарий', blank=True)

    class Meta:
        verbose_name = "Волонтёр"
        verbose_name_plural = "Волонтёры"

    def __str__(self):
        return "{}".format(self.full_name)
from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse

User = get_user_model()


class BreedManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()

    def get_all_breed(self):
        qs = list(self.get_queryset().annotate().values())
        return qs


class Breed(models.Model):
    breed_name = models.CharField(max_length=255, verbose_name='Название породы')
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to="breeds/")
    breed_description = models.CharField(max_length=255, verbose_name='Описание породы')
    object = BreedManager()

    class Meta:
        verbose_name = "Порода"
        verbose_name_plural = "Породы"

    def __str__(self):
        return self.breed_name


class FormManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()

    def get_all_form(self):
        qs = list(self.get_queryset().annotate().values())
        return qs


class FormOfCat(models.Model):
    category_form_cat = models.ForeignKey(Breed, verbose_name='Вид Кошки', on_delete=models.CASCADE)
    name_of_form = models.CharField(max_length=255, verbose_name='Название вида')
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to="forms/")
    form_description = models.CharField(max_length=255, verbose_name='Описание вида')
    object = FormManager()

    def __str__(self):
        return self.name_of_form

    class Meta:
        verbose_name = "Вид"
        verbose_name_plural = "Виды"


class Cat(models.Model):
    category_cat = models.ForeignKey(Breed, verbose_name='Порода Кошки', on_delete=models.CASCADE)
    name_specification = models.ForeignKey(FormOfCat, verbose_name='Вид Кошки', on_delete=models.CASCADE)
    slug = models.SlugField(unique=True)
    lifespan = models.PositiveIntegerField(verbose_name='Продолжительность жизни')
    cat_color = models.CharField(max_length=255, verbose_name='Окрас')
    personality = models.CharField(max_length=255, verbose_name='Характер')
    nutrition = models.CharField(max_length=255, verbose_name='Питание')
    image = models.ImageField(upload_to="cats/")

    def __str__(self):
        return "{}".format(self.name_specification.name_of_form)

    class Meta:
        verbose_name = "Кот"
        verbose_name_plural = "Коты"


class Volunteer(models.Model):
    full_name = models.CharField(max_length=255, verbose_name='ФИО')
    phone = models.CharField(max_length=20, verbose_name='Номер телефона')
    email = models.EmailField()
    about = models.TextField(verbose_name='Коммантарий', blank=True)

    class Meta:
        verbose_name = "Волонтёр"
        verbose_name_plural = "Волонтёры"

    def __str__(self):
        return "{}".format(self.full_name)
