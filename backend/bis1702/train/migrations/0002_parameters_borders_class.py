# Generated by Django 3.0.6 on 2020-05-21 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('train', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='parameters',
            name='borders_class',
            field=models.CharField(default='0,0;0,0', max_length=40),
        ),
    ]
