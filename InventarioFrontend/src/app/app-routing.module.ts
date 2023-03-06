import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { FacturarComponent } from './components/facturar/facturar.component';
import { HistorialFacturaComponent } from './components/historial-factura/historial-factura.component';
import { HistorialClienteComponent } from './components/historial-cliente/historial-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClientesVencidosComponent } from './components/clientes-vencidos/clientes-vencidos.component';
import { PermissionsGuard } from './guards/permissions.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [PermissionsGuard] },
  { path: 'agregarCliente', component: AgregarClienteComponent, canActivate: [PermissionsGuard]  },
  { path: 'facturar', component: FacturarComponent, canActivate: [PermissionsGuard]  },
  { path: 'historialFactura', component: HistorialFacturaComponent, canActivate: [PermissionsGuard] },
  { path: 'historialCliente', component: HistorialClienteComponent, canActivate: [PermissionsGuard] },
  { path: 'clientesVencidos', component: ClientesVencidosComponent, canActivate: [PermissionsGuard] ,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
