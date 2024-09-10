import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrCursosPage } from './qr-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: QrCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCursosPageRoutingModule {}
