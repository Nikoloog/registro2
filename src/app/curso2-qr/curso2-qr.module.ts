import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Curso2QrPageRoutingModule } from './curso2-qr-routing.module';

import { Curso2QrPage } from './curso2-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso2QrPageRoutingModule
  ],
  declarations: [Curso2QrPage]
})
export class Curso2QrPageModule {}
