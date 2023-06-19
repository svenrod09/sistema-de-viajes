import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { MenuComponent } from './layout/menu/menu.component';
import { MenuAlternativoComponent } from './layout/menu-alternativo/menu-alternativo.component';
import { AsignarSucursalComponent } from './layout/asignar-sucursal/asignar-sucursal.component';
import { RegistrarViajeComponent } from './layout/registrar-viaje/registrar-viaje.component';
import { ReporteDeViajesComponent } from './layout/reporte-de-viajes/reporte-de-viajes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu-alternativo', component: MenuAlternativoComponent },
  { path: 'asignar-sucursal', component: AsignarSucursalComponent },
  { path: 'registrar-viaje', component: RegistrarViajeComponent }, 
  { path: 'reporte-de-viajes', component: ReporteDeViajesComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
