import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Curso3PageRoutingModule } from './curso3-routing.module';
import { Curso3Page } from './curso3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso3PageRoutingModule
  ],
  declarations: [Curso3Page]
})
export class Curso3PageModule {}