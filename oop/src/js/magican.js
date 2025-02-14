import Character from './app';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

// const magician1 = new Magician('Magician1', 'Magician');

// // eslint-disable-next-line no-console
// console.log(magician1);