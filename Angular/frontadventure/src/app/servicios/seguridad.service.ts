import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url = 'http://localhost:3000';
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar())


  constructor(private http: HttpClient) {
    this.VerificarSesionActual();

  }

  VerificarSesionActual() {
    let datos = this.ObtenerInformacionSesion();
    if (datos) {
      this.RefrescarDatosSesion(datos);
    }



  }

  RefrescarDatosSesion(datos: ModeloIdentificar) {
    this.datosUsuarioEnSesion.next(datos);



  }

  ObtenerDatosUsuarioEnSesion() {
    return this.datosUsuarioEnSesion.asObservable();
  }

  Identificar(usuario: String, clave: String): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarusuario`, {
      usuario: usuario,
      clave: clave
    }, {
      headers: new HttpHeaders({


      })
    })


  }

  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos)
    this.RefrescarDatosSesion(datos);


  }
  ObtenerInformacionSesion() {
    let datosString = localStorage.getItem("datosSesion")
    if (datosString) {
      let datos = JSON.parse(datosString);
      return datos
    } else {
      return null
    }

  }
  EliminarInformacionSesion() {
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  seHaIniciadoSesion() {
    let datosString = localStorage.getItem("datosSesion");
    return datosString;

  }
  ObtenerToken() {
    let datosString = localStorage.getItem("datosSesion");
    if (datosString) {
      let datos = JSON.parse(datosString);
      return datos.tk;
    } else {
      return '';

    }
  }
}

