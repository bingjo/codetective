# Generated by Django 3.0.6 on 2020-05-23 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('train', '0002_parameters_borders_class'),
    ]

    operations = [
        migrations.AddField(
            model_name='parameters',
            name='class_of_later',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='parameters',
            name='correct_class',
            field=models.BooleanField(default=False),
        ),
    ]
