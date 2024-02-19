import { Component } from '@angular/core';
// State service
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  constructor(public appStateService: AppStateService) {}
}
