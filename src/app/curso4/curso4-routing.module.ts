import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso4Page } from './curso4.page';

const routes: Routes = [
  {
    path: '',
    component: Curso4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso4PageRoutingModule {}
