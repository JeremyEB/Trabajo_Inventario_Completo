import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createCliente, createfacturar, searchCliente, updateFactura, historialFacturas } from '../models/modelos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  /* EndPoints */
    /* EndPoint para ver todos los clientes */
    allClientes = 'http://127.0.0.1:8000/Backend/usuario_list'
    /* EndPoint para la creacion de los clientes */
    urlCreandoCliente = 'http://127.0.0.1:8000/Backend/creando_usuario';
    /* Endpoint para buscar un cliente */
    urlBuscarCliente = 'http://127.0.0.1:8000/Backend/usuario_details/';
    /*Endpoint lista de clientes */
    urlCrearFacturar = 'http://127.0.0.1:8000/Backend/creando_facturas';
    /*Endpoint para ver todo las facturar */
    allFacturas = 'http://127.0.0.1:8000/Backend/facturas_list';
    /*Endpoint para ver todas las facturas historial */
    allHistorial = 'http://127.0.0.1:8000/Backend/historialFacturas_list'
    /*Endpoint para buscar una factura */
    urlBuscarFacturas = 'http://127.0.0.1:8000/Backend/facturas_details/';
    /*Endpoint para ver todo el historial del cliente */
    urlVerHistorial = 'http://127.0.0.1:8000/Backend/historial_details/';
    /*Endpoint para actualizar las facturas */
    urlActualizarFacturas = 'http://127.0.0.1:8000/Backend/actualizando-facturas/';
    /*Endpoint para crear en el historial */
    urlCreandoHistorial = 'http://127.0.0.1:8000/Backend/creando_historial';

    getClientes(){
      return this.http.get(this.allClientes);
    }

    getFacturas(){
      return this.http.get(this.allFacturas);
    }

    getHistorial(){
      return this.http.get(this.allHistorial);
    }

    getcrearFactura(){
      return this.http.get(this.urlCrearFacturar);
    }
  
    addCliente(c_cliente:createCliente):Observable<createCliente>{
      return this.http.post<createCliente>(this.urlCreandoCliente, c_cliente);
    }

    addHistorial(h_facturas:historialFacturas):Observable<historialFacturas>{
      return this.http.post<historialFacturas>(this.urlCreandoHistorial, h_facturas);
    }

    searchClientedetail(s_cliente: string){
      return this.http.get(`${this.urlBuscarCliente}${s_cliente}`);
    }

    searchFacturadetail(s_factura: number){
      return this.http.get(`${this.urlBuscarFacturas}${s_factura}`);
    }

    addFacturas(c_facturar:createfacturar):Observable<createfacturar>{
      return this.http.post<createfacturar>(this.urlCrearFacturar, c_facturar);
    }

    searchHistorialFactura(s_historial: string){
      return this.http.get(`${this.urlVerHistorial}${s_historial}`);
    }

    updateFactura(ID_Facturas: number, u_facturar:updateFactura):Observable<updateFactura>{
      return this.http.post<updateFactura>(this.urlActualizarFacturas+`/${ID_Facturas}`, u_facturar);
    }


    /*Probando*/

    urlMostrarFacturas:string = "http://127.0.0.1:8000/Backend/facturas_list";

    urlUpdateFacturas:string = "http://127.0.0.1:8000/Backend/actualizando-facturas";

    getProbandoFactura(){
      return this.http.get(this.urlMostrarFacturas);
    }

    updateProbandoFactura(ID_Facturas:number, UpdateFactura:updateFactura):Observable<updateFactura>{
      return this.http.post<updateFactura>(this.urlUpdateFacturas + `/${ID_Facturas}`, UpdateFactura);
    }

    ProbandosearchFacturadetail(s_factura: number){
      return this.http.get(`${this.urlBuscarFacturas}${s_factura}`);
    }
}
