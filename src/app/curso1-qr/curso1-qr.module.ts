import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Curso1QrPageRoutingModule } from './curso1-qr-routing.module';

import { Curso1QrPage } from './curso1-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso1QrPageRoutingModule
  ],
  declarations: [Curso1QrPage]
})
export class Curso1QrPageModule {}
