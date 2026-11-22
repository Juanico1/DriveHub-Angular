import { Routes } from '@angular/router';

import { Inicio } from './inicio/inicio';
import { Conductores } from './conductores/conductores';
import { Gastos } from './gastos/gastos';
import { Gasolina } from './gasolina/gasolina';
import { Mantenimiento } from './mantenimiento/mantenimiento';

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
    path: '**',
    redirectTo: 'inicio',
  },
];