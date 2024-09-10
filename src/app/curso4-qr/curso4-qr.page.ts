import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-curso4-qr',
  templateUrl: './curso4-qr.page.html',
  styleUrls: ['./curso4-qr.page.scss'],
})
export class Curso4QrPage {
  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }
}
