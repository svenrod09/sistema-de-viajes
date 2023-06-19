import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

interface Sucursal {
  id: number;
  nombre: string;
  direccion: string;
}

interface Transportista {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string | null;
  idTarifa: number;
}

@Component({
  selector: 'app-registrar-viaje',
  templateUrl: './registrar-viaje.component.html',
  styleUrls: ['./registrar-viaje.component.css'],
})
export class RegistrarViajeComponent implements OnInit {
  sucursales: Sucursal[] = [];
  selectedSucursal: number = -1;
  transportistas: Transportista[] = [];
  selectedTransportista: number = -1;
  selectedDate = new FormControl(new Date());
  distancia: number | null = null;
  distanciaError: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.listarSucursales();
    this.listarTransportistas();
  }

  // Listar las sucursales
  async listarSucursales() {
    try {
      // Llamada a la API
      const response = await this.http
        .get<{ sucursales?: Sucursal[] }>(
          'http://localhost:5000/sucursales/listar'
        )
        .toPromise();
      if (response && response.sucursales) {
        this.sucursales = response.sucursales;
      } else {
        console.error('No se encontraron las sucursales :(');
      }
    } catch (error) {
      console.error('Error al obtener las sucursales :(', error);
    }
  }

  // Listar los transportistas
  async listarTransportistas() {
    try {
      // Llamada a la API
      const response = await this.http
        .get<{ transportistas?: Transportista[] }>(
          'http://localhost:5000/transportistas/listar'
        )
        .toPromise();
      if (response && response.transportistas) {
        this.transportistas = response.transportistas;
      } else {
        console.error('No se encontraron los transportistas :(');
      }
    } catch (error) {
      console.error('Error al obtener los transportistas :(', error);
    }
  }

  // Evento al seleccionar un elemento del select de sucursales
  onSucursalChange(event: any) {
    this.selectedSucursal = event.target.value;
  }

  // Evento al seleccionar un elemento del select de transportistas
  onTransportistaChange(event: any) {
    this.selectedTransportista = event.target.value;
  }

  // Validar distancia
  validateDistancia() {
    this.distanciaError =
      this.distancia === null || this.distancia <= 0 || this.distancia > 50;
  }

  // Validar formulario
  isValidForm(): boolean {
    return (
      this.selectedSucursal !== -1 &&
      this.selectedTransportista !== -1 &&
      !this.distanciaError &&
      this.selectedDate.value !== null
    );
  }

  // Registrar nuevo viaje
  async registrarViaje() {
    try {
      if (this.distancia === null || this.distanciaError) {
        return;
      }

      // Datos
      const data = {
        idSucursal: this.selectedSucursal,
        idTransportista: this.selectedTransportista,
        idUsuario: 1,
        fecha: this.selectedDate,
        distancia: this.distancia,
      };

      // Llamada a la API
      const response = await this.http
        .post('http://localhost:5000/viajes/crear', data)
        .toPromise();
      console.log(response);

      alert('Viaje registrado exitosamente :D');
      location.reload();
    } catch (error) {
      console.error('Error al registrar el viaje :(', error);
      this.errorMessage = 'Error al registrar el viaje :(';
    }
  }
}
