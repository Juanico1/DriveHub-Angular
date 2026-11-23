import {
  Component,
  inject,
  type OnInit,
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink,
} from '@angular/router';

import type { Vehiculo } from '../models/vehiculo';
import type { Conductor } from '../models/conductor';

import { VehiculoService } from '../services/vehiculo';
import { ConductorService } from '../services/conductor';

@Component({
  selector: 'app-vehiculo-detalle',
  imports: [RouterLink],
  templateUrl: './vehiculo-detalle.html',
  styleUrl: './vehiculo-detalle.css',
})
export class VehiculoDetalle implements OnInit {
  private route = inject(ActivatedRoute);

  private vehiculoService = inject(VehiculoService);

  private conductorService = inject(ConductorService);

  vehiculo: Vehiculo | undefined;

  conductor: Conductor | undefined;

  ngOnInit(): void {
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.vehiculo =
      this.vehiculoService.getVehiculoById(id);

    if (
      this.vehiculo &&
      this.vehiculo.conductorId !== null
    ) {
      this.conductor =
        this.conductorService.getConductorById(
          this.vehiculo.conductorId
        );
    }
  }
}