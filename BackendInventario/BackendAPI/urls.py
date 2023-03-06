from django.urls import path
from . import views

urlpatterns = [
    #LISTAS
    path('usuario_list', views.ShowAllUser, name='usuario-list'),
    path('facturas_list', views.ShowAllFacturas, name='facturas-list'),
    path('historialFacturas_list', views.ShowHistorialFacturas, name='historial-list'),
    #DETALLES
    path('usuario_details/<str:cedula>', views.ViewClient, name='usuario-details'),
    path('facturas_details/<int:pk>', views.ViewFacturas, name='facturas-details'),
    path('historial_details/<str:cedula>', views.ViewHistorial, name='historial-details'),
    #CREANDO
    path('creando_usuario', views.CreateCliente, name='creando-usuario'),
    path('creando_facturas', views.CreateFacturas, name='creando-factura'),
    path('creando_historial', views.CreateHistorialFacturas, name='creando-historial'),
    #Modificando
    path('actualizando-facturas/<int:pk>', views.updateFactura, name='actualizando-facturas'),
]