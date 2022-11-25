import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {
  clave2 : string ='';
  id2 : string = '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['',Validators.required],
    'fecha':['',Validators.required],
    'nombres':['',Validators.required],
    'apellidos':['',Validators.required],
    'documento':['',Validators.required],
    'correo':['',Validators.required],
    'cargo':['',Validators.required],
    'celular':['',Validators.required],
    'clave':['',Validators.required]   

  })

  constructor(private fb: FormBuilder, 
    private servicioSeguridad: SeguridadService,
    private servicioUsuario : UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  cambioClave(){
    let clave2 = this.fgValidador.controls["clave2"].value;
    let claveCifrada = CryptoJS.MD5(clave2).toString();
    let data = this.servicioSeguridad.ObtenerInformacionSesion();
    if (data) {
      this.id2= data.id;
      this.buscarusuario();
      }
    

  }
buscarusuario(){
    this.servicioUsuario.ObtenerRegistrosporId(this.id2).subscribe((datos: ModeloUsuario) => {
    this.fgValidador.controls["id"].setValue(this.id2);
    this.fgValidador.controls["fecha"].setValue(datos.fecha);
    this.fgValidador.controls["nombres"].setValue(datos.nombres);
    this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
    this.fgValidador.controls["documento"].setValue(datos.documento);
    this.fgValidador.controls["correo"].setValue(datos.correo);
    this.fgValidador.controls["cargo"].setValue(datos.cargo);
    this.fgValidador.controls["celular"].setValue(datos.celular);
    this.fgValidador.controls["foto"].setValue(datos.foto);
  });
}
  


}


