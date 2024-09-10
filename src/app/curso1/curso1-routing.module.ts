import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso1Page } from './curso1.page';

const routes: Routes = [
  {
    path: '',
    component: Curso1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso1PageRoutingModule {}
