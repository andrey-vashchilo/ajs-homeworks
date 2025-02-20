import Daemon from "../daemon";
import Magician from "../magician";

test.each([
	[100, 1, true, 100],
	[100, 2, true, 85],
	[100, 1, false, 100],
	[100, 2, false, 90],
])('test1', (attack, distance, stoned, expected) => {
    const magician = new Magician('John', 'Magician');
    magician.attack = attack;
    magician.distance = distance;
    magician.stoned = stoned;
    expect(magician.attack).toBe(expected);
});

    test.each([
    [100, 1, true, 100],
    [100, 2, true, 85],
    [100, 1, false, 100],
    [100, 2, false, 90],
])('test2', (attack, distance, stoned, expected) => {
    const daemon = new Daemon('John', 'Daemon');
        daemon.attack = attack;
        daemon.distance = distance;
        daemon.stoned = stoned;
    expect(daemon.attack).toBe(expected);
});


    test('Magician stoned', () => {
    const magician = new Magician('John', 'Magician');
    magician.stoned = false;
    expect(magician.stoned).toBeFalsy();
    });
    test('Daemon stoned', () => {
    const daemon = new Daemon('John', 'Daemon');
    daemon.stoned = false;
    expect(daemon.stoned).toBeFalsy();
    });
