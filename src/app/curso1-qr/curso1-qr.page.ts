import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso1-qr',
  templateUrl: './curso1-qr.page.html',
  styleUrls: ['./curso1-qr.page.scss'],
})
export class Curso1QrPage implements OnInit {
  username: string = '';
  students = [
    { name: 'Juan Pérez', scanned: true },
    { name: 'María López', scanned: false },
    { name: 'Carlos García', scanned: true },
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Nombre del Profesor';
    });

   
    setTimeout(() => {
      this.goToListaEstudiantes();
    }, 6000000);
  }

  goToListaEstudiantes() {
    this.router.navigate(['/lista-estudiantes'], { queryParams: { username: this.username, students: JSON.stringify(this.students) } });
  }

  goBack() {
    this.router.navigate(['/professor-home'], { queryParams: { username: this.username } });
  }
}