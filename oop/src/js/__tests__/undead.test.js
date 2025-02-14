import Undead from '../undead';

test('creat Undead', () => {
  const undead1 = new Undead('Undead1', 'Undead');
  const result = {
    name: 'Undead1',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead1).toEqual(result);
});