import Character from './character';

export default class Magician extends Character {
    constructor(name){
        super(name,"Magician");
        this.distance = 100;
        this.attack = null;
        this.stoned = false;
    }
}