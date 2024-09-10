import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEstudiantesPageRoutingModule } from './lista-estudiantes-routing.module';

import { ListaEstudiantesPage } from './lista-estudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEstudiantesPageRoutingModule
  ],
  declarations: [ListaEstudiantesPage]
})
export class ListaEstudiantesPageModule {}
