import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { NavController, AlertController } from '@ionic/angular';
import { QrService } from '../services/qr.service';

@Component({
  selector: 'app-inicio-estudiante',
  templateUrl: './inicio-estudiante.page.html',
  styleUrls: ['./inicio-estudiante.page.scss'],
})
export class InicioEstudiantePage implements OnInit {
  username: string = '';
  role: string = '';
  cursos: any[] = [
    { id: 1, nombre: 'Programación de Aplicaciones Móviles', qrCode: 'QR_PROG_MOVIL' },
    { id: 2, nombre: 'Calidad de Software', qrCode: 'QR_CALIDAD_SW' },
    { id: 3, nombre: 'Ética Profesional', qrCode: 'QR_ETICA_PROF' }
  ];

  constructor(
    private router: Router,
    private storageService: StorageService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private qrService: QrService
  ) {}

  ngOnInit() {
    this.storageService.getItem('users', 'currentUser').then((user: any) => {
      if (user && user.role === 'alumno') {
        this.username = user.username;
        this.role = user.role;
      } else {
        this.router.navigate(['/login']);
      }
    }).catch(error => {
      console.error('Error getting current user:', error);
    });
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`], { queryParams: { username: this.username, role: this.role } });
  }

  logout() {
    this.storageService.removeItem('users', 'currentUser').then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Error logging out:', error);
    });
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
    try {
      await BarcodeScanner.checkPermission({ force: true });
      BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        const qrData = result.content;
        console.log('QR Data:', qrData);
        const curso = this.cursos.find(c => c.id === cursoId);
        if (!curso) {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Curso no encontrado.',
            buttons: ['OK']
          });
          await alert.present();
          return;
        }
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
          const studentRecordKey = `${cursoId}_${this.username}`;
          this.storageService.getItem('students', studentRecordKey).then((data: any) => {
            if (data && data.scanned) {
              const alert = this.alertController.create({
                header: 'Error',
                message: 'Ya has escaneado el QR para esta asignatura.',
                buttons: ['OK']
              });
              alert.then(a => a.present());
            } else {
              const studentRecord = {
                name: this.username,
                subject: profesor.asignatura,
                section: profesor.seccion,
                scanned: true
              };
              // Actualizar la asistencia y el estado de 'scanned' en Firebase usando una transacción
              this.storageService.updateAttendance(studentRecordKey, 10).then(() => {
                this.storageService.setItem('students', studentRecordKey, { name: this.username, scanned: true });
                this.storageService.addStudentToCourse(cursoId, { name: this.username, attendance: 10, scanned: true });
                this.router.navigate(['/asistencia-registrada'], { queryParams: { username: this.username, subjectName: profesor.asignatura, teacherName: profesor.nombre, section: profesor.seccion } });
              }).catch(error => {
                console.error('Error updating attendance:', error);
              });
            }
          }).catch(error => {
            console.error('Error getting student record:', error);
          });
        }
      }
    } catch (error) {
      console.error('Error scanning QR code:', error);
    }
  }
}