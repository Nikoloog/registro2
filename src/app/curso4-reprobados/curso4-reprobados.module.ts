import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Curso4ReprobadosPageRoutingModule } from './curso4-reprobados-routing.module';

import { Curso4ReprobadosPage } from './curso4-reprobados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso4ReprobadosPageRoutingModule
  ],
  declarations: [Curso4ReprobadosPage]
})
export class Curso4ReprobadosPageModule {}
