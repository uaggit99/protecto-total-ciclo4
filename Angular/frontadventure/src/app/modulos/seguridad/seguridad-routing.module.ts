import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {
    path:'identificacion',
    component : IdentificacionComponent
  },
  {
    path :'cambioClave',
    component :CambioClaveComponent
  },{
    path: 'recuperar-clave',
    component : RecuperarClaveComponent
  },
  {
    path: 'cerrarSesion',
    component :CerrarSesionComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
