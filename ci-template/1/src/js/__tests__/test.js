import healthStatus from '../../index.js';

test('returns "healthy" when health is greater than 50', () => {
    expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('returns "wounded" when health is between 15 and 50', () => {
    expect(healthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(healthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
    expect(healthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('returns "critical" when health is less than 15', () => {
    expect(healthStatus({ name: 'Маг', health: 10 })).toBe('critical');
    expect(healthStatus({ name: 'Маг', health: 0 })).toBe('critical');
});
