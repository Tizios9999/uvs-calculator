import { Component, Input } from '@angular/core';
import { PlayerData } from '../player-data';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-options-button',
  standalone: true,
  imports: [],
  templateUrl: './options-button.component.html',
  styleUrl: './options-button.component.css'
})
export class OptionsButtonComponent {
  constructor(public appStateService: AppStateService) {}

  @Input() player: PlayerData = new PlayerData(25, 0, 'green');
}
