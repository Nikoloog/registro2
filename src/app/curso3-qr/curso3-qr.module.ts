import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Curso3QrPageRoutingModule } from './curso3-qr-routing.module';
import { Curso3QrPage } from './curso3-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso3QrPageRoutingModule
  ],
  declarations: [Curso3QrPage]
})
export class Curso3QrPageModule {}