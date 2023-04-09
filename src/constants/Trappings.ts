export const Trappings: Trapping[] = [
  {
    name: 'Knife',
    upkeep: 1,
    description: '',
    group: 'Light Weapons',
  },
  {
    name: 'Short Cudgel',
    upkeep: 1,
    description: '',
    group: 'Light Weapons',
  },
  {
    name: 'Sword',
    upkeep: 1,
    description: '',
    group: 'Light Weapons',
  },
  {
    name: 'Axe',
    upkeep: 1,
    description: '',
    group: 'Light Weapons',
  },
  {
    name: 'Mace',
    upkeep: 1,
    description: '',
    group: 'Light Weapons',
  },
  {
    name: 'Hammer',
    upkeep: 1,
    description: '',
    group: 'Light Weapons',
  },
  {
    name: 'Short Spear',
    upkeep: 1,
    description: '',
    group: 'Light Weapons',
  },
  // Heavy Weapons
  {
    name: 'Great Weapon',
    upkeep: 1,
    description: 'Soldaten Training to use',
    group: 'Heavy Weapons',
  },
  {
    name: 'Polearm',
    upkeep: 1,
    description: 'Soldaten Training to use',
    group: 'Heavy Weapons',
  },
  // Ranged Weapons
  {
    name: 'Bow',
    upkeep: 1,
    description: 'Archer Training to use',
    group: 'Ranged Weapons',
  },
  {
    name: 'Crossbow',
    upkeep: 1,
    description: 'Arbalester Training to use',
    group: 'Ranged Weapons',
  },
  {
    name: 'Pistol',
    upkeep: 2,
    description: 'Arquebusier Training to use',
    group: 'Ranged Weapons',
  },
  {
    name: 'Arquebus',
    upkeep: 2,
    description: 'Arquebusier Training to use',
    group: 'Ranged Weapons',
  },
  {
    name: 'Throwing Knives (2)',
    upkeep: 1,
    description: '',
    group: 'Ranged Weapons',
  },
  {
    name: 'Throwing Axes (2)',
    upkeep: 1,
    description: '',
    group: 'Ranged Weapons',
  },
  // Ammunition
  {
    name: 'Sm Quiver of Arrows (up to 5)',
    upkeep: 1,
    description: 'Arrows that strike a target are spent',
    group: 'Ammunition',
  },
  {
    name: 'Sm Quiver of Bolts (up to 5)',
    upkeep: 1,
    description: 'Bolts that strike a target are spent',
    group: 'Ammunition',
  },
  {
    name: 'Lg Quiver of Arrows (6-12)',
    upkeep: 1,
    description: 'Arrows that strike a target are spent',
    group: 'Ammunition',
  },
  {
    name: 'Lg Quiver of Bolts (6-12)',
    upkeep: 1,
    description: 'Bolts that strike a target are spent',
    group: 'Ammunition',
  },
  {
    name: 'Firelock Ammunition (5)',
    upkeep: 1,
    description: '',
    group: 'Ammunition',
  },
  {
    name: 'Trap Parts (10)',
    upkeep: 1,
    description: 'Trapper Training to use',
    group: 'Ammunition',
  },
  // Armor
  {
    name: 'Partial Light Armor',
    upkeep: 1,
    description: 'Cloth/Leather: Covers 1-2 areas',
    group: 'Armor',
  },
  {
    name: 'Light Armor',
    upkeep: 2,
    description: 'Cloth/Leather: Covers 3+ areas',
    group: 'Armor',
  },
  {
    name: 'Partial Heavy Armor',
    upkeep: 2,
    description: 'Chain/Plate: Covers 1-2 areas',
    group: 'Armor',
  },
  {
    name: 'Heavy Armor',
    upkeep: 3,
    description: 'Chain/Plate: Covers 3+ areas',
    group: 'Armor',
  },
  {
    name: 'Shield',
    upkeep: 1,
    description: '',
    group: 'Armor',
  },
  {
    name: 'Pavise Shield',
    upkeep: 2,
    description: 'Tower Shield',
    group: 'Armor',
  },
  {
    name: 'Helmet',
    upkeep: 1,
    description: 'Prevents being cold-cocked',
    group: 'Armor',
  },
  // Trappings
  {
    name: 'Books & Inks',
    upkeep: 2,
    description: '',
    group: 'Trappings',
  },
  {
    name: 'Lockbox',
    upkeep: 1,
    description: 'May be locked. Key taped to bottom for Marshal',
    group: 'Trappings',
  },
  {
    name: 'Jewels and Finery',
    upkeep: 1,
    description: 'Worth 2 marks if pawned',
    group: 'Trappings',
  },
  {
    name: 'Small but Vicious Dog ',
    upkeep: 1,
    description: 'Rat-catcher required',
    group: 'Trappings',
  },
  // Consumables
  {
    name: 'Basic Apothecary Recipe: 1 dose',
    upkeep: 1,
    description: '',
    group: 'Consumables',
  },
  {
    name: 'Basic Alchemist Recipe: 1 dose',
    upkeep: 1,
    description: '',
    group: 'Consumables',
  },
  {
    name: 'Cache',
    upkeep: 1,
    description: 'Start Event with 2 Materials',
    group: 'Consumables',
  },
];

export type Trapping = {
  name: string;
  upkeep: number;
  description: string;
  group: TrappingGroup;
};

export type TrappingGroup =
  | 'Light Weapons'
  | 'Heavy Weapons'
  | 'Ranged Weapons'
  | 'Ammunition'
  | 'Armor'
  | 'Trappings'
  | 'Consumables';
