import Character from './app';

export default class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}

const bownan1 = new Bowman('Bowman1', 'Bowman');

// eslint-disable-next-line no-console
console.log(bownan1);