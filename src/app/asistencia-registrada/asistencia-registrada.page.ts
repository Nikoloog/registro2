import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asistencia-registrada',
  templateUrl: './asistencia-registrada.page.html',
  styleUrls: ['./asistencia-registrada.page.scss'],
})
export class AsistenciaRegistradaPage implements OnInit {
  qrData: string = '';
  username: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.qrData = params['qrData'] || 'Datos del QR no disponibles';
      this.username = params['username'] || 'Nombre del Estudiante';
    });
  }

  volver() {
    this.router.navigate(['/inicio-estudiante'], { queryParams: { username: this.username } });
  }
}