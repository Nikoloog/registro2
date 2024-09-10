import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCursosPageRoutingModule } from './qr-cursos-routing.module';

import { QrCursosPage } from './qr-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCursosPageRoutingModule
  ],
  declarations: [QrCursosPage]
})
export class QrCursosPageModule {}
