import Bowman from '../bowman';

test('creat Bowman', () => {
  const bownan1 = new Bowman('Bowman1', 'Bowman');
  const result = {
    name: 'Bowman1',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bownan1).toEqual(result);
});