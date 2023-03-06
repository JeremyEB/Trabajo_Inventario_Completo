import { Component, OnInit } from '@angular/core';
import { historialFacturas, updateFactura } from 'src/app/models/modelos';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clientes-vencidos',
  templateUrl: './clientes-vencidos.component.html',
  styleUrls: ['./clientes-vencidos.component.css']
})
export class ClientesVencidosComponent  {
   /*u_Factura:updateFactura = new updateFactura();
  dataTable:any = [];
  public facturas: Array <any> = [];
  constructor(
    private apiService: ApiService,
    public modal: NgbModal 
  ) { }

Actualizando Factura
  event(){
    this.apiService.allFacturas
  }

  ngOnInit(): void {
    this.onDataTable();
  }

  onDataTable(){
    this.apiService.getProbandoFactura().subscribe(res => {
      this.dataTable = res;
      console.log(res);
    });
  }

  onUpdateFactura(u_Factura:updateFactura):void{
    this.apiService.updateProbandoFactura(u_Factura.ID_Facturas, u_Factura).subscribe(res => {
      if(res){
        alert(`Se modifico la factura`);
        this.onDataTable();
      } else {
        alert('Error');
      }
    })
  }

  onSetData(select:any){
    this.u_Factura.ID_Facturas = select.ID_Facturas;
    this.u_Factura.Monto_Solicitado = select.Monto_Solicitado;
    this.u_Factura.Tasa = select.Tasa;
    this.u_Factura.Cuotas = select.Cuotas;
    this.u_Factura.Cuotas_Mensuales = select.Cuotas_Mensuales;
    this.u_Factura.Monto_Pagar = select.Monto_Pagar;
    this.u_Factura.Capital = select.Capital;
    this.u_Factura.Interes = select.Interes;
    this.u_Factura.Fecha = select.Fecha;
    this.u_Factura.Usuario_ID = select.Usuario_ID;
    this.u_Factura.Nombre_Apellido = select.Nombre_Apellido;
    this.u_Factura.Telefono = select.Telefono;
  }

}*/

h_facturas: historialFacturas = new historialFacturas();
dataTable: any = [];

  constructor(
    private apiService: ApiService
  ) { }

  onAddHistorialFactura(h_facturas: historialFacturas): void{
      this.apiService.addHistorial(h_facturas).subscribe(res => {
        if(res){
          alert(`La factura fue actualizada`);
        } else {
          alert("Error")
        }
      })
  }

}