import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloDepartamento } from '../modelos/departamento.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  url = 'http://localhost:3000';
  token: string = '';
  

  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) { 
      this.token = this.servicioSeguridad.ObtenerToken();
    }

  Obtenerregistros(): Observable<ModeloDepartamento[]> {
    return this.http.get<ModeloDepartamento[]>(`${this.url}/departamentos`)


  }
  creardepartamento(departamento: ModeloDepartamento): Observable<ModeloDepartamento> {
    return this.http.post<ModeloDepartamento>(`${this.url}/departamentos`, departamento, {
      headers: new HttpHeaders({
        'Autorizacion': `Bearer ${this.token}`

      })
    })
  }
}
