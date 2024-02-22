import { Component } from '@angular/core';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-reset-game',
  standalone: true,
  imports: [],
  templateUrl: './reset-game.component.html',
  styleUrl: './reset-game.component.css'
})
export class ResetGameComponent {
  constructor(public appStateService: AppStateService) {}
}
