"use strict";

import { Team } from './set';
import { Bowerman } from './heroes';

let team = new Team();
team.add(new Bowerman('John'));
console.log(team.toArray());