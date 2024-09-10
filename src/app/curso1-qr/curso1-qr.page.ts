import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-curso1-qr',
  templateUrl: './curso1-qr.page.html',
  styleUrls: ['./curso1-qr.page.scss'],
})
export class Curso1QrPage {
  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }
}
