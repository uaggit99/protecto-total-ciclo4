import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPlanes } from '../modelos/planes.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  url = 'http://localhost:3000';
  token: string = '';

  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.Ob
  }

  Obtenerregistros(): Observable<ModeloPlanes[]> {
    return this.http.get<ModeloPlanes[]>(`${this.url}/plans`)

  }
  CrearPlan(plan: ModeloPlanes): Observable<ModeloPlanes> {
    return this.http.post<ModeloPlanes>(`${this.url}/plans`, plan, {
      headers: new HttpHeaders({
        'Autorizacion': `Bearer ${this.token}`

      })
    })
  }
}
