import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface LoginResponse {
  message: string;
  usuario: any;
}

interface ErrorResponse {
  error: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  nombreUsuario: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Iniciar sesión
  async login() {
    try {
      // Datos de inicio de sesión
      const data = {
        nombreUsuario: this.nombreUsuario,
        password: this.password,
      };

      // Llamada a la API
      const response = await this.http
        .post<LoginResponse | ErrorResponse>(
          'http://localhost:5000/usuarios/login',
          data
        )
        .toPromise();

      if (response && 'error' in response) {
        this.errorMessage = response.error;
      } else if (response) {
        console.log(response.message);

        // Restablece los campos de nombre de usuario y contraseña después de iniciar sesión
        this.nombreUsuario = '';
        this.password = '';
        this.errorMessage = '';

        // Verificar el idRol del usuario
        const idRol = response.usuario.idRol;

        if (idRol === 1) {
          // El usuario es Gerente de tienda
          this.router.navigate(['/menu']); // Redireccionar al menú
        } else {
          // El usuario no es Gerente de tienda
          this.router.navigate(['/menu-alternativo']); // Redireccionar al menú alternativo
        }
      }
    } catch (error) {
      console.error(error);
      this.errorMessage = 'Usuario o contraseña incorrectos :(';
    }
  }
}
