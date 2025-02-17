"use strict";

export class Team {
    constructor() {
        this.members = new Set();
    }

    add(object) {

        if (!this.toArray(this.members)
            .find(item => (item.type === object.type && item.name === object.name))) {
            this.members.add(object);
        } 
        else {throw new Error("Hero is already exists");}

    }

    addAll(...objects) {
        for (let object of objects) {
            this.add(object);
        }
    }

    toArray() {
        return Array.from(this.members);
    }
}

