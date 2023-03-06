import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { createCliente } from 'src/app/models/modelos';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent {
  c_cliente: createCliente = new createCliente();
  dataTable: any = [];

  constructor(
    private apiService: ApiService
  ) { }

  onAddCliente(c_cliente: createCliente):void{
    this.apiService.addCliente(c_cliente).subscribe(res => {
      if (res) {
        alert(`El cliente ${c_cliente.Nombre_Apellido} fue agregado al sistema satisfactoriamente`);       
        this.clear();
      } else {
        alert("Error")
      }
    });
  }

  clear(){
    this.c_cliente.Nombre_Apellido = "";
    this.c_cliente.Telefono = "";
    this.c_cliente.Cedula = "";
  }
}
