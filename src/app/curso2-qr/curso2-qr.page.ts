import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-curso2-qr',
  templateUrl: './curso2-qr.page.html',
  styleUrls: ['./curso2-qr.page.scss'],
})
export class Curso2QrPage {
  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }
}