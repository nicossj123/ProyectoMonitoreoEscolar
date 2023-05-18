import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuRegistrosPage } from './menu-registros.page';

const routes: Routes = [
  {
    path: '',
    component: MenuRegistrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRegistrosPageRoutingModule {}
