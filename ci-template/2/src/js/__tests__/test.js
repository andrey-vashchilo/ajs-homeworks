
import sortHeroesByHealth from '../../index.js';

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortHeroesByHealth(input)).toEqual(expected);
  });

  test('should return an empty array if input is empty', () => {
    const input = [];
    const expected = [];
    expect(sortHeroesByHealth(input)).toEqual(expected);
  });

  test('should handle array with one hero', () => {
    const input = [{ name: 'мечник', health: 50 }];
    const expected = [{ name: 'мечник', health: 50 }];
    expect(sortHeroesByHealth(input)).toEqual(expected);
  });

  test('should not modify the original array', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];
    const copy = [...input];

    sortHeroesByHealth(input);
    expect(input).toEqual(copy); // Проверяем, что исходный массив не изменился
  });

  test('should throw an error if input is not an array', () => {
    expect(() => sortHeroesByHealth(null)).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth({})).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth(123)).toThrow('Input must be an array');
  });
});
