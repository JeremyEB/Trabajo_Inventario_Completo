import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
      
  }

  agregarCliente(){
    this.router.navigate(['/agregarCliente'])
  }

  facturar(){
    this.router.navigate(['/facturar'])
  }

  tabla_Cliente(){
    this.router.navigate(['/tabla_Cliente'])
  }

  historialFactura(){
    this.router.navigate(['/historialFactura'])
  }

  historialCliente(){
    this.router.navigate(['/historialCliente'])
  }

  clientesVencidos(){
    this.router.navigate(['/clientesVencidos'])
  }

}
