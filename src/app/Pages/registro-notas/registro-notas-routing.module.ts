import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroNotasPage } from './registro-notas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroNotasPageRoutingModule {}
