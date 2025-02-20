"use strict";

import Character from './character.js';
import Magician from './magician.js';
import Daemon from './daemon.js';


console.log(new Character('Monster', 'Daemon'));
console.log(new Magician('John'));
console.log(new Daemon('John'));

let daemon = new Character('John', 'Daemon');
console.log(daemon.stoned);
console.log(daemon.stoned = true);