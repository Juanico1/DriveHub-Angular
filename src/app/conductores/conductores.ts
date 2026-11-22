import { Component, inject } from '@angular/core';

import type { Conductor } from '../models/conductor';
import { ConductorService } from '../services/conductor';

@Component({
  selector: 'app-conductores',
  imports: [],
  templateUrl: './conductores.html',
  styleUrl: './conductores.css',
})
export class Conductores {
  private conductorService = inject(ConductorService);

  conductores: Conductor[] =
    this.conductorService.getConductores();
}