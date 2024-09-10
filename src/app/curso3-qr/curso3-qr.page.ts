import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-curso3-qr',
  templateUrl: './curso3-qr.page.html',
  styleUrls: ['./curso3-qr.page.scss'],
})
export class Curso3QrPage {
  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }
}
