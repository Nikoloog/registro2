import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Curso1PageRoutingModule } from './curso1-routing.module';
import { Curso1Page } from './curso1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso1PageRoutingModule
  ],
  declarations: [Curso1Page]
})
export class Curso1PageModule {}