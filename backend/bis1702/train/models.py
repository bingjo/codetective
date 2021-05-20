from django.db import models

# Create your models here.
class Parameters(models.Model):
    x_train = models.FileField(upload_to='dataset/', default='1')
    y_train = models.FileField(upload_to='dataset/', default='1')
    z_file = models.FileField(upload_to='dataset/', default='1')
    predict = models.CharField(max_length=1, default='y')
    repeats = models.IntegerField(default=5)
    epochs = models.IntegerField(default=10)
    read = models.CharField(max_length=1, default='y')
    train = models.CharField(max_length=1, default='y')
    folds = models.IntegerField(default=2)
    train_active = models.BooleanField(default=True)
    hash_name = models.CharField(max_length=70, default='A')
    only_train = models.CharField(max_length=1, default='n')
    only_zip = models.CharField(max_length=1, default='n')


class OneFot(models.Model):
    zipfile1 = models.FileField(upload_to='sourcecodes/', default='1', blank=True)
    number = models.IntegerField(default=10)

class Predict(models.Model):
    hash_model = models.CharField(max_length=255, default='none_id_model_11.h5')
    validata = models.FileField(upload_to='dataset/', default='1')
    user_model = models.FileField(upload_to='dataset/Models', default='none_user_model_11.h5', blank=True, null=True)
    only_zip = models.CharField(max_length=1, default='n')
    zip_file = models.FileField(upload_to='dataset/Models', default='1')


