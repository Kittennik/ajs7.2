export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }

  damage(damage) {
    this.health -= damage * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw Error('Нельзя повысить левел умершего');
    } else {
      this.level += 1;
      this.health = 100;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    }
  }
}
