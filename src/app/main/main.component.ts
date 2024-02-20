import { Component } from '@angular/core';
import { LifePointsBigComponent } from '../life-points-big/life-points-big.component';
import { CountersMainComponent } from '../counters-main/counters-main.component';
import { OptionsButtonComponent } from '../options-button/options-button.component';
import { DiceComponent } from '../dice/dice.component';
import { ResetGameComponent } from '../reset-game/reset-game.component';
// State service
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ LifePointsBigComponent, DiceComponent, ResetGameComponent, CountersMainComponent, OptionsButtonComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(public appStateService: AppStateService) {}
}
