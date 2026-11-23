import { Injectable } from '@angular/core';

export interface Movimiento {
  id: number;
  vehiculoId: number;
  titulo: string;
  detalle: string;
  fecha: string;
  valor: number;
  tipo: 'gasto' | 'ingreso';
  icono: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovimientoService {
  private movimientos: Movimiento[] = [
    {
      id: 1,
      vehiculoId: 1,
      titulo: 'Gasolina',
      detalle: 'Bomba Texaco Av. Boyacá',
      fecha: '26 de septiembre',
      valor: 120000,
      tipo: 'gasto',
      icono: '⛽',
    },
    {
      id: 2,
      vehiculoId: 1,
      titulo: 'Ganancias',
      detalle: 'Ingreso de plataforma',
      fecha: '19 de septiembre',
      valor: 180000,
      tipo: 'ingreso',
      icono: '💰',
    },
  ];

  getMovimientos(): Movimiento[] {
    return this.movimientos;
  }
}