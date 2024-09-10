import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.page.html',
  styleUrls: ['./lista-estudiantes.page.scss'],
})
export class ListaEstudiantesPage implements OnInit {
  username: string = '';
  students: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Nombre del Profesor';
      this.students = params['students'] ? JSON.parse(params['students']) : [];
    });
  }

  goBack() {
    this.router.navigate(['/professor-home'], { queryParams: { username: this.username } });
  }
}