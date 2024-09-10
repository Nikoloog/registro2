import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarReprobadosPageRoutingModule } from './listar-reprobados-routing.module';

import { ListarReprobadosPage } from './listar-reprobados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarReprobadosPageRoutingModule
  ],
  declarations: [ListarReprobadosPage]
})
export class ListarReprobadosPageModule {}
