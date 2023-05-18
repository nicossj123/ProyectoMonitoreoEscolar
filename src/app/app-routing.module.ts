import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu-registros',
    loadChildren: () => import('./Pages/menu-registros/menu-registros.module').then( m => m.MenuRegistrosPageModule)
  },
  {
    path: 'registro-notas',
    loadChildren: () => import('./Pages/registro-notas/registro-notas.module').then( m => m.RegistroNotasPageModule)
  },
  {
    path: 'registro-asistencia',
    loadChildren: () => import('./Pages/registro-asistencia/registro-asistencia.module').then( m => m.RegistroAsistenciaPageModule)
  },
  {
    path: 'registro-anotaciones',
    loadChildren: () => import('./Pages/registro-anotaciones/registro-anotaciones.module').then( m => m.RegistroAnotacionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
