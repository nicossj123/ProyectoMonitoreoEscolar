import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuRegistrosPageRoutingModule } from './menu-registros-routing.module';

import { MenuRegistrosPage } from './menu-registros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRegistrosPageRoutingModule
  ],
  declarations: [MenuRegistrosPage]
})
export class MenuRegistrosPageModule {}
