# Generated by Django 3.1.7 on 2021-04-21 08:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0012_auto_20210320_1751'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cat',
            name='category_cat',
        ),
        migrations.RemoveField(
            model_name='cat',
            name='name_specification',
        ),
        migrations.RemoveField(
            model_name='formofcat',
            name='category_form_cat',
        ),
        migrations.DeleteModel(
            name='Volunteer',
        ),
        migrations.DeleteModel(
            name='Breed',
        ),
        migrations.DeleteModel(
            name='Cat',
        ),
        migrations.DeleteModel(
            name='FormOfCat',
        ),
    ]
