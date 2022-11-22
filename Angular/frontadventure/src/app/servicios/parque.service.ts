import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloParque } from '../modelos/parque.modelo';
import { SeguridadService } from './seguridad.service';


@Injectable({
  providedIn: 'root'
})
export class ParqueService {
  url = 'http://localhost:3000';
  token: string = '';

  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) {
      this.token = this.servicioSeguridad.ObtenerToken(); 

    }

  ObtenerRegistros(): Observable<ModeloParque[]> {
    return this.http.get<ModeloParque[]>(`${this.url}/parques`)

  }
  CrearParque(parque: ModeloParque): Observable<ModeloParque> {
    return this.http.post<ModeloParque>(`${this.url}/parques`, parque, {
      headers: new HttpHeaders({
        'Autorizacion': `Bearer ${this.token}`

      })
    })
  }
}
