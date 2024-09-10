import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso3Page } from './curso3.page';

const routes: Routes = [
  {
    path: '',
    component: Curso3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso3PageRoutingModule {}
