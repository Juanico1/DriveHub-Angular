import {
  Component,
  inject,
  type OnInit,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import type { Vehiculo } from '../models/vehiculo';

import {
  MovimientoService,
  type Movimiento,
} from '../services/movimiento';

import { VehiculoService } from '../services/vehiculo';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {
  private movimientoService = inject(MovimientoService);

  private vehiculoService = inject(VehiculoService);

  vehiculos: Vehiculo[] =
    this.vehiculoService.getVehiculos();

  vehiculoId: number | null = null;

  vehiculoSeleccionado: Vehiculo | undefined;

  movimientos: Movimiento[] = [];

  ingresos = 0;
  gastos = 0;
  balance = 0;

  ngOnInit(): void {
    this.actualizarResumen(null);
  }

  actualizarResumen(id: number | null): void {
    this.vehiculoId = id;

    const todosLosMovimientos =
      this.movimientoService.getMovimientos();

    this.vehiculoSeleccionado = undefined;

    if (id === null) {
      this.movimientos = todosLosMovimientos;
    } else {
      this.vehiculoSeleccionado =
        this.vehiculoService.getVehiculoById(id);

      this.movimientos = todosLosMovimientos.filter(
        (movimiento) => movimiento.vehiculoId === id
      );
    }

    this.ingresos = 0;
    this.gastos = 0;

    for (const movimiento of this.movimientos) {
      if (movimiento.tipo === 'ingreso') {
        this.ingresos += movimiento.valor;
      } else {
        this.gastos += movimiento.valor;
      }
    }

    this.balance = this.ingresos - this.gastos;
  }

  moneda(valor: number): string {
    return '$ ' + valor.toLocaleString('es-CO');
  }
}