import Character from './character';

export default class Daemon extends Character {
    constructor(name){
        super(name,"Daemon");
        this.distance = 100;
        this.attack = null;
        this.stoned = false;
    }
}