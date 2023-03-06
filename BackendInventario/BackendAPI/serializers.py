from rest_framework import serializers
from .models import Usuario, Facturas, HistorialFacturas

class UsuarioSerializers(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class FacturasSerializers(serializers.ModelSerializer):
    class Meta:
        model = Facturas
        fields = '__all__'

class HistorialFacturasSerializers(serializers.ModelSerializer):
    class Meta:
        model = HistorialFacturas
        fields = '__all__'