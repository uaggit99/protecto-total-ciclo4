import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './departamento/crear/crear.component';
import { EditarComponent } from './departamento/editar/editar.component';
import { BuscarComponent } from './departamento/buscar/buscar.component';
import { CrearParqueComponent } from './parque/crear-parque/crear-parque.component';
import { BuscarParqueComponent } from './parque/buscar-parque/buscar-parque.component';
import { EditarParqueComponent } from './parque/editar-parque/editar-parque.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    BuscarPersonaComponent,
    EliminarPersonaComponent,
 
    CrearPlanComponent,
    EditarPlanComponent,
    BuscarPlanComponent,
    EliminarPlanComponent,
    CrearComponent,
    EditarComponent,
    BuscarComponent,
    CrearParqueComponent,
    BuscarParqueComponent,
    EditarParqueComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
