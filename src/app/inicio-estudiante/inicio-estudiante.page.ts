import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-estudiante',
  templateUrl: './inicio-estudiante.page.html',
  styleUrls: ['./inicio-estudiante.page.scss'],
})
export class InicioEstudiantePage implements OnInit {
  username: string = '';
  role: string = '';
  cursos: any[] = [
    { id: 1, nombre: 'Programación de Aplicaciones Móviles' },
    { id: 2, nombre: 'Calidad de Software' },
    { id: 3, nombre: 'Ética Profesional' }
  ];

  constructor(
    private router: Router,
    private storageService: StorageService,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const user = this.storageService.getItem('user');
    if (user && user.role === 'alumno') {
      this.username = user.username;
      this.role = user.role;
    } else {
      // Redirigir al login si no hay datos del usuario o si no es alumno
      this.router.navigate(['/login']);
    }
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`], { queryParams: { username: this.username, role: this.role } });
  }

  logout() {
    this.storageService.removeItem('user');
    this.router.navigate(['/login']);
  }

  async showCourses() {
    const alert = await this.alertController.create({
      header: 'Selecciona un curso',
      inputs: this.cursos.map(curso => ({
        name: 'curso',
        type: 'radio',
        label: curso.nombre,
        value: curso.id
      })),
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: (cursoId) => {
            this.scanQRCode(cursoId);
          }
        }
      ]
    });

    await alert.present();
  }

  async scanQRCode(cursoId: number) {
    await BarcodeScanner.checkPermission({ force: true });

    BarcodeScanner.hideBackground(); // make background of WebView transparent

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    if (result.hasContent) {
      const qrData = result.content;
      // Aquí puedes agregar la lógica para registrar la asistencia usando los datos del QR
      console.log('QR Data:', qrData);

      let profesor;
      if (cursoId === 1) {
        profesor = {
          nombre: 'Freddy Mauricio Campos Orellana',
          asignatura: 'Programación de Aplicaciones Móviles',
          seccion: '010D'
        };
      } else if (cursoId === 2) {
        profesor = {
          nombre: 'Viktor Andres Tapia Vasquez',
          asignatura: 'Calidad de Software',
          seccion: '012D'
        };
      } else if (cursoId === 3) {
        profesor = {
          nombre: 'Patricio Alejandro Godoy Saez',
          asignatura: 'Ética Profesional',
          seccion: '003D'
        };
      }

      if (profesor) {
        // Navegar a la página de asistencia registrada con los datos del profesor
        this.navCtrl.navigateForward('/asistencia-registrada', {
          queryParams: {
            qrData: qrData,
            username: this.username,
            course: cursoId,
            subjectName: profesor.asignatura,
            teacherName: profesor.nombre,
            section: profesor.seccion
          }
        });
      } else {
        console.error('No se encontró información del profesor para el curso seleccionado.');
      }
    }
  }
}