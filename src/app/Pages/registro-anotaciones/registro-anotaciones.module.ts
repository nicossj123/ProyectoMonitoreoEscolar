import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAnotacionesPageRoutingModule } from './registro-anotaciones-routing.module';

import { RegistroAnotacionesPage } from './registro-anotaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAnotacionesPageRoutingModule
  ],
  declarations: [RegistroAnotacionesPage]
})
export class RegistroAnotacionesPageModule {}
