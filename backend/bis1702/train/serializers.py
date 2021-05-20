from rest_framework import serializers

from .models import Parameters, OneFot, Predict


class ParametersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parameters
        fields = '__all__'


class OneFotSerializer(serializers.ModelSerializer):
    class Meta:
        model = OneFot
        fields = '__all__'

class PredictSerializer(serializers.ModelSerializer):
    class Meta:
        model = Predict
        fields = '__all__'