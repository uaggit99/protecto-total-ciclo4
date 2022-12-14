import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloParque } from 'src/app/modelos/parque.modelo';
import { ParqueService } from 'src/app/servicios/parque.service';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-editar-parque',
  templateUrl: './editar-parque.component.html',
  styleUrls: ['./editar-parque.component.css']
})
export class EditarParqueComponent implements OnInit {

  id: string = '';

  fgvalidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.buscarparque();
  }

  buscarparque() {
    this.servicioParque.ObtenerregistrosporId(this.id).subscribe((datos: ModeloParque) => {
      this.fgvalidador.controls["id"].setValue(this.id);
      this.fgvalidador.controls["nombre"].setValue(datos.nombre);
      this.fgvalidador.controls["direccion"].setValue(datos.direccion);
      this.fgvalidador.controls["correo"].setValue(datos.correo);
      this.fgvalidador.controls["telefono"].setValue(datos.telefono);
      this.fgvalidador.controls["visitantespermitidos"].setValue(datos.visitantespermitidos);
      this.fgvalidador.controls["imagenlogo"].setValue(datos.imagenlogo);
      this.fgvalidador.controls["imagenmapa"].setValue(datos.imagenmapa);
      this.fgvalidador.controls["eslogan"].setValue(datos.eslogan);
      this.fgvalidador.controls["descripcion"].setValue(datos.descripcion);
    });

  }
  editarparque() {
    let nombre = this.fgvalidador.controls["nombre"].value;
    let direccion = this.fgvalidador.controls["direccion"].value;
    let correo = this.fgvalidador.controls["correo"].value;
    let telefono = this.fgvalidador.controls["telefono"].value;
    let visitantespermitidos = this.fgvalidador.controls["visitantespermitidos"].value;
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
    p.id = this.id;
    this.servicioParque.Actualizarparque(p).subscribe((datos: ModeloParque) => {
      alert("Parque actualizado Correctamente");
      this.router.navigate(["/administracion/buscar-parque"])
    }, (error: any) => {
      alert("Error al actualizar el Parque");
    })
  }


}
