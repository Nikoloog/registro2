import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-curso1',
  templateUrl: './curso1.page.html',
  styleUrls: ['./curso1.page.scss'],
})
export class Curso1Page implements OnInit {
  username: string = '';
  students: any[] = [];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });

    this.loadStudents();
  }

  loadStudents() {
    this.storageService.getItem('cursos', 'curso1').then(curso => {
      if (curso) {
        this.students = curso.students || [];
      } else {
        console.error('Curso no encontrado');
      }
    });
  }

  goToListaEstudiantes() {
    this.navCtrl.navigateForward('/lista-estudiantes', { queryParams: { username: this.username } });
  }

  goBack() {
    this.navCtrl.back();
  }
}