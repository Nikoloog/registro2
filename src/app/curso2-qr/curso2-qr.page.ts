import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso2-qr',
  templateUrl: './curso2-qr.page.html',
  styleUrls: ['./curso2-qr.page.scss'],
})
export class Curso2QrPage implements OnInit {
  username: string = '';
  students = [
    { name: 'Ana Torres', scanned: true },
    { name: 'Luis Martínez', scanned: false },
    { name: 'Sofía Hernández', scanned: true },
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Nombre del Profesor';
    });

   
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