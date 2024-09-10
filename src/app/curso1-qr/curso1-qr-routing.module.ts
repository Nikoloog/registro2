import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso1QrPage } from './curso1-qr.page';

const routes: Routes = [
  {
    path: '',
    component: Curso1QrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso1QrPageRoutingModule {}
