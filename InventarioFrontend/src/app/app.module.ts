import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { FacturarComponent } from './components/facturar/facturar.component';
import { Header2Component } from './components/header2/header2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistorialFacturaComponent } from './components/historial-factura/historial-factura.component';
import { HistorialClienteComponent } from './components/historial-cliente/historial-cliente.component';
import { ClientesVencidosComponent } from './components/clientes-vencidos/clientes-vencidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AgregarClienteComponent,
    FacturarComponent,
    Header2Component,
    HistorialFacturaComponent,
    HistorialClienteComponent,
    ClientesVencidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
