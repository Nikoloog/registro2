import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Curso2ReprobadosPageRoutingModule } from './curso2-reprobados-routing.module';

import { Curso2ReprobadosPage } from './curso2-reprobados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso2ReprobadosPageRoutingModule
  ],
  declarations: [Curso2ReprobadosPage]
})
export class Curso2ReprobadosPageModule {}
