import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso2QrPage } from './curso2-qr.page';

const routes: Routes = [
  {
    path: '',
    component: Curso2QrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso2QrPageRoutingModule {}
