import { Component } from '@angular/core';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-attack-zone',
  standalone: true,
  imports: [],
  templateUrl: './attack-zone.component.html',
  styleUrl: './attack-zone.component.css'
})
export class AttackZoneComponent {
  constructor(public appStateService: AppStateService) {}

}
