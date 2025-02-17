const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      
    },
  ],
};

export default function attackList(obj) {
  const specials = obj.special;
  const result = [];

  specials.forEach((item) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = item;

    result.push({
      id, name, description, icon,
    });
  });
  return result;
}


console.log(attackList(character));