import { Component } from '@angular/core';
import { PlusMinusAtkBtnGroupComponent } from '../plus-minus-atk-btn-group/plus-minus-atk-btn-group.component';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-damage-counter',
  standalone: true,
  imports: [ PlusMinusAtkBtnGroupComponent ],
  templateUrl: './damage-counter.component.html',
  styleUrl: './damage-counter.component.css'
})
export class DamageCounterComponent {
  constructor(public appStateService: AppStateService) {}
}
