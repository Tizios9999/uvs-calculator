export class AttackData {
  damage: number;
  speed: number;
  zone: string;

  constructor(damage: number, speed: number, zone: string) {
    this.damage = damage;
    this.speed = speed;
    this.zone = zone;
  }
}
