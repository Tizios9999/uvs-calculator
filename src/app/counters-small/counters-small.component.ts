import { Component, Input } from '@angular/core';
import { PlayerData } from '../player-data';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-counters-small',
  standalone: true,
  imports: [],
  templateUrl: './counters-small.component.html',
  styleUrl: './counters-small.component.css'
})
export class CountersSmallComponent {
  constructor(public appStateService: AppStateService) {}

    @Input() player: PlayerData = new PlayerData(25, 0, 'green');
}
