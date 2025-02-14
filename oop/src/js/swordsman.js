import Character from './app';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 40;
  }
}

const swordsman1 = new Swordsman('Swordsman1', 'Swordsman');

// eslint-disable-next-line no-console
console.log(swordsman1);