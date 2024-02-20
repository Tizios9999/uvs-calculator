import { Component, Input } from '@angular/core';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-block-btn',
  standalone: true,
  imports: [],
  templateUrl: './block-btn.component.html',
  styleUrl: './block-btn.component.css'
})
export class BlockBtnComponent {
  constructor(public appStateService: AppStateService) {}

  @Input() block: string = 'full';
  @Input() label: string = 'block';

  appliedDamage = 0;

  blockResolve() {

    if (this.appStateService.currentAttack.damage > 0) {

      switch (this.block) {
        case 'full':
          this.appliedDamage = 0;
          break;
        case 'half':
          this.appliedDamage = Math.round((this.appStateService.currentAttack.damage)/2);
          break;
        case 'unblocked':
          this.appliedDamage = this.appStateService.currentAttack.damage;
      }


      this.appStateService.selectedPlayer.life -= this.appliedDamage;
    }


    this.appStateService.setCurrentPage('Main');
  }

  }
