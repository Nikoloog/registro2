import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Curso4QrPageRoutingModule } from './curso4-qr-routing.module';
import { Curso4QrPage } from './curso4-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso4QrPageRoutingModule
  ],
  declarations: [Curso4QrPage]
})
export class Curso4QrPageModule {}
