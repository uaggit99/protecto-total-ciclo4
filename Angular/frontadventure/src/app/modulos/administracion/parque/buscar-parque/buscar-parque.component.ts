import { Component, OnInit } from '@angular/core';
import { ModeloParque } from 'src/app/modelos/parque.modelo';
import { ParqueService } from 'src/app/servicios/parque.service';

@Component({
  selector: 'app-buscar-parque',
  templateUrl: './buscar-parque.component.html',
  styleUrls: ['./buscar-parque.component.css']
})
export class BuscarParqueComponent implements OnInit {
  listadoparque: ModeloParque[]=[];

  constructor(private parqueServicio: ParqueService) { }

  ngOnInit(): void {
    this.ObtenerListadoParques();
  }

  ObtenerListadoParques() {
    this.parqueServicio.ObtenerRegistros().subscribe((datos: ModeloParque[]) => {
      this.listadoparque = datos;
    })
  }

}
