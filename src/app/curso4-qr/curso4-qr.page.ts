import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso4-qr',
  templateUrl: './curso4-qr.page.html',
  styleUrls: ['./curso4-qr.page.scss'],
})
export class Curso4QrPage implements OnInit {
  username: string = '';
  students = [
    { name: 'Juan Pérez', grade: 'Reprobado', scanned: true },
    { name: 'María López', grade: 'Reprobado', scanned: false },
    { name: 'Carlos García', grade: 'Reprobado', scanned: true },
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Nombre del Profesor';
    });

    // Navegar automáticamente a la lista de estudiantes después de 1 minuto (60000 ms)
    setTimeout(() => {
      this.goToListaEstudiantes();
    }, 6000);
  }

  goToListaEstudiantes() {
    this.router.navigate(['/lista-estudiantes'], { queryParams: { username: this.username, students: JSON.stringify(this.students) } });
  }

  goBack() {
    this.router.navigate(['/professor-home'], { queryParams: { username: this.username } });
  }
}