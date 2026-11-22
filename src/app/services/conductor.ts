import { Injectable } from '@angular/core';

import type { Conductor } from '../models/conductor';

@Injectable({
  providedIn: 'root',
})

export class ConductorService {
  private conductores: Conductor[] = [
    {
      id: 1,
      nombre: 'Laura Gómez',
      documento: '1000000001',
      telefono: '3001234567',
      email: 'laura@example.com',
      activo: true,
    },
    {
      id: 2,
      nombre: 'Andrés Torres',
      documento: '1000000002',
      telefono: '3012345678',
      email: 'andres@example.com',
      activo: true,
    },
    {
      id: 3,
      nombre: 'Camila Rojas',
      documento: '1000000003',
      telefono: '3023456789',
      email: 'camila@example.com',
      activo: false,
    },
  ];

  getConductores(): Conductor[] {
    return this.conductores;
  }
}