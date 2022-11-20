import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {

  fgvalidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'color': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
    'atraccionesvalidas': ['', [Validators.required]]

  });


  constructor(private fb: FormBuilder,
    private servicioPlanes: PlanesService,
    private router: Router) { }

  ngOnInit(): void {
   
  }
  guardarplan() {
    let nombre = this.fgvalidador.controls["nombre"].value;
    let color = this.fgvalidador.controls["color"].value;
    let valor = this.fgvalidador.controls["valor"].value;
    let atraccionesvalidas = this.fgvalidador.controls["atraccionesvalidas"].value;
    let p = new ModeloPlanes();
    p.nombre = nombre;
    p.color = color;
    p.valor = valor;
    p.atraccionesvalidas = atraccionesvalidas;
    this.servicioPlanes.CrearPlan(p).subscribe((datos: ModeloPlanes) => {
      alert("Plan Registrado Correctamente");
      this.router.navigate(["/administracion/planes"])
    }, (error: any) => {
      alert("Error en el registro del plan");
    })
  }





}


