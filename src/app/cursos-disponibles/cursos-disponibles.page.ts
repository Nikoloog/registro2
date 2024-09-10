import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos-disponibles',
  templateUrl: './cursos-disponibles.page.html',
  styleUrls: ['./cursos-disponibles.page.scss'],
})
export class CursosDisponiblesPage implements OnInit {
  asignaturas: { nombre: string, asistencia: number }[] = [
    { nombre: 'Calidad de Software', asistencia: 85 },
    { nombre: 'Programacion de Aplicaciones Moviles', asistencia: 90 },
    { nombre: 'Arquitectura', asistencia: 75 },
    { nombre: 'Estadistica Descriptiva', asistencia: 80 },
    { nombre: 'Ingles Intermedio', asistencia: 95 }
  ];
  username: string = '';
  role: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Nombre del Estudiante';
      this.role = params['role'] || 'alumno';
    });
  }

  volver() {
    this.router.navigate(['/inicio-estudiante'], { queryParams: { username: this.username, role: this.role } });
  }
}
