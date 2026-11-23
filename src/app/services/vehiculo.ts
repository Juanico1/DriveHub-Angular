import { Injectable } from '@angular/core';

import type { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private vehiculos: Vehiculo[] = [
    {
      id: 1,
      placa: 'ABC123',
      marca: 'Renault',
      modelo: 'Logan',
      anio: 2021,
      kilometraje: 19547,
      estado: 'Disponible',
      conductorId: 1,
    },
    {
      id: 2,
      placa: 'DEF456',
      marca: 'Chevrolet',
      modelo: 'Onix',
      anio: 2022,
      kilometraje: 32100,
      estado: 'En servicio',
      conductorId: 2,
    },
    {
      id: 3,
      placa: 'GHI789',
      marca: 'Kia',
      modelo: 'Picanto',
      anio: 2020,
      kilometraje: 45600,
      estado: 'Mantenimiento',
      conductorId: null,
    },
  ];

  getVehiculos(): Vehiculo[] {
    return this.vehiculos;
  }

  getVehiculoById(id: number): Vehiculo | undefined {
    return this.vehiculos.find(
      (vehiculo) => vehiculo.id === id
    );
  }
}