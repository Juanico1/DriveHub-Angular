import {
  Component,
  inject,
  type OnInit,
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink,
} from '@angular/router';

import type { Conductor } from '../models/conductor';
import { ConductorService } from '../services/conductor';

@Component({
  selector: 'app-conductor-detalle',
  imports: [RouterLink],
  templateUrl: './conductor-detalle.html',
  styleUrl: './conductor-detalle.css',
})
export class ConductorDetalle implements OnInit {
  private route = inject(ActivatedRoute);

  private conductorService = inject(ConductorService);

  conductor: Conductor | undefined;

  ngOnInit(): void {
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.conductor =
      this.conductorService.getConductorById(id);
  }
}