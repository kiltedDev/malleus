export const Trainings = [
  {
    name: 'Alchemist',
    description: 'Craft firelock ammunition, drugs and potions.',
    illicit: false,
  },
  {
    name: 'Apothecary',
    description: 'Craft medicines and poisons.',
    illicit: false,
  },
  {
    name: 'Arbalester',
    description: 'May use a LARP-safe Crossbow.',
    illicit: false,
  },
  {
    name: 'Archer',
    description: 'May use a LARP-safe Bow.',
    illicit: false,
  },
  {
    name: 'Arquebusier',
    description: 'May use a LARP-safe firearm.',
    illicit: false,
  },
  {
    name: 'Brewer',
    description:
      'Drinks prepared by you restore Talent use when nearby a working Tavern.',
    illicit: false,
  },
  {
    name: 'Builder',
    description: 'Craft chests, reinforced doors and buildings upgrades.',
    illicit: false,
  },
  {
    name: 'Chirurgeon',
    description:
      'Take target from dying to wounded, or remove status effects or mutations with an herb and painful surgery role play.',
    illicit: false,
  },
  {
    name: 'Cook',
    description:
      'Food prepared by you restore Talent use when nearby a working Tavern.',
    illicit: false,
  },
  {
    name: 'Explorer',
    description: 'Burn a torch to reveal an adjacent encounter Tile.',
    illicit: false,
  },
  {
    name: 'Forager',
    description: 'Gather Herbs & Wood',
    illicit: false,
  },
  {
    name: 'Forester',
    description: 'Gather Hides & Wood.',
    illicit: false,
  },
  {
    name: 'Gossip',
    description: 'You may reference one chosen Rumor sheet in the Sanctuary.',
    illicit: false,
  },
  {
    name: 'Healer',
    description:
      'Take a target from wounded to healthy or Treat Disease with bandages and role play.',
    illicit: false,
  },
  {
    name: 'Learned',
    description: 'Read and Write easily, can create forgeries.',
    illicit: false,
  },
  {
    name: 'Outfitter',
    description: 'Craft and repair wooden and leather arms.',
    illicit: false,
  },
  {
    name: 'Prospector',
    description: 'Gather Metal & Minerals.',
    illicit: false,
  },
  {
    name: 'Rat-catcher',
    description: 'May handle Rats and traps without being Sickened.',
    illicit: false,
  },
  {
    name: 'Smith',
    description: 'Craft and repair metal arms and armor.',
    illicit: false,
  },
  {
    name: 'Soldaten',
    description:
      'May use Great Weapons: two handed swords, axes, hammers and polearms.',
    illicit: false,
  },
  {
    name: 'Spy',
    description: 'Place a spy token to peek at any standard encounter card.',
    illicit: true,
  },
  {
    name: 'Lockpick',
    description:
      'Bypass “Locks” on chests or doors with at least a minute of role play.',
    illicit: true,
  },
  {
    name: 'Smuggler',
    description: 'Access the “Duty Free” purchase list.',
    illicit: true,
  },
  {
    name: 'Trapper',
    description: 'You can set traps using bang snaps.',
    illicit: true,
  },
];

export type Training = {
  name: string;
  description: string;
  illicit: boolean;
};

export const IllicitTrainings = Trainings.reduce((acc, val) => {
  if (val.illicit) return [...acc, val.name];
  return acc;
}, [] as string[]);
