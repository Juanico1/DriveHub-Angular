export interface Vehiculo {
  id: number;
  placa: string;
  marca: string;
  modelo: string;
  anio: number;
  kilometraje: number;
  estado: 'Disponible' | 'En servicio' | 'Mantenimiento';
  conductorId: number | null;
}