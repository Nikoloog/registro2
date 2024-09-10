import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessorHomePageRoutingModule } from './professor-home-routing.module';

import { ProfessorHomePage } from './professor-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessorHomePageRoutingModule
  ],
  declarations: [ProfessorHomePage]
})
export class ProfessorHomePageModule {}
