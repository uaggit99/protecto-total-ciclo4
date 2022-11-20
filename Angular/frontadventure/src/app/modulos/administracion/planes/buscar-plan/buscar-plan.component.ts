import { Component, OnInit } from '@angular/core';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-buscar-plan',
  templateUrl: './buscar-plan.component.html',
  styleUrls: ['./buscar-plan.component.css']
})
export class BuscarPlanComponent implements OnInit {
  listadoPlanes: ModeloPlanes[] = [];

  constructor(private planesServicio: PlanesService) { }

  ngOnInit(): void {
    this.ObtenerListadoPlanes();
  }
  ObtenerListadoPlanes() {
    this.planesServicio.Obtenerregistros().subscribe((datos: ModeloPlanes[]) => {
      this.listadoPlanes = datos;
    })
  }
}
    

