# Generated by Django 3.0.6 on 2020-10-06 04:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('train', '0015_onefot_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='Predict',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hash_model', models.CharField(default='model.h5', max_length=255)),
                ('validata', models.FileField(default='1', upload_to='dataset/')),
            ],
        ),
    ]
