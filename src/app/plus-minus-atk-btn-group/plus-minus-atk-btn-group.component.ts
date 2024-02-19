import { Component, Input } from '@angular/core';
import { AppStateService } from '../app-state.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plus-minus-atk-btn-group',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './plus-minus-atk-btn-group.component.html',
  styleUrl: './plus-minus-atk-btn-group.component.css'
})
export class PlusMinusAtkBtnGroupComponent {
  constructor(public appStateService: AppStateService) {}

  @Input() property: string = "damage";

  updateValue(amount: number) {

    if (this.property === 'speed') {
      this.appStateService.currentAttack.speed += amount;
    }

    if (this.property === 'damage') {
      this.appStateService.currentAttack.damage += amount;
    }
  }

}
