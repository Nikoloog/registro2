import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = ''; 

  constructor(private router: Router, private alertController: AlertController) {}

  async resetPassword() {
    const alert = await this.alertController.create({
      header: 'Contraseña restablecida',
      message: 'Por favor, revisa tu correo electrónico.',
      buttons: ['OK']
    });

    await alert.present();
    this.router.navigate(['/login']);
  }
}