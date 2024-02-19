import { Component, Input } from '@angular/core';
import { PlayerData } from '../player-data';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-counters-main',
  standalone: true,
  imports: [],
  templateUrl: './counters-main.component.html',
  styleUrl: './counters-main.component.css'
})
export class CountersMainComponent {
    constructor(public appStateService: AppStateService) {}

    @Input() player: PlayerData = new PlayerData(25, 0, 'green');
}
