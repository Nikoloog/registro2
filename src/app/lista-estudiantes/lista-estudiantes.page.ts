import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QrService } from '../services/qr.service'; // Importar el servicio
import { StorageService } from '../services/storage.service'; // Importar el servicio

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.page.html',
  styleUrls: ['./lista-estudiantes.page.scss'],
})
export class ListaEstudiantesPage implements OnInit {
  username: string = '';
  teacherName: string = '';
  students: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qrService: QrService, // Inyectar el servicio
    private storageService: StorageService // Inyectar el servicio
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Nombre Profesor';
      this.teacherName = params['teacherName'] || 'Nombre Profesor';
    });

    this.qrService.getStudents().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        };
      });

      // Actualizar el estado de 'scanned' desde Firestore
      this.students.forEach(student => {
        this.storageService.getItem('students', student.name).then((data: any) => {
          if (data) {
            student.scanned = data.scanned;
            student.name = data.name;
          }
        });
      });
    });
  }

  goBack() {
    this.router.navigate(['/professor-home'], { queryParams: { username: this.username } });
  }
}