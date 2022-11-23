import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloParque } from 'src/app/modelos/parque.modelo';
import { ParqueService } from 'src/app/servicios/parque.service';

@Component({
  selector: 'app-crear-parque',
  templateUrl: './crear-parque.component.html',
  styleUrls: ['./crear-parque.component.css']
})
export class CrearParqueComponent implements OnInit {

  fgvalidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'visitantespermitidos': ['', [Validators.required]],
    'imagenlogo': ['', [Validators.required]],
    'imagenmapa': ['', [Validators.required]],
    'eslogan': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioParque: ParqueService,
    private router: Router) { }

  ngOnInit(): void {
  }
  guardarparque() {
    let nombre = this.fgvalidador.controls["nombre"].value;
    let direccion = this.fgvalidador.controls["direccion"].value;
    let correo = this.fgvalidador.controls["correo"].value;
    let telefono = this.fgvalidador.controls["telefono"].value;
    let visitantespermitidos =String(this.fgvalidador.controls["visitantespermitidos"].value);
    let imagenlogo = this.fgvalidador.controls["imagenlogo"].value;
    let imagenmapa = this.fgvalidador.controls["imagenmapa"].value;
    let eslogan = this.fgvalidador.controls["eslogan"].value;
    let descripcion = this.fgvalidador.controls["descripcion"].value;
    let p = new ModeloParque();
    p.nombre = nombre;
    p.direccion = direccion;
    p.correo = correo;
    p.telefono = telefono;
    p.visitantespermitidos = visitantespermitidos;
    p.imagenlogo = imagenlogo;
    p.imagenmapa = imagenmapa;
    p.eslogan = eslogan;
    p.descripcion = descripcion;
   
    this.servicioParque.CrearParque(p).subscribe((datos: ModeloParque) => {
      alert("parque Registrado Correctamente");
      this.router.navigate(["/administracion/buscar-parque"])
    }, (error: any) => {
      alert("Error en el registro del parque");
    })
  }

}
