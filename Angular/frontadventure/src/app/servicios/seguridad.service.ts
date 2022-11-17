import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
   url='http://localhost:3000';


  constructor(private http : HttpClient) { 

   
  }
  Identificar( usuario: String, clave: String): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarusuario`,{
      usuario: usuario,
      clave:clave
    },{
      headers : new HttpHeaders({

      })
    })


  }
}
