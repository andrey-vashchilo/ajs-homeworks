import Zombie from '../zombie';

test('creat Zombie', () => {
  const undead1 = new Zombie('Zombie1', 'Zombie');
  const result = {
    name: 'Zombie1',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(undead1).toEqual(result);
});