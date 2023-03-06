from django.db import models

# Create your models here.

class Usuario(models.Model):
    ID_USUARIO = models.AutoField(primary_key=True, null=False)
    Nombre_Apellido = models.CharField(max_length=150, null=False)
    Telefono = models.CharField(max_length=15, null=True)
    Cedula = models.CharField(max_length=20, null=True)

    def __str__(self):
        return "%s %s" % (self.ID_USUARIO, self.Nombre_Apellido, self.Telefono,self.Cedula)

class Facturas(models.Model):
    ID_Facturas = models.AutoField(primary_key=True, null=False)
    Monto_Solicitado = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Tasa = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Cuotas = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Cuotas_Mensuales = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Monto_Pagar = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Capital = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Interes = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Fecha = models.DateField()
    Usuario_ID = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    Nombre_Apellido = models.CharField(max_length=150, null=False)
    Telefono = models.CharField(max_length=15, null=True)
    Cedula = models.CharField(max_length=20, null=True)

class HistorialFacturas(models.Model):
    ID_HistorialFactura = models.AutoField(primary_key=True, null=False)
    Monto_Solicitado = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Tasa = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Cuotas = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Cuotas_Mensuales = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Monto_Pagar = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Capital = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Interes = models.DecimalField(max_digits=10, null=False, decimal_places=2)
    Fecha = models.DateField()
    Factura_ID = models.ForeignKey(Facturas, on_delete=models.CASCADE)
    Usuario_ID = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    Nombre_Apellido = models.CharField(max_length=150, null=False)
    Telefono = models.CharField(max_length=15, null=True)
    Cedula = models.CharField(max_length=20, null=True)