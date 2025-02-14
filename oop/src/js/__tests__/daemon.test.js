import Daemon from '../daemon';

test('ctreat Daemon', () => {
  const daemon1 = new Daemon('Daemon1', 'Daemon');
  const result = {
    name: 'Daemon1',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon1).toEqual(result);
});