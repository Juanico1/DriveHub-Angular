import { Component, inject } from '@angular/core';

import {
  FormsModule,
  type NgForm,
} from '@angular/forms';

import {
  Router,
  RouterLink,
} from '@angular/router';

import type { Vehiculo } from '../models/vehiculo';
import type { Conductor } from '../models/conductor';

import { VehiculoService } from '../services/vehiculo';
import { ConductorService } from '../services/conductor';

@Component({
  selector: 'app-vehiculo-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './vehiculo-form.html',
  styleUrl: './vehiculo-form.css',
})
export class VehiculoForm {
  private vehiculoService = inject(VehiculoService);

  private conductorService = inject(ConductorService);

  private router = inject(Router);

  anioActual = new Date().getFullYear();

  anioMaximo = this.anioActual + 1;

  vehiculo: Vehiculo = {
    id: 0,
    placa: '',
    marca: '',
    modelo: '',
    anio: this.anioActual,
    kilometraje: 0,
    estado: 'Disponible',
    conductorId: null,
  };

  conductores: Conductor[] =
    this.conductorService.getConductores().filter(
      (conductor) => conductor.activo
    );

  mensajeError = '';

  guardar(formulario: NgForm): void {
    this.mensajeError = '';

    if (formulario.invalid) {
      this.mensajeError =
        'Revisa los campos obligatorios y sus formatos.';

      return;
    }

    if (
      this.vehiculo.marca.trim().length < 2 ||
      this.vehiculo.modelo.trim().length < 2
    ) {
      this.mensajeError =
        'La marca y el modelo deben tener al menos 2 caracteres sin contar los espacios de los extremos.';

      return;
    }

    if (
      !Number.isInteger(this.vehiculo.anio) ||
      this.vehiculo.anio < 1980 ||
      this.vehiculo.anio > this.anioMaximo
    ) {
      this.mensajeError =
        'Ingresa un año entero dentro del rango permitido.';

      return;
    }

    if (
      !Number.isInteger(this.vehiculo.kilometraje) ||
      this.vehiculo.kilometraje < 0
    ) {
      this.mensajeError =
        'El kilometraje debe ser un número entero igual o mayor que cero.';

      return;
    }

    if (this.vehiculo.conductorId !== null) {
      const conductor =
        this.conductorService.getConductorById(
          this.vehiculo.conductorId
        );

      if (!conductor || !conductor.activo) {
        this.mensajeError =
          'Selecciona un conductor activo o deja el vehículo sin asignar.';

        return;
      }
    }

    const vehiculoCreado =
      this.vehiculoService.crearVehiculo(this.vehiculo);

    if (!vehiculoCreado) {
      this.mensajeError =
        'Ya existe un vehículo con esa placa.';

      return;
    }

    this.router.navigate([
      '/vehiculos',
      vehiculoCreado.id,
    ]);
  }
}