import { Routes } from '@angular/router';

import { Inicio } from './inicio/inicio';
import { Gastos } from './gastos/gastos';
import { Gasolina } from './gasolina/gasolina';
import { Mantenimiento } from './mantenimiento/mantenimiento';

import { Conductores } from './conductores/conductores';
import { ConductorDetalle } from './conductor-detalle/conductor-detalle';
import { ConductorForm } from './conductor-form/conductor-form';

import { Vehiculos } from './vehiculos/vehiculos';
import { VehiculoDetalle } from './vehiculo-detalle/vehiculo-detalle';
import { VehiculoForm } from './vehiculo-form/vehiculo-form';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: Inicio,
  },
  {
    path: 'gastos',
    component: Gastos,
  },
  {
    path: 'gasolina',
    component: Gasolina,
  },
  {
    path: 'mantenimiento',
    component: Mantenimiento,
  },
  {
    path: 'conductores',
    component: Conductores,
  },
  {
    path: 'conductores/nuevo',
    component: ConductorForm,
  },
  {
    path: 'conductores/:id',
    component: ConductorDetalle,
  },
  {
    path: 'vehiculos',
    component: Vehiculos,
  },
  {
    path: 'vehiculos/nuevo',
    component: VehiculoForm,
  },
  {
    path: 'vehiculos/:id',
    component: VehiculoDetalle,
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
