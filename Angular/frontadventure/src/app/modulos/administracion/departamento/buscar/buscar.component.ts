import { Component, OnInit } from '@angular/core';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})

export class BuscarComponent implements OnInit {
  
  listadodepartamento: ModeloDepartamento[] = [];

  constructor(private departamentoServicio: DepartamentoService) { }

  ngOnInit(): void {
    this.ObtenerListadoDepartamentos();
  }

  ObtenerListadoDepartamentos() {
    this.departamentoServicio.Obtenerregistros().subscribe((datos: ModeloDepartamento[]) => {
      this.listadodepartamento = datos;
    })
  }

}


