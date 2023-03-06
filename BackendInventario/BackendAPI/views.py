from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UsuarioSerializers
from .serializers import FacturasSerializers
from .serializers import HistorialFacturasSerializers
from .models import Usuario
from .models import Facturas
from .models import HistorialFacturas


#ALL FACTURAS
# Create your views here.


#ALL FACTURAS
#Muestra todos los datos de la base de datos en la API Usuario
#http://127.0.0.1:8000/Backend/usuario_list
@api_view(['GET'])
def ShowAllUser(request):
    usuario = Usuario.objects.all()
    serializers = UsuarioSerializers(usuario, many=True)
    return Response(serializers.data)

#Muestra todos los datos de la base de datos en la API Facturas
#http://127.0.0.1:8000/Backend/facturas_list
@api_view(['GET'])
def ShowAllFacturas(request):
    facturas = Facturas.objects.all()
    serializers = FacturasSerializers(facturas, many=True)
    return Response(serializers.data)

#Muestra todos los datos de la base de datos en la API HistorialFactura
#https://127.0.0.1:8000/Backend/historialFacturas_list
@api_view(['GET'])
def ShowHistorialFacturas(request):
    historialFactura = HistorialFacturas.objects.all()
    serializers = HistorialFacturasSerializers(historialFactura, many=True)
    return  Response(serializers.data)

#Detalles
#Muestra los clientes de la base de datos en la API de manera detalla
#http://127.0.0.1:8000/Backend/usuario_details/402-2970588-0
@api_view(['GET'])
def ViewClient(request, cedula):
    usuario = Usuario.objects.filter(Cedula=cedula)
    serializers = UsuarioSerializers(usuario, many=True)
    return Response(serializers.data)

#Muestra las facturas de la base de datos en la API de manera detalla
#http://127.0.0.1:8000/Backend/facturas_details/1
@api_view(['GET'])
def ViewFacturas(request, pk):
    factura = Facturas.objects.filter(ID_Facturas = pk)
    serializers = FacturasSerializers(factura, many=True)
    return Response(serializers.data)

#Muestra todos los datos de la base de datos en la API Historial Facturas
#http://127.0.0.1:8000/Backend/historial_details/1
@api_view(['GET'])
def ViewHistorial(request, cedula):
    hFacturas = HistorialFacturas.objects.filter(Cedula = cedula)
    serializers = HistorialFacturasSerializers(hFacturas, many=True)
    return Response(serializers.data)

#Agrega clientes a  la base de datos en la API
#http://127.0.0.1:8000/Backend/creando_usuario
@api_view(['POST'])
def CreateCliente(request):
    serializers = UsuarioSerializers(data=request.data)
    if serializers.is_valid():
        serializers.save()
    return Response(serializers.data)

#Agrega facturas a  la base de datos en la API
#http://127.0.0.1:8000/Backend/creando_facturas
@api_view(['POST'])
def CreateFacturas(request):
    serializers = FacturasSerializers(data=request.data)
    if serializers.is_valid():
        serializers.save()
    return Response(serializers.data)

#Crea el historial de facturas en la API
##http://127.0.0.1:8000/Backend/creando_HistorialFacturas
@api_view(['POST'])
def CreateHistorialFacturas(request):
    serializers = HistorialFacturasSerializers(data=request.data)
    if serializers.is_valid():
        serializers.save()
    return Response(serializers.data)

#Actualizar las facturas
#
@api_view(['POST'])
def updateFactura(request, pk):
    factura = Facturas.objects.get(ID_Facturas=pk)
    serializers = FacturasSerializers(instance=factura, data=request.data)
    if serializers.is_valid():
        serializers.save()
    return Response(serializers.data)