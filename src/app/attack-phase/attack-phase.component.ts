import { Component } from '@angular/core';
import { AttackZoneComponent } from '../attack-zone/attack-zone.component';
import { DamageCounterComponent } from '../damage-counter/damage-counter.component';
import { LifePointsSmallComponent } from '../life-points-small/life-points-small.component';
import { CountersSmallComponent } from '../counters-small/counters-small.component';
import { BlockBtnComponent } from '../block-btn/block-btn.component';

// State
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-attack-phase',
  standalone: true,
  imports: [ AttackZoneComponent, DamageCounterComponent, LifePointsSmallComponent, CountersSmallComponent, BlockBtnComponent ],
  templateUrl: './attack-phase.component.html',
  styleUrl: './attack-phase.component.css'
})
export class AttackPhaseComponent {
  constructor(public appStateService: AppStateService) {}

}
