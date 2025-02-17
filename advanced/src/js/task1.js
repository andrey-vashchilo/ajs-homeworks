const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderByProps(data, primaryKeys) {
  const restKeys = Object.keys(data)
    .filter((key) => !primaryKeys.includes(key))
    .sort();

  const keys = primaryKeys.concat(restKeys);

  return keys.map((key) => ({
    key,
    value: data[key],
  }));
}

const result = orderByProps(obj, ['name', 'level']);

console.log(result);