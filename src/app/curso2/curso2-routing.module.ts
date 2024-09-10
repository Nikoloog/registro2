import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso2Page } from './curso2.page';

const routes: Routes = [
  {
    path: '',
    component: Curso2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso2PageRoutingModule {}
