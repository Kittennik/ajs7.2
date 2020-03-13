import Character from '../js/app';

test('Уровень повышен', () => {
  const character = new Character('Kate');
  character.damage(50);
  const expected = {
    name: 'Kate',
    level: 2,
    health: 100,
    attack: 30,
    defence: 30,
  };
  character.levelUp();
  expect(character).toEqual(expected);
});

test('Персонаж погиб', () => {
  const character = new Character('Leila');
  character.damage(300);
  expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
});
