import { Component, Input } from '@angular/core';
import { AppStateService } from '../app-state.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlusMinusAtkBtnGroupComponent } from '../plus-minus-atk-btn-group/plus-minus-atk-btn-group.component';

@Component({
  selector: 'app-attack-zone',
  standalone: true,
  imports: [ FormsModule, CommonModule, PlusMinusAtkBtnGroupComponent ],
  templateUrl: './attack-zone.component.html',
  styleUrl: './attack-zone.component.css'
})
export class AttackZoneComponent {
  constructor(public appStateService: AppStateService) {}

}
