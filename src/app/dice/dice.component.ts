import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css'
})
export class DiceComponent {

  diceNumber: number = 1;

  rollDice() {

    this.diceNumber = Math.floor(Math.random() * 99) + 1;

  }

  simulateDiceRolls(numRolls: number) {

    let delay = 0;

    for (let index = 0; index < numRolls; index++) {

      setTimeout(() => {
        this.rollDice();
      }, delay);

      delay += 200;

    }

  }




}
