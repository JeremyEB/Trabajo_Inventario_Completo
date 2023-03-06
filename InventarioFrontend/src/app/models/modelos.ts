export class createCliente{
    Nombre_Apellido: string = "";
    Telefono: string = "";
    Cedula: string = "";
}

export class searchCliente{
    ID_USUARIO: number = 0;
    Nombre_Apellido: string = "";
    Telefono: string = "";
    Cedula: string = "";
}

export class createfacturar{
    Monto_Solicitado: number = 0;
    Tasa: number = 0;
    Cuotas: number = 0;
    Cuotas_Mensuales: number = 0;
    Monto_Pagar: number = 0;
    Capital: number = 0;
    Interes: number = 0;
    Fecha: Date = new Date();
    Usuario_ID: number = 0;
    Nombre_Apellido: string = "";
    Telefono: string = "";
    Cedula: string = "";
}

export class searchFacturas{
    ID_Facturas: number = 0;
    Monto_Solicitado: number = 0;
    Tasa: number = 0;
    Cuotas: number = 0;
    Cuotas_Mensuales: number = 0;
    Monto_Pagar: number = 0;
    Capital: number = 0;
    Interes: number = 0;
    Fecha: Date = new Date();
    Usuario_ID: number = 0;
    Nombre_Apellido: string = "";
    Telefono: string = "";
    Cedula: string = "";
}

export class updateFactura{
    ID_Facturas: number = 0;
    Monto_Solicitado: number = 0;
    Tasa: number = 0;
    Cuotas: number = 0;
    Cuotas_Mensuales: number = 0;
    Monto_Pagar: number = 0;
    Capital: number = 0;
    Interes: number = 0;
    Fecha: Date = new Date();
    Usuario_ID: number = 0;
    Nombre_Apellido: string = "";
    Telefono: string = "";
    Cedula: string = "";
}

export class historialFacturas{
    Monto_Solicitado: number = 0;
    Tasa: number = 0;
    Cuotas: number = 0;
    Cuotas_Mensuales: number = 0;
    Monto_Pagar: number = 0;
    Capital: number = 0;
    Interes: number = 0;
    Fecha: Date = new Date();
    Usuario_ID: number = 0;
    Factura_ID:number = 0;
    Nombre_Apellido: string = "";
    Telefono: string = "";
    Cedula: string = "";
}