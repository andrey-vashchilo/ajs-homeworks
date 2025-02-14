import Magician from '../magician';

test('creat Magician', () => {
  const magician1 = new Magician('Magician1', 'Magician');
  const result = {
    name: 'Magician1',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician1).toEqual(result);
});