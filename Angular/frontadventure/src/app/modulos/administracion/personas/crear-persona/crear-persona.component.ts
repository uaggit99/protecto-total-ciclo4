import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  fgvalidador: FormGroup = this.fb.group({
    'fecha': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'documento': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'cargo': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'foto': ['', [Validators.required]]


  });

  constructor(private fb: FormBuilder,
    private personaServicio: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }
  guardarpersona() {
    let fecha = this.fgvalidador.controls["fecha"].value;
    let nombres = this.fgvalidador.controls["nombres"].value;
    let apellidos = this.fgvalidador.controls["apellidos"].value;
    let documento = this.fgvalidador.controls["documento"].value;
    let correo = this.fgvalidador.controls["correo"].value;
    let cargo = this.fgvalidador.controls["cargo"].value;
    let celular = this.fgvalidador.controls["celular"].value;
    let foto = this.fgvalidador.controls["foto"].value;
    let p = new ModeloUsuario();
    p.fecha = fecha;
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.documento = documento;
    p.correo = correo;
    p.cargo =cargo;
    p.celular = celular;
    p.foto =foto;
    
    this.personaServicio.Crearusuario(p).subscribe((datos: ModeloUsuario) => {
      alert("Persona Registrada Correctamente");
      this.router.navigate(["/administracion/personas"])
    }, (error: any) => {
      alert("Error en el registro de persona");
    })
  }

}
