import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    "usuario": ['', [Validators.required, Validators.email]],
    "clave": ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) {

  }

  ngOnInit(): void {

  }
  IdentificarUsuario() {
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any)=> {
      this.servicioSeguridad.AlmacenarSesion(datos);
      alert("datos correctos")
    },(error:any)=>{
      //ok
      alert("datos NO validos")

    })
  }

}
