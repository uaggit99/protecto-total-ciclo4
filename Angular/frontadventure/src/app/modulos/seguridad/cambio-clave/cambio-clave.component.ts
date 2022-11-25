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
  p:ModeloUsuario[]=[];
  


  fgValidador: FormGroup = this.fb.group({
    'id': ['',Validators.required],
    'fecha':['',Validators.required],
    'nombres':['',Validators.required],
    'apellidos':['',Validators.required],
    'documento':['',Validators.required],
    'correo':['',Validators.required],
    'cargo':['',Validators.required],
    'celular':['',Validators.required],
    'foto':['',Validators.required],
    'clave':['',Validators.required]   

  })
  claveCifrada: string | undefined;

  constructor(private fb: FormBuilder, 
    private servicioSeguridad: SeguridadService,
    private servicioUsuario : UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  cambioClave(){
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = CryptoJS.MD5(clave).toString();
    let data = this.servicioSeguridad.ObtenerInformacionSesion();
    if (data) {
      this.id2= data.id;
      this.ObtenerDatos();   

  }
}
  ObtenerDatos(){
    this.servicioUsuario.ObtenerRegistrosporId(this.id2).subscribe((data :ModeloUsuario)=>{
      let p = new ModeloUsuario();
      p.fecha =data.fecha
      p.nombres= data.nombres;
      p.apellidos =data.apellidos;
      p.documento =data.documento;
      p.correo =data.correo;
      p.cargo =data.cargo;
      p.celular = data.celular;
      p.foto = data.foto;
      p.clave =this.claveCifrada;
      p.id = data.id;
    });
      /*this.servicioUsuario.Actualizarusuario(this.p).subscribe((data: ModeloUsuario) => {
        alert("clave actualizado Correctamente");
        this.router.navigate(["/inicio"])
      }, (error: any) => {
        alert("Error al actualizar clave");
      })
        */
  
        }

     
  }


  





