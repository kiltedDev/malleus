export const Talents = [
  {
    name: 'Medicus',
    features:
      "May drag another character back from the brink of death, allowing them to stagger and defend themselves clumsily while Fallen for a scene. They will still fall to Death's Door without proper healing and rest within more than ten minutes.",
    incomeIncrease: 0,
  },
  {
    name: 'Arcane',
    features:
      'Cast magic as Collegiate Wizard or Hedge Witch.\nThis Talent uses a unique resource- Arcane Fatigue.\n(Approval Required)',
    incomeIncrease: 0,
  },
  {
    name: 'Bloodthirsty',
    features: 'May execute or torment a Fallen enemy to heal a Wound.',
    incomeIncrease: 0,
  },
  {
    name: 'Brave',
    features:
      'Resist a Fear effect or spell, becoming resistant to Fear for the rest of the scene.',
    incomeIncrease: 0,
  },
  {
    name: 'Chanter',
    features:
      'Cast divine magic as short or long religious rituals.\n(Approval Required)',
    incomeIncrease: 0,
  },
  {
    name: 'Devout',
    features:
      'Resist Corruption. May revive people at the Shrine.\nMust have three sacred vows they cannot break and must attend/perform religious observances once per day.',
    incomeIncrease: 0,
  },
  {
    name: 'Diehard',
    features: 'While fallen, you can still fight while prone.',
    incomeIncrease: 0,
  },
  {
    name: 'Iron Will',
    features:
      'Resist a single brief instance of a mental effect.\nExamples: Fear, Possession, Impulse, etc.',
    incomeIncrease: 0,
  },
  {
    name: 'Prepared',
    features:
      'You may pass/skip over an unrevealed Depths card. You start each expedition with +1 Upkeep.',
    incomeIncrease: 0,
  },
  {
    name: 'Inspiring',
    features:
      'With quick inspiring roleplay allow up to two others to use their Talent again or regain a lost Wound for a short scene. After the short scene the effect fades.',
    incomeIncrease: 0,
  },
  {
    name: 'Mastercrafter',
    features:
      'All crafted items from chosen Trade may be of the Master variant. (see recipes) Commoner or Scholar only.',
    incomeIncrease: 0,
  },
  {
    name: 'Mutant',
    features:
      'Resist Corruption. You must have an unnatural deformity as part of your costume.',
    incomeIncrease: 0,
  },
  {
    name: 'Poisoner',
    features:
      'Resist Poison with a short scene of sweaty sickness. May use and handle Master level poisons without risk.',
    incomeIncrease: 0,
  },
  {
    name: 'Survivor',
    features:
      'Resist a disease or Sickness effect or crawl and stagger while Fallen. Must have terrible scars as part of your costume.',
    incomeIncrease: 0,
  },
  {
    name: 'Strong',
    features:
      'You can overpower a non-Strong opponent, force a door, carry a big weight in a brief surge of strength. Mighty creatures will still overpower you, but you can bend for a second before breaking.',
    incomeIncrease: 0,
  },
  {
    name: 'The Sight',
    features:
      'You are plagued with visions and dreams from beyond. You may engage with or speak to, but not reveal, incorporeal beings. In the Depths you may privately read a single unexplored tile but can only  share info cryptically.',
    incomeIncrease: 0,
  },
  {
    name: 'True Grit',
    features:
      'May push through pain, grunting and snarling, like using a crippled limb, resisting torture or staggering a short distance while dying, for a short scene. ',
    incomeIncrease: 0,
  },
  {
    name: 'Trade Connections',
    features:
      'You may substitute 1 silver per 1 resource when crafting, or helping others craft. Others acquiring trappings without crafting recipes during live play can do so through you.',
    incomeIncrease: 0,
  },
  {
    name: 'Lucky',
    features:
      'Redo one roll, card draw, spin or other single effect when gambling. Start each expedition with two extra Silver Marks.',
    incomeIncrease: 2,
  },
];

export type Talent = {
  name: string;
  features: string;
  incomeIncrease: number;
};
