import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  role: string = '';

  users = [
    { username: 'Freddy', password: '1234', role: 'profesor' },
    { username: 'Nicolas', password: '12345', role: 'alumno' },
  ];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private storageService: StorageService
  ) {}

  async login() {
    const user = this.users.find(u => u.username === this.username && u.password === this.password && u.role === this.role);
    if (user) {
      
      this.storageService.setItem('user', user);
      if (user.role === 'profesor') {
        this.router.navigate(['/professor-home'], { queryParams: { username: user.username, role: user.role } });
      } else {
        this.router.navigate(['/inicio-estudiante'], { queryParams: { username: user.username, role: user.role } });
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Invalid username, password, or role.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  
  navigateToResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}