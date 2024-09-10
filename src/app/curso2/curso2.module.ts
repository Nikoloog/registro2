import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Curso2PageRoutingModule } from './curso2-routing.module';
import { Curso2Page } from './curso2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso2PageRoutingModule
  ],
  declarations: [Curso2Page]
})
export class Curso2PageModule {}