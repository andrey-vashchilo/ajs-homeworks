
import Character from './app';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}

const daemon1 = new Daemon('Daemon1', 'Daemon');

// eslint-disable-next-line no-console
console.log(daemon1);