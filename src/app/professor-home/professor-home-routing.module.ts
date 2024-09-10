import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessorHomePage } from './professor-home.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorHomePageRoutingModule {}
