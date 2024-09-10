import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso1ReprobadosPage } from './curso1-reprobados.page';

const routes: Routes = [
  {
    path: '',
    component: Curso1ReprobadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso1ReprobadosPageRoutingModule {}
