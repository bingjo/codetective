from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import parameters_detail, parameters_list, sourceCodes, predict

import threading


urlpatterns = [
    path('train/', parameters_list),
    path('train/<int:pk>', parameters_detail),
    path('onehot/', sourceCodes),
    path('predict/', predict),
]