import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AttackPhaseComponent } from './attack-phase/attack-phase.component';
import { OptionsComponent } from './options/options.component';
// State
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainComponent, AttackPhaseComponent, OptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(public appStateService: AppStateService) {
  }
  title = 'Uvs Calculator';

  ngOnInit(): void {
    if ('wakeLock' in navigator && 'request' in (navigator as any).wakeLock) {
        (navigator as any).wakeLock.request('screen');
    }
  }

  setPage(pageName: string) {
    this.appStateService.setCurrentPage(pageName)
  }
}
