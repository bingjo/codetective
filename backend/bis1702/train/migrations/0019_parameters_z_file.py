# Generated by Django 3.0.6 on 2021-01-10 05:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('train', '0018_auto_20210107_0605'),
    ]

    operations = [
        migrations.AddField(
            model_name='parameters',
            name='z_file',
            field=models.FileField(default='1', upload_to='dataset/'),
        ),
    ]
