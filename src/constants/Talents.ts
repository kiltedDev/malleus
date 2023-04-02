export const Talents = {
  Medicus: {
    id: 'clfy21ugg00006vpqj20x4zl5',
    name: 'Medicus',
    description:
      "May drag another character back from the brink of death, allowing them to stagger and defend themselves clumsily while Fallen for a scene. They will still fall to Death's Door without proper healing and rest within more than ten minutes.",
    incomeIncrease: 0,
  },
  Arcane: {
    id: 'clfy22of400026vpqiw2e8uyx',
    name: 'Arcane',
    description:
      'Cast magic as Collegiate Wizard or Hedge Witch This Talent uses a unique resource- Arcane Fatigue.  (Approval Required)',
    incomeIncrease: 0,
  },
  Bloodthirsty: {
    name: 'Bloodthirsty',
    id: 'clfy2360i00046vpqf70snj2u',
    description: 'May execute or torment a Fallen enemy to heal a Wound.',
    incomeIncrease: 0,
  },
  Brave: {
    id: 'clfy23gwd00066vpqqv69ltl3',
    name: 'Brave',
    description:
      'Resist a Fear effect or spell, becoming resistant to Fear for the rest of the scene.',
    incomeIncrease: 0,
  },
  Chanter: {
    id: 'clfy23wn500086vpqbc3yhzxa',
    name: 'Chanter',
    description:
      'Cast divine magic as short or long religious rituals.  (Approval Required)',
    incomeIncrease: 0,
  },
  Devout: {
    id: 'clfy24bzy000a6vpqtvfc0os3',
    name: 'Devout',
    description:
      'Resist Corruption. May revive people at the Shrine. Must have three sacred vows they cannot break and must attend/perform religious observances once per day.',
    incomeIncrease: 0,
  },
  Diehard: {
    name: 'Diehard',
    id: 'clfy24mjo000c6vpq54kcqrcw',
    description: 'While fallen, you can still fight while prone.',
    incomeIncrease: 0,
  },
  'Iron Will': {
    id: 'clfy252mt000e6vpq7yqt3a29',
    name: 'Iron Will',
    description:
      'Resist a single brief instance of a mental effect. Examples: Fear, Possession, Impulse, etc.',
    incomeIncrease: 0,
  },
  Prepared: {
    id: 'clfy25otw000i6vpqis040pg4',
    name: 'Prepared',
    description:
      'You may pass/skip over an unrevealed Depths card. You start each expedition with +1 Upkeep.',
    incomeIncrease: 0,
  },
  Inspiring: {
    id: 'clfy26l45000k6vpqp8cr1d3k',
    name: 'Inspiring',
    description:
      'With quick inspiring roleplay allow up to two others to use their Talent again or regain a lost Wound for a short scene. After the short scene the effect fades.',
    incomeIncrease: 0,
  },
  Mastercrafter: {
    id: 'clfy271ty000m6vpqjbqdwus8',
    name: 'Mastercrafter',
    description:
      'All crafted items from chosen Trade may be of the Master variant. (see recipes) Commoner or Scholar only.',
    incomeIncrease: 0,
  },
  Mutant: {
    id: 'clfy27ej0000o6vpqrg9zb0t9',
    name: 'Mutant',
    description:
      'Resist Corruption. You must have an unnatural deformity as part of your costume.',
    incomeIncrease: 0,
  },
  Poisoner: {
    id: 'clfy27tm6000q6vpqtall46ky',
    name: 'Poisoner',
    description:
      'Resist Poison with a short scene of sweaty sickness. May use and handle Master level poisons without risk.',
    incomeIncrease: 0,
  },
  Survivor: {
    id: 'clfy284bs000s6vpqopxzfdy6',
    name: 'Survivor',
    description:
      'Resist a disease or Sickness effect or crawl and stagger while Fallen. Must have terrible scars as part of your costume.',
    incomeIncrease: 0,
  },
  Strong: {
    id: 'clfy28u7e000u6vpq180gjmfj',
    name: 'Strong',
    description:
      'You can overpower a non-Strong opponent, force a door, carry a big weight in a brief surge of strength. Mighty creatures will still overpower you, but you can bend for a second before breaking.',
    incomeIncrease: 0,
  },
  'The Sight': {
    id: 'clfy29351000w6vpqx7r7jlr5',
    name: 'The Sight',
    description:
      'You are plagued with visions and dreams from beyond. You may engage with or speak to, but not reveal, incorporeal beings. In the Depths you may privately read a single unexplored tile but can only  share info cryptically.',
    incomeIncrease: 0,
  },
  'True Grit': {
    id: 'clfy29d4p000y6vpq8y7t1de7',
    name: 'True Grit',
    description:
      'May push through pain, grunting and snarling, like using a crippled limb, resisting torture or staggering a short distance while dying, for a short scene. ',
    incomeIncrease: 0,
  },
  'Trade Connections': {
    id: 'clfy29s8d00106vpqrw1g4scj',
    name: 'Trade Connections',
    description:
      'You may substitute 1 silver per 1 resource when crafting, or helping others craft. Others acquiring trappings without crafting recipes during live play can do so through you.',
    incomeIncrease: 0,
  },
  Lucky: {
    id: 'clfy25de9000g6vpq5dhho0us',
    name: 'Lucky',
    description:
      'Redo one roll, card draw, spin or other single effect when gambling. Start each expedition with two extra Silver Marks.',
    incomeIncrease: 2,
  },
};

export type Talent = (typeof Talents)[keyof typeof Talents];
