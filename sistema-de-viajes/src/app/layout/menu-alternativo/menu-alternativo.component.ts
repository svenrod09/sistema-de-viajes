import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-alternativo',
  templateUrl: './menu-alternativo.component.html',
  styleUrls: ['./menu-alternativo.component.css']
})
export class MenuAlternativoComponent {
  constructor(private router: Router) {}

  // Redireccionar al login
  logout() {
    this.router.navigate(['/login']);
  }
}
