import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Sucursal {
  id: number;
  nombre: string;
  direccion: string;
}

interface Colaborador {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string | null;
}

@Component({
  selector: 'app-asignar-sucursal',
  templateUrl: './asignar-sucursal.component.html',
  styleUrls: ['./asignar-sucursal.component.css'],
})
export class AsignarSucursalComponent implements OnInit {
  sucursales: Sucursal[] = [];
  selectedSucursal: number = -1;
  colaboradores: Colaborador[] = [];
  selectedColaborador: number = -1;
  distancia: number | null = null;
  distanciaError: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.listarSucursales();
  }

  // Listar sucursales
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

  // Listar colaboradores
  async listarColaboradores() {
    try {
      // Llamada a la API
      const response = await this.http
        .get<{ colaboradores?: Colaborador[] }>(
          'http://localhost:5000/colaboradores/listar'
        )
        .toPromise();
      if (response && response.colaboradores) {
        this.colaboradores = response.colaboradores;
      } else {
        console.error('No se encontraron los colaboradores :(');
      }
    } catch (error) {
      console.error('Error al obtener los colaboradores :(', error);
    }
  }

  // Evento al seleccionar un elemento del select de sucursales
  onSucursalChange(event: any) {
    this.selectedSucursal = event.target.value;
    if (this.selectedSucursal !== -1) {
      this.listarColaboradores();
    } else {
      this.colaboradores = [];
      this.selectedColaborador = -1;
    }
  }

  // Evento al seleccionar un elemento del select de colaboradores
  onColaboradorChange(event: any) {
    this.selectedColaborador = event.target.value;
  }

  // Validar distancia
  validateDistancia() {
    this.distanciaError =
      this.distancia === null || this.distancia <= 0 || this.distancia > 100;
  }

  // Validar formulario
  isValidForm(): boolean {
    return (
      this.selectedSucursal !== -1 &&
      this.selectedColaborador !== -1 &&
      this.distancia !== null &&
      !this.distanciaError
    );
  }

  // Asignar una sucursal a un colaborador
  async asignarSucursal() {
    try {
      if (this.distancia === null || this.distanciaError) {
        return;
      }

      // Datos
      const data = {
        idSucursal: this.selectedSucursal,
        idColaborador: this.selectedColaborador,
        distancia: this.distancia,
      };

      // Llamada a la API
      const response = await this.http
        .post('http://localhost:5000/sucursalesAsignadas/crear', data)
        .toPromise();
      console.log(response);

      alert('Sucursal asignada exitosamente :D');
      location.reload();
    } catch (error) {
      console.error(
        'Error al asignar la sucursal :( El colaborador ya fue asignado a la sucursal seleccionada.',
        error
      );
      this.errorMessage =
        'Error al asignar la sucursal :( El colaborador ya fue asignado a la sucursal seleccionada.';
    }
  }
}
