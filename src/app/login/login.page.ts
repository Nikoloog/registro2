import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  role: string = ''; // Añadir el campo de rol

  // Simular una base de datos de usuarios
  users = [
    { username: 'niko', password: '1234', role: 'profesor' },
    { username: 'alumno', password: '12345', role: 'alumno' },
    // Añadir más usuarios según sea necesario
  ];

  constructor(private router: Router, private alertController: AlertController) {}

  async login() {
    // Validar las credenciales
    const user = this.users.find(u => u.username === this.username && u.password === this.password);

    if (user) {
      if (user.role === this.role) {
        if (user.role === 'profesor') {
          // Navegar a la página de inicio del profesor con el nombre de usuario
          this.router.navigate(['/professor-home'], { queryParams: { username: this.username } });
        } else {
          // Navegar a la página de inicio del alumno con el nombre de usuario y el rol
          this.router.navigate(['/home'], { queryParams: { username: this.username, role: this.role } });
        }
      } else {
        // Mostrar un mensaje de error si el rol no coincide
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Las credenciales no coinciden con el rol seleccionado.',
          buttons: ['OK']
        });
        await alert.present();
      }
    } else {
      // Mostrar un mensaje de error si las credenciales no son válidas
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Nombre de usuario o contraseña incorrectos.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  navigateToResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}