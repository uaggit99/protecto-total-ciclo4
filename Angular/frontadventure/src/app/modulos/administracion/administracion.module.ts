import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { CrearPlanesComponent } from './planes/crear-planes/crear-planes.component';
import { EditarPlanesComponent } from './planes/editar-planes/editar-planes.component';
import { BuscarPlanesComponent } from './planes/buscar-planes/buscar-planes.component';
import { EliminarPlanesComponent } from './planes/eliminar-planes/eliminar-planes.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    BuscarPersonaComponent,
    EliminarPersonaComponent,
    CrearPlanesComponent,
    EditarPlanesComponent,
    BuscarPlanesComponent,
    EliminarPlanesComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    BuscarPlanComponent,
    EliminarPlanComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
