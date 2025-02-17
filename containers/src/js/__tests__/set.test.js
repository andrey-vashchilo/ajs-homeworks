import { Bowerman } from '../heroes';
import { Swordsman } from '../heroes';
import { Team } from '../set';

test ('should be add', () => {

    let team = new Team()
    team.add(new Bowerman('John'))
    expect(team.toArray()).toEqual([{
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "John",
        type: "Bowerman",
    }])

    team.add(new Bowerman('Fred'))
    expect(team.toArray()).toEqual([{
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "John",
        type: "Bowerman",
    },
    {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Fred",
        type: "Bowerman",
    }])

    team.addAll(new Bowerman('Boris'), new Swordsman('Alex'))
    expect(team.toArray()).toEqual([{
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "John",
        type: "Bowerman",
    },
    {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Fred",
        type: "Bowerman",
    },
    {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Boris",
        type: "Bowerman",
    },
    {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "Alex",
        type: "Swordsman",
    }])

})

test ('should be wrong', () => {

    let team = new Team();
    team.add(new Bowerman('Nick'))
    expect(function() {
        team.add(new Bowerman('Nick'));
    }).toThrow(new Error("Hero is already exists"));
})