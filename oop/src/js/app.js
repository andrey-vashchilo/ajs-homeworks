export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (typeof name !== 'string') {
      throw new Error('Значение name не является строкой');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('Значение name должно содержать от 2 до 10 символов');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (types.includes(type) === false) {
      throw new Error('Значение type должно содержать одно из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
  }

  levelUp() {
    if (this.level !== 0) {
      this.level += 1;
      this.health = 100;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж умер');
    }
  }
}