# Generated by Django 3.0.6 on 2020-07-20 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('train', '0006_auto_20200720_0530'),
    ]

    operations = [
        migrations.AddField(
            model_name='parameters',
            name='train',
            field=models.CharField(default='y', max_length=1),
        ),
    ]
