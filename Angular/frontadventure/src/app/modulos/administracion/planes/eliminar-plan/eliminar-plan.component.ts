import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-eliminar-plan',
  templateUrl: './eliminar-plan.component.html',
  styleUrls: ['./eliminar-plan.component.css']
})
export class EliminarPlanComponent implements OnInit {
  id: string = '';
  fgvalidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'color': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
    'atraccionesvalidas': ['', [Validators.required]]

  });


  constructor(private fb: FormBuilder, 
    private servicioPlanes: PlanesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.Buscarplan();
  }
  Buscarplan() {
    this.servicioPlanes.ObtenerregistrosporId(this.id).subscribe((datos: ModeloPlanes) => {
      this.fgvalidador.controls["id"].setValue(this.id);
      this.fgvalidador.controls["nombre"].setValue(datos.nombre);
      this.fgvalidador.controls["color"].setValue(datos.color);
      this.fgvalidador.controls["valor"].setValue(datos.valor);
      this.fgvalidador.controls["atraccionesvalidas"].setValue(datos.atraccionesvalidas);
    });
  }

  eliminarplan() {
    let nombre = this.fgvalidador.controls["nombre"].value;
    let color = this.fgvalidador.controls["color"].value;
    let valor = this.fgvalidador.controls["valor"].value;
    let atraccionesvalidas = this.fgvalidador.controls["atraccionesvalidas"].value;
    let p = new ModeloPlanes();
    p.nombre = nombre;
    p.color = color;
    p.valor = valor;
    p.atraccionesvalidas = atraccionesvalidas;
    p.id = this.id;
    this.servicioPlanes.EliminarPlan(p.id).subscribe((datos: ModeloPlanes) => {
      alert("Plan eliminado Correctamente");
      this.router.navigate(["/administracion/planes"])
    }, (error: any) => {
      alert("Error al eliminar el plan");
    })
  }


}



