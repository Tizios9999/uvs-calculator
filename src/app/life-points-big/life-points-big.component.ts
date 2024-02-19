import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { PlayerData } from '../player-data';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-life-points-big',
  standalone: true,
  imports: [ MatButtonModule ],
  templateUrl: './life-points-big.component.html',
  styleUrl: './life-points-big.component.css'
})
export class LifePointsBigComponent {
  constructor(public appStateService: AppStateService) {}

  @Input() player: PlayerData = new PlayerData(25, 0, 'green');

}
