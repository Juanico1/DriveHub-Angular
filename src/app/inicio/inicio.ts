import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  MovimientoService,
  type Movimiento,
} from '../services/movimiento';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  private movimientoService = inject(MovimientoService);

  movimientos: Movimiento[] =
    this.movimientoService.getMovimientos();
}