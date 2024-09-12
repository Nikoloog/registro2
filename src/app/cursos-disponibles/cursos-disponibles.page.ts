import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-cursos-disponibles',
  templateUrl: './cursos-disponibles.page.html',
  styleUrls: ['./cursos-disponibles.page.scss'],
})
export class CursosDisponiblesPage implements OnInit {
  cursos: any[] = [
    { id: 1, nombre: 'Programación de Aplicaciones Móviles', asistencia: 0 },
    { id: 2, nombre: 'Calidad de Software', asistencia: 0 },
    { id: 3, nombre: 'Ética Profesional', asistencia: 0 }
  ];

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit() {
    this.cursos.forEach(curso => {
      curso.asistencia = this.storageService.getItem(curso.nombre) || 0;
    });
  }

  volver() {
    this.router.navigate(['/inicio-estudiante']);
  }
}