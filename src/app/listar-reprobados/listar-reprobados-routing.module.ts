import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarReprobadosPage } from './listar-reprobados.page';

const routes: Routes = [
  {
    path: '',
    component: ListarReprobadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarReprobadosPageRoutingModule {}
