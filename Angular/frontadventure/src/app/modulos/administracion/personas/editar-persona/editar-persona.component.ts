import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  id: string = '';
  fgvalidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'fecha': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'documento': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'cargo': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'clave': ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private personaServicio: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.Buscarusuario();
  }

  Buscarusuario() {
    this.personaServicio.ObtenerRegistrosporId(this.id).subscribe((datos: ModeloUsuario) => {
      this.fgvalidador.controls["id"].setValue(this.id);
      this.fgvalidador.controls["fecha"].setValue(datos.fecha);
      this.fgvalidador.controls["nombres"].setValue(datos.nombres);
      this.fgvalidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgvalidador.controls["documento"].setValue(datos.documento);
      this.fgvalidador.controls["correo"].setValue(datos.correo);
      this.fgvalidador.controls["cargo"].setValue(datos.cargo);
      this.fgvalidador.controls["celular"].setValue(datos.celular);
      this.fgvalidador.controls["foto"].setValue(datos.foto);
      this.fgvalidador.controls["clave"].setValue(datos.clave);
      
    });
  }
  editarusuario() {
    let fecha = this.fgvalidador.controls["fecha"].value;
    let nombres = this.fgvalidador.controls["nombres"].value;
    let apellidos = this.fgvalidador.controls["apellidos"].value;
    let documento = this.fgvalidador.controls["documento"].value;
    let correo = this.fgvalidador.controls["correo"].value;
    let cargo = this.fgvalidador.controls["cargo"].value;
    let celular = this.fgvalidador.controls["celular"].value;
    let foto = this.fgvalidador.controls["foto"].value;
    let clave2 = this.fgvalidador.controls["clave"].value;
    
    
    let p = new ModeloUsuario();
    p.fecha =fecha;
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.documento = documento;
    p.correo = correo;
    p.cargo = cargo;
    p.celular = celular;
    p.foto = foto;
    p.clave= clave2;
    p.id = this.id;
    this.personaServicio.Actualizarusuario(p).subscribe((datos: ModeloUsuario) => {
      alert("Usuario actualizado Correctamente");
      this.router.navigate(["/administracion/personas"])
    }, (error: any) => {
      alert("Error al actualizar el usuario");
    })
  }


}
