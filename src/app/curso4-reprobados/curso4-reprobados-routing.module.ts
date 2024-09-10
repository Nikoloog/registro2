import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso4ReprobadosPage } from './curso4-reprobados.page';

const routes: Routes = [
  {
    path: '',
    component: Curso4ReprobadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso4ReprobadosPageRoutingModule {}
