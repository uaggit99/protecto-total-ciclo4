import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'fecha':['',Validators.required],
    'nombres':['',Validators.required],
    'apellidos':['',Validators.required],
    'docuemnto':['',Validators.required],
    'correo':['',Validators.required],
    'cargo':['',Validators.required],
    'celular':['',Validators.required],
    'clave':['',Validators.required]   

  })

  constructor(private fb: FormBuilder, 
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
  }

}
