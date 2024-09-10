import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso2ReprobadosPage } from './curso2-reprobados.page';

const routes: Routes = [
  {
    path: '',
    component: Curso2ReprobadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso2ReprobadosPageRoutingModule {}
