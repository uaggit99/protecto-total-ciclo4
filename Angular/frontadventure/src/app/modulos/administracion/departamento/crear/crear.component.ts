import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  fgvalidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'imagen': ['', [Validators.required]]
  })  

  constructor(private fb: FormBuilder,
    private servicioDepartamento: DepartamentoService,
    private router: Router) { }

  ngOnInit(): void {
  }
  guardardepartaemnto() {
    let nombre = this.fgvalidador.controls["nombre"].value;
    let color = this.fgvalidador.controls["imagen"].value;
    
    let p = new ModeloDepartamento();
    p.nombre = nombre;
    p.imagen = color;
   
    this.servicioDepartamento.creardepartamento(p).subscribe((datos: ModeloDepartamento) => {
      alert("Plan Registrado Correctamente");
      this.router.navigate(["/administracion/buscar-departamento"])
    }, (error: any) => {
      alert("Error en el registro del departamento");
    })
  }


}
