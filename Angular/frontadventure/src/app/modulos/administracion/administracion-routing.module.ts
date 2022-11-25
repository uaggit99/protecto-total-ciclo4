import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarComponent } from './departamento/buscar/buscar.component';
import { CrearComponent } from './departamento/crear/crear.component';
import { EditarComponent } from './departamento/editar/editar.component';
import { BuscarParqueComponent } from './parque/buscar-parque/buscar-parque.component';
import { CrearParqueComponent } from './parque/crear-parque/crear-parque.component';
import { EditarParqueComponent } from './parque/editar-parque/editar-parque.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';


const routes: Routes = [

  {
    path: "crear-persona",
    component: CrearPersonaComponent,
    canActivate :[ValidadorSesionGuard]
  },
  {
    path: "personas",
    component: BuscarPersonaComponent,
    canActivate :[ValidadorSesionGuard]

  },
  {
    path: "editar-persona/:id",
    component: EditarPersonaComponent,
    canActivate :[ValidadorSesionGuard]
  },
  {
    path: "eliminar-persona/:id",
    component: EliminarPersonaComponent,
    canActivate :[ValidadorSesionGuard]
  },
  {
    path: "crear-plan",
    component: CrearPlanComponent,
    canActivate :[ValidadorSesionGuard]
  },

  {
    path: "editar-plan/:id",
    component: EditarPlanComponent,
    canActivate :[ValidadorSesionGuard]
  },
  {
    path: "eliminar-plan/:id",
    component: EliminarPlanComponent,
    canActivate :[ValidadorSesionGuard]
  },
  {
    path: "planes",
    component: BuscarPlanComponent,
    canActivate :[ValidadorSesionGuard]

  },
  {
    path: "crear-departamento",
    component : CrearComponent,
    canActivate :[ValidadorSesionGuard]
    
  },
  {
    path:"buscar-departamento",
    component : BuscarComponent,
    canActivate :[ValidadorSesionGuard]
    
  },
  {
    path : "editar-departamento/:id",
    component : EditarComponent,
    canActivate :[ValidadorSesionGuard]
  },
  {
    path: "buscar-parque",
    component : BuscarParqueComponent,
    canActivate :[ValidadorSesionGuard]
  },
  {
    path: "crear-parque",
    component : CrearParqueComponent,
    canActivate :[ValidadorSesionGuard]
  },
  {
    path: "editar-parque/:id",
    component : EditarParqueComponent,
    canActivate :[ValidadorSesionGuard]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
