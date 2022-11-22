import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    component: CrearPersonaComponent
  },
  {
    path: "personas",
    component: BuscarPersonaComponent
  },
  {
    path: "editar-persona",
    component: EditarPersonaComponent
  },
  {
    path: "eliminar-persona",
    component: EliminarPersonaComponent
  },
  {
    path: "crear-plan",
    component: CrearPlanComponent
  },

  {
    path: "editar-plan/:id",
    component: EditarPlanComponent
  },
  {
    path: "eliminar-plan/:id",
    component: EliminarPlanComponent
  },
  {
    path: "planes",
    component: BuscarPlanComponent

  },
  {
    path: "crear-departamento",
    component : CrearComponent
    
  },
  {
    path:"buscar-departamento",
    component : BuscarComponent
    
  },
  {
    path : "editar-departamento/:id",
    component : EditarComponent
  },
  {
    path: "buscar-parque",
    component : BuscarParqueComponent
  },
  {
    path: "crear-parque",
    component : CrearParqueComponent
  },
  {
    path: "editar-parque/:id",
    component : EditarParqueComponent
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
