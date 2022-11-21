import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: string = '';
  fgvalidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'imagen': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
  })



  constructor(private fb: FormBuilder,
    private servicioDepartamento: DepartamentoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  Bbuscardepartamento() {
    this.servicioDepartamento.ObtenerregistrosporId(this.id).subscribe((datos: ModeloDepartamento) => {
      this.fgvalidador.controls["id"].setValue(this.id);
      this.fgvalidador.controls["nombre"].setValue(datos.nombre);
      this.fgvalidador.controls["imagen"].setValue(datos.imagen);
      t
    });
  }
  editardepartamento() {
    let nombre = this.fgvalidador.controls["nombre"].value;
    let imagen = this.fgvalidador.controls["imagen"].value;
    let p = new ModeloDepartamento();
    p.nombre = nombre;
    p.imagen = imagen;
    p.id = this.id;
    this.servicioDepartamento.Actualizardepartamento(p).subscribe((datos: ModeloDepartamento) => {
      alert("departamento actualizado Correctamente");
      this.router.navigate(["/administracion/editar-departamento"])
    }, (error: any) => {
      alert("Error al actualizar el plan");
    })
  }

}
