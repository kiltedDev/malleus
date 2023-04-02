export const Archetypes = {
  Gentry: {
    id: 'clfy37t3c00006v2z4kuzkkqn',
    name: 'Gentry',
    features: 'Start with a Base 5 Upkeep and  an Income of 5 Marks',
    incomeIncrease: 5,
    description:
      'The vaunted halls of high society are a different sort of battlefield: the smile, the lie, the deadly ambition.',
    trainingIncrease: 0,
    upkeepIncrease: 1,
  },
  Scholar: {
    id: 'clfy38f0a00026v2zl533ocjk',
    name: 'Scholar',
    features: 'Start with Learned Training and free Upkeep on “Books and Inks”',
    incomeIncrease: 0,
    description:
      'Knowledge is a weapon far sharper than any blade wielded by a feeble hand.',
    trainingIncrease: 1,
    upkeepIncrease: 1,
  },
  Warrior: {
    id: 'clfy3bhz000006v6506wrk9m4',
    name: 'Warrior',
    features:
      'One time after each Dawn or Dusk a fallen Warrior may declare "Not Today" and stand up Wounded.',
    incomeIncrease: 0,
    description:
      'Broad of shoulder, swift of hand, these soldiers are the first willing sacrifices on the altar of war.',
    trainingIncrease: 0,
    upkeepIncrease: 0,
  },
  Commoner: {
    id: 'clfy3cb2z00026v65wp6bypk3',
    name: 'Commoner',
    features:
      'Start with one additional Training. When crafting, or helping another to craft, the Commoner may substitute one  material for another- once per Dawn/Dusk.',
    incomeIncrease: 0,
    description:
      'From the teeming cities and poorest villages they come, backs bent, wills unbroken.',
    trainingIncrease: 1,
    upkeepIncrease: 0,
  },
  Knave: {
    id: 'clfy3d5tl00046v65vgbrk3xn',
    name: 'Knave',
    features:
      'Start with one additional Illicit Training  and a Income of 2 Marks. Knaves may learn additional Illicit Trainings through growth.',
    incomeIncrease: 2,
    description:
      'Gold and secrets change hands in the shadows where wolves walk among sheep.',
    trainingIncrease: 1,
    upkeepIncrease: 0,
  },
};

export type Archetype = (typeof Archetypes)[keyof typeof Archetypes];
