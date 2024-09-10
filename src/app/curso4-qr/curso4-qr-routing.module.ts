import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Curso4QrPage } from './curso4-qr.page';

const routes: Routes = [
  {
    path: '',
    component: Curso4QrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Curso4QrPageRoutingModule {}
