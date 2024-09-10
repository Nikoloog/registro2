import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Curso1ReprobadosPageRoutingModule } from './curso1-reprobados-routing.module';

import { Curso1ReprobadosPage } from './curso1-reprobados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso1ReprobadosPageRoutingModule
  ],
  declarations: [Curso1ReprobadosPage]
})
export class Curso1ReprobadosPageModule {}
