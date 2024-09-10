import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrLectorPage } from './qr-lector.page';

const routes: Routes = [
  {
    path: '',
    component: QrLectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrLectorPageRoutingModule {}
