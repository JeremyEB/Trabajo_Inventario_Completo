import { Component } from '@angular/core';
import { Router ,RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Usuario: string;
  Password: string;

  constructor(
    private router: Router
  ) {}

  menu(){
    if (this.Usuario == "Root" && this.Password == "12345678"){
      let datos = {Username: this.Usuario, Contraseña: this.Password}
      localStorage.setItem('Datos', JSON.stringify(datos));
      this.router.navigate(['/home'])
    } else {
      alert("Datos Incorrectos")
    }
  }
}
