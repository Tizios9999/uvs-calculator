import { Injectable } from '@angular/core';
import { PlayerData } from './player-data';
import { AttackData } from './attack-data';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  // State values
  currentPage: string = 'Main';

  myStartingLife: number = 25;
  rivalStartingLife: number = 25;

  myData: PlayerData = new PlayerData(this.myStartingLife, 0, 'red');
  rivalData: PlayerData = new PlayerData(this.rivalStartingLife, 0, 'blue');

  selectedPlayer: PlayerData = this.myData;

  selectPlayer(player: PlayerData) {
    this.selectedPlayer = player;
  }

  currentAttack: AttackData = new AttackData(4, 4, 'mid');

 // Navigation setters and getters
  setCurrentPage(pageName: string) {
    this.currentPage = pageName;
  }

  getCurrentPage() {
    return this.currentPage;
  }

  // Game getters and setters

  updatePropertyValue<T>(obj: T, property: keyof T, amount: number) {

      (obj[property] as number) += amount;

      console.log(obj[property]);
  }

  setPropertyValue<T>(obj: T, property: keyof T, amount: number) {

    (obj[property] as number) = amount;

  }

  resetGame() {
    this.setPropertyValue(this.myData, 'life', this.myStartingLife);
    this.setPropertyValue(this.myData, 'counter', 0);

    this.setPropertyValue(this.rivalData, 'life', this.rivalStartingLife);
    this.setPropertyValue(this.rivalData, 'counter', 0);
  }

  resetAttack() {
    this.currentAttack.zone = 'high';
    this.currentAttack.speed = 4;
    this.currentAttack.damage = 4;
  }

  setAttackZone(zone: string) {
    this.currentAttack.zone = zone;
  }

}
