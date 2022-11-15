import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPlanesComponent } from './planes/buscar-planes/buscar-planes.component';
import { CrearPlanesComponent } from './planes/crear-planes/crear-planes.component';
import { EditarPlanesComponent } from './planes/editar-planes/editar-planes.component';
import { EliminarPlanesComponent } from './planes/eliminar-planes/eliminar-planes.component';

const routes: Routes = [

  {
    path:"crear-persona",
    component: CrearPersonaComponent
  },
{
    path:"buscar-persona",
    component: BuscarPersonaComponent
  },
  {
    path:"editar-persona",
    component: EditarPersonaComponent
  },
  {
    path:"eliminar-persona",
    component: EliminarPersonaComponent
  },
  {
    path:"crear-planes",
    component: CrearPlanesComponent
  },
{
    path:"buscar-planes",
    component: BuscarPlanesComponent
  },
  {
    path:"editar-planes",
    component: EditarPlanesComponent
  },
  {
    path:"eliminar-planes",
    component: EliminarPlanesComponent
  }


  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
