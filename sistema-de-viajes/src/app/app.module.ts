import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { MenuComponent } from './layout/menu/menu.component';
import { MenuAlternativoComponent } from './layout/menu-alternativo/menu-alternativo.component';
import { AsignarSucursalComponent } from './layout/asignar-sucursal/asignar-sucursal.component';
import { RegistrarViajeComponent } from './layout/registrar-viaje/registrar-viaje.component';
import { ReporteDeViajesComponent } from './layout/reporte-de-viajes/reporte-de-viajes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'YY-MM-DD',
  },
  display: {
    dateInput: 'YY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'YY-MM-DD',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    MenuAlternativoComponent,
    AsignarSucursalComponent,
    RegistrarViajeComponent,
    ReporteDeViajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
