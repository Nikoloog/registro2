import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Curso3ReprobadosPageRoutingModule } from './curso3-reprobados-routing.module';

import { Curso3ReprobadosPage } from './curso3-reprobados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso3ReprobadosPageRoutingModule
  ],
  declarations: [Curso3ReprobadosPage]
})
export class Curso3ReprobadosPageModule {}
