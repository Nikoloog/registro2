import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso3',
  templateUrl: './curso3.page.html',
  styleUrls: ['./curso3.page.scss'],
})
export class Curso3Page implements OnInit {
  username: string = '';
  students = [
    { name: 'Juan Pérez', attendance: 90 },
    { name: 'María López', attendance: 60 },
    { name: 'Carlos García', attendance: 80 },
    { name: 'Ana Martínez', attendance: 65 }
  ];

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  goBack() {
    this.navCtrl.back();
  }
}
