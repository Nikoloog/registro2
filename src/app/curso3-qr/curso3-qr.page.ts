import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso3-qr',
  templateUrl: './curso3-qr.page.html',
  styleUrls: ['./curso3-qr.page.scss'],
})
export class Curso3QrPage implements OnInit {
  username: string = '';
  students = [
    { name: 'Pedro Sánchez', scanned: true },
    { name: 'Laura Gómez', scanned: false },
    { name: 'Diego Fernández', scanned: true },
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