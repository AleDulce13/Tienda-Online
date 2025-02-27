import { Component } from '@angular/core';
import { ProductoComponent } from './listado-productos/producto/producto.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
import { ReplicadorComponent } from './replicador/replicador.component';

@Component({
  selector: 'app-root',
  imports: [ProductoComponent, MostrarMensajeComponent, ReplicadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Property Binding en Angular';
}
