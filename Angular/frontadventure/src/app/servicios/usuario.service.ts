import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloDatos } from '../modelos/datos.modelo';
import { ModeloUsuario } from '../modelos/usuario.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:3000';
  token: string = '';

  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) 
    { 
      this.token = this.servicioSeguridad.ObtenerToken();
    }
  Obtenerregistros(): Observable<ModeloUsuario[]> {
    return this.http.get<ModeloUsuario[]>(`${this.url}/usuarios`)

  }

  ObtenerregistrosporId(id: string): Observable<ModeloUsuario> {
    return this.http.get<ModeloUsuario>(`${this.url}/usuarios/${id}`)

  }
  Crearusuario(usuario: ModeloUsuario): Observable<ModeloUsuario> {
    return this.http.post<ModeloUsuario>(`${this.url}/usuarios`, usuario, {
      headers: new HttpHeaders({
        'Autorizacion': `Bearer ${this.token}`

      })
    })
  }
  Actualizarusuario(usuario: ModeloUsuario): Observable<ModeloUsuario> {
    return this.http.put<ModeloUsuario>(`${this.url}/usuarios/${usuario.id}`,usuario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
