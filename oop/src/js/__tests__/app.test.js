import Character from '../app';
import Magician from '../magician';

test('test Character', () => {
  const character1 = new Character('Spider', 'Magician');
  const result = {
    name: 'Spider',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character1).toEqual(result);
});

test('test Character error type', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const ch1 = new Character('Spider', 'Spider');
  }).toThrowError('Значение type должно содержать одно из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('test Character error type2', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const ch1 = new Character('S', 'Magician');
  }).toThrowError('Значение name должно содержать от 2 до 10 символов');
});

test('test Character error type3', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const ch1 = new Character(234, 'Magician');
  }).toThrowError('Значение name не является строкой');
});

test('test levelUp', () => {
  const user1 = new Magician('Batman', 'Magician');
  user1.levelUp();
  expect(user1).toEqual({
    name: 'Batman',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('test levelUp error type', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const user2 = new Magician('Batman1', 'Magician');
    user2.level = 0;
    user2.levelUp();
  }).toThrowError('Нельзя повысить левел умершего');
});

test('test damage', () => {
  const user3 = new Magician('Batman2', 'Magician');
  user3.damage(40);
  expect(user3.health).toEqual(76);
});

test('test damage error type', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const user4 = new Magician('Batman3', 'Magician');
    user4.health = -20;
    user4.damage(40);
  }).toThrowError('Персонаж умер');
});