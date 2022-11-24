import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {
  listadopersona:ModeloUsuario[]=[];

  constructor(private personaServicio : UsuarioService ) { }

  ngOnInit(): void {
    this.ObtenerListadoUsuario();
  }

  ObtenerListadoUsuario() {
    this.personaServicio.Obtenerregistros().subscribe((datos: ModeloUsuario[]) => {
      this.listadopersona = datos;
    })
  }

}
