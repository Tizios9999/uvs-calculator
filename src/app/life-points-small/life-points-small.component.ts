import { Component, Input } from '@angular/core';
import { PlayerData } from '../player-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-life-points-small',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './life-points-small.component.html',
  styleUrl: './life-points-small.component.css'
})
export class LifePointsSmallComponent {
  constructor(public appStateService: AppStateService) {}

  @Input() player: PlayerData = new PlayerData(25, 0, 'green');
}
