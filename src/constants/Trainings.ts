export const Trainings = {
  Alchemist: {
    id: 'clfy1oync00006vmi8nkx6tgr',
    name: 'Alchemist',
    description: 'Craft firelock ammunition, drugs and potions.',
    illicit: false,
  },
  Apothecary: {
    id: 'clfy1pfpq00026vmiw8m4sbfq',
    name: 'Apothecary',
    description: 'Craft medicines and poisons.',
    illicit: false,
  },
  Arbalester: {
    id: 'clfy1py8i00046vmiem4q2v8j',
    name: 'Arbalester',
    description: 'May use a LARP-safe Crossbow.',
    illicit: false,
  },
  Archer: {
    id: 'clfy1q7ff00066vmif02d45lv',
    name: 'Archer',
    description: 'May use a LARP-safe Bow.',
    illicit: false,
  },
  Arquebusier: {
    id: 'clfy1qjga00086vmiqppy9eag',
    name: 'Arquebusier',
    description: 'May use a LARP-safe firearm.',
    illicit: false,
  },
  Brewer: {
    id: 'clfy1qsjk000a6vmiqf30z6nj',
    name: 'Brewer',
    description:
      'Drinks prepared by you restore Talent use when nearby a working Tavern. ',
    illicit: false,
  },
  Builder: {
    id: 'clfy1r25z000c6vmi16zd03ga',
    name: 'Builder',
    description: 'Craft chests, reinforced doors and buildings upgrades.',
    illicit: false,
  },
  Chirurgeon: {
    id: 'clfy1rj9o000e6vmiqiadxfbw',
    name: 'Chirurgeon',
    description:
      'Take target from dying to wounded, or remove status effects or mutations with an herb and painful surgery role play.',
    illicit: false,
  },
  Cook: {
    id: 'clfy1rq4q000g6vmialpfug7x',
    name: 'Cook',
    description:
      'Food prepared by you restore Talent use when nearby a working Tavern.',
    illicit: false,
  },
  Explorer: {
    id: 'clfy1s12p000i6vmiqn8y40ei',
    name: 'Explorer',
    description: 'Burn a torch to reveal an adjacent encounter Tile.',
    illicit: false,
  },
  Forager: {
    id: 'clfy1sebp000k6vmic3r4xbul',
    name: 'Forager',
    description: 'Gather Herbs & Wood',
    illicit: false,
  },
  Forester: {
    id: 'clfy1smwc000m6vmift85w670',
    name: 'Forester',
    description: 'Gather Hides & Wood.',
    illicit: false,
  },
  Gossip: {
    id: 'clfy1sxdb000o6vmip40x14e3',
    name: 'Gossip',
    description: 'You may reference one chosen Rumor sheet in the Sanctuary.',
    illicit: false,
  },
  Healer: {
    id: 'clfy1t7ea000q6vmii52un4tx',
    name: 'Healer',
    description:
      'Take a target from wounded to healthy or Treat Disease with bandages and role play.',
    illicit: false,
  },
  Learned: {
    id: 'clfy1tgta000s6vmiza72v4hx',
    name: 'Learned',
    description: 'Read and Write easily, can create forgeries.',
    illicit: false,
  },
  Outfitter: {
    id: 'clfy1tq8d000u6vmi5r8zf3hr',
    name: 'Outfitter',
    description: 'Craft and repair wooden and leather arms.',
    illicit: false,
  },
  Prospector: {
    id: 'clfy1u3b9000w6vmimi9rkq94',
    name: 'Prospector',
    description: 'Gather Metal & Minerals.',
    illicit: false,
  },
  Rat: {
    id: 'clfy1uer2000y6vmig0rm6o7p',
    name: 'Rat-catcher',
    description: 'May handle Rats and traps without being Sickened.',
    illicit: false,
  },
  Smith: {
    id: 'clfy1unis00106vmiftpprb9m',
    name: 'Smith',
    description: 'Craft and repair metal arms and armor.',
    illicit: false,
  },
  Soldaten: {
    id: 'clfy1uzvg00126vmips38u7x7',
    name: 'Soldaten',
    description:
      'May use Great Weapons: two handed swords, axes, hammers and polearms.',
    illicit: false,
  },
  Spy: {
    id: 'clfy1vdh100146vmi3e2ewmim',
    name: 'Spy',
    description: 'Place a spy token to peek at any standard encounter card.',
    illicit: true,
  },
  Lockpick: {
    id: 'clfy1vv5600166vmi5sqzpjbl',
    name: 'Lockpick',
    description:
      'Bypass “Locks” on chests or doors with at least a minute of role play.',
    illicit: true,
  },
  Smuggler: {
    id: 'clfy1w9jn00186vmi22ykad7o',
    name: 'Smuggler',
    description: 'Access the “Duty Free” purchase list. ',
    illicit: true,
  },
  Trapper: {
    id: 'clfy1wina001a6vmit00ngbh8',
    name: 'Trapper',
    description: 'You can set traps using bang snaps.',
    illicit: true,
  },
};

export type Training = (typeof Trainings)[keyof typeof Trainings];
