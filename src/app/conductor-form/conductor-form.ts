import { Component, inject } from '@angular/core';

import {
  FormsModule,
  type NgForm,
} from '@angular/forms';

import {
  Router,
  RouterLink,
} from '@angular/router';

import type { Conductor } from '../models/conductor';
import { ConductorService } from '../services/conductor';

@Component({
  selector: 'app-conductor-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './conductor-form.html',
  styleUrl: './conductor-form.css',
})
export class ConductorForm {
  private conductorService = inject(ConductorService);

  private router = inject(Router);

  conductor: Conductor = {
    id: 0,
    nombre: '',
    documento: '',
    telefono: '',
    email: '',
    activo: true,
  };

  mensajeError = '';

  guardar(formulario: NgForm): void {
    this.mensajeError = '';

    if (formulario.invalid) {
      this.mensajeError =
        'Revisa los campos obligatorios y sus formatos.';

      return;
    }

    if (this.conductor.nombre.trim().length < 3) {
      this.mensajeError =
        'El nombre debe tener al menos 3 caracteres sin contar los espacios de los extremos.';

      return;
    }

    const conductorCreado =
      this.conductorService.crearConductor(this.conductor);

    if (!conductorCreado) {
      this.mensajeError =
        'Ya existe un conductor con ese documento.';

      return;
    }

    this.router.navigate([
      '/conductores',
      conductorCreado.id,
    ]);
  }
}