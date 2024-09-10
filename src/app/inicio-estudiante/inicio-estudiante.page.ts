import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-inicio-estudiante',
  templateUrl: './inicio-estudiante.page.html',
  styleUrls: ['./inicio-estudiante.page.scss'],
})
export class InicioEstudiantePage implements OnInit {
  username: string = '';
  role: string = '';

  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit() {
    const user = this.storageService.getItem('user');
    if (user && user.role === 'alumno') {
      this.username = user.username;
      this.role = user.role;
    } else {
      // Redirigir al login si no hay datos del usuario o si no es alumno
      this.router.navigate(['/login']);
    }
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`], { queryParams: { username: this.username, role: this.role } });
  }

  logout() {
    
    this.storageService.removeItem('user');
    this.router.navigate(['/login']);
  }
}