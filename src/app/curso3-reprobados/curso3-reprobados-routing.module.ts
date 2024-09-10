import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso3ReprobadosPage } from './curso3-reprobados.page';

const routes: Routes = [
  {
    path: '',
    component: Curso3ReprobadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso3ReprobadosPageRoutingModule {}
