import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso2',
  templateUrl: './curso2.page.html',
  styleUrls: ['./curso2.page.scss'],
})
export class Curso2Page implements OnInit {
  username: string = '';
  students = [
    { name: 'Ana Torres', attendance: 90 },
    { name: 'Luis Martínez', attendance: 60 },
    { name: 'Sofia Hernández', attendance: 80 },
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