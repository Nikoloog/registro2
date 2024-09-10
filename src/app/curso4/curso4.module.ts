import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Curso4PageRoutingModule } from './curso4-routing.module';
import { Curso4Page } from './curso4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Curso4PageRoutingModule
  ],
  declarations: [Curso4Page]
})
export class Curso4PageModule {}