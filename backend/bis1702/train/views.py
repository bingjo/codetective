from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Parameters
from .serializers import ParametersSerializer, OneFotSerializer, PredictSerializer

import threading

from .service.service import Processing, OneHotCode, PredictService

from django.http import HttpResponse

# Create your views here.
@api_view(['GET', 'POST'])
def parameters_list(request):
    if request.method == 'GET':
        queryset = Parameters.objects.all()
        serializer = ParametersSerializer(queryset, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ParametersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def parameters_detail(request, pk):
    try:
        queryset = Parameters.objects.get(pk=pk)
    except Parameters.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ParametersSerializer(queryset)
        Processing(serializer.data).main()  # Вызов логики
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ParametersSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Работа с не обработаными исходниками
@api_view(['GET', 'POST'])
def sourceCodes(request):
    if request.method == 'POST':
        serializer = OneFotSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            files = OneHotCode(serializer.data).main()  # Вызов логики
            return Response(files, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Работа с predict
@api_view(['GET', 'POST'])
def predict(request):
    if request.method == 'POST':
        serializer = PredictSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            files = PredictService(serializer.data).main()  # Вызов логики
            return HttpResponse(files, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
