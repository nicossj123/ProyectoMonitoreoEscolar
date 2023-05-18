import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAnotacionesPage } from './registro-anotaciones.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAnotacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAnotacionesPageRoutingModule {}
