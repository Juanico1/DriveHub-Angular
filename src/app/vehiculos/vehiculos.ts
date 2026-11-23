import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Vehiculo } from '../models/vehiculo';
import { VehiculoService } from '../services/vehiculo';

@Component({
  selector: 'app-vehiculos',
  imports: [RouterLink],
  templateUrl: './vehiculos.html',
  styleUrl: './vehiculos.css',
})
export class Vehiculos {
  private vehiculoService = inject(VehiculoService);

  vehiculos: Vehiculo[] =
    this.vehiculoService.getVehiculos();
}