import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service'; // Asegúrate de tener un servicio de almacenamiento

@Component({
  selector: 'app-asistencia-registrada',
  templateUrl: './asistencia-registrada.page.html',
  styleUrls: ['./asistencia-registrada.page.scss'],
})
export class AsistenciaRegistradaPage implements OnInit {
  qrData: string = '';
  username: string = '';
  subjectName: string = '';
  teacherName: string = '';
  section: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService // Inyecta el servicio de almacenamiento
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.qrData = params['qrData'] || 'Datos del QR no disponibles';
      this.username = params['username'] || 'Nombre del Estudiante';
      this.subjectName = params['subjectName'] || 'Asignatura no disponible';
      this.teacherName = params['teacherName'] || 'Profesor no disponible';
      this.section = params['section'] || 'Sección no disponible';

      // Incrementar el porcentaje de asistencia
      this.incrementAttendance(this.subjectName);
    });
  }

  incrementAttendance(subjectName: string) {
    let attendance = this.storageService.getItem(subjectName) || 0;
    attendance = Math.min(attendance + 10, 100); // Incrementar en 10% hasta un máximo de 100%
    this.storageService.setItem(subjectName, attendance);
  }

  volver() {
    this.router.navigate(['/inicio-estudiante'], { 
      queryParams: { 
        username: this.username,
        subjectName: this.subjectName,
        teacherName: this.teacherName,
        section: this.section
      } 
    });
  }
}