import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso3QrPage } from './curso3-qr.page';

const routes: Routes = [
  {
    path: '',
    component: Curso3QrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso3QrPageRoutingModule {}
