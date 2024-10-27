import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-curso2',
  templateUrl: './curso2.page.html',
  styleUrls: ['./curso2.page.scss'],
})
export class Curso2Page implements OnInit {
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
    this.storageService.getItem('cursos', 'curso2').then(curso => {
      if (curso) {
        this.students = curso.students || [];
      } else {
        console.error('Curso no encontrado');
      }
    });
  }

  goBack() {
    this.navCtrl.back();
  }
}