import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qr-lector',
  templateUrl: './qr-lector.page.html',
  styleUrls: ['./qr-lector.page.scss'],
})
export class QrLectorPage implements OnInit {
  username: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Nombre del Estudiante';
    });
    this.startScan();
  }

  startScan() {
    // Simular la lectura de un código QR
    setTimeout(() => {
      const simulatedQrData = 'Simulated QR Data';
      this.onQrScanned(simulatedQrData);
    }, 2000);

    // Código real para dispositivos móviles
    /*
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        // Start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);

          // Stop scanning
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning

          this.onQrScanned(text);
        });

        this.qrScanner.show();
      } else if (status.denied) {
        // Camera permission was permanently denied
        this.qrScanner.openSettings();
      } else {
        // Permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    }).catch((e: any) => console.log('Error is', e));
    */
  }

  onQrScanned(qr: string) {
    console.log('QR escaneado:', qr);
    this.router.navigate(['/asistencia-registrada'], { queryParams: { qrData: qr, username: this.username } });
  }

  volver() {
    this.router.navigate(['/inicio-estudiante'], { queryParams: { username: this.username } });
  }
}