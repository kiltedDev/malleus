export const Factions = [
  'Marklund',
  'Freilund',
  'Wulflund',
  'Lyonesse',
  'Collegia Arcane',
  'Temple Malleus',
] as const;

export type Faction = (typeof Factions)[number];

export const FactionDescriptions: Record<Faction, FactionDescription> = {
  Marklund: {
    image: '/Marklund.png',
    homeland: 'The Archduchy of Marklund',
    leader: 'Archduke Frederich Herzollen von Spetz',
    vision:
      'The Archduke desires to see the Empire expand and consolidate power in the Old World, bringing the petty kingdoms into the Tributary States. Marklund favors pride and martial tradition as well as learning. Marklund is the seat of the Temple as well as its adversary, the College.',
    leaderPromise:
      "If the Archduke becomes the Emperor he will rule with an iron fist, wielding the army and the Temple against all who would oppose the Empire's supremacy. Loyalists would be given authority and position, or land in the new Tributary States",
    descriptors: [
      'Martial',
      'Imperial',
      'Knightly',
      'Learned',
      'Civilized',
      'Ambitious',
      'Faithful',
    ],
    favorDescriptor: 'Marklund’s people are proud and their smiths skilled.',
    favorOptions: [
      {
        trapping: 'Superior Melee Weapon',
        cost: 1,
      },
      {
        trapping: 'Badge of Courage',
        trappingDescription: 'Free use of the Brave talent (1/Event)',
        cost: 1,
      },
      {
        trapping: 'Bulletproof Cuirass',
        trappingDescription: 'Can resist bullets on front plate',
        cost: 3,
      },
    ],
  },
  Freilund: {
    image: '/Freiport.png',
    homeland: 'The City-State of Freiport',
    leader: 'Countess Marchella van Reisen',
    vision:
      'The Countess desires to foster independence and trade amongst the Imperial Cities with Freiport at the center of wealth. Freiport favors capitalism, opportunism and the arts as well as other luxuries. The County of Freilund and its ports are defended by citizen militias and private armies; and its coast and trade lanes by privateers who are often seen as little better than pirates themselves. Freiport embraces the future and the Countess employs foreign experts and masters of all stripes to keep the County on the cutting edge of fashion and technology.',
    leaderPromise:
      'If the Countess becomes the Empress she will dismantle much of the old Nobilities claims and dominance over the land. Trade will flow and her city will be the jewel in the Empires crown. Loyalists will be paid and paid well, living out their lives in favor and opulence',
    descriptors: [
      'Pirates',
      'Merchants',
      'Laissez Faire',
      'Independent',
      'Rich',
      'Modern',
    ],
    favorDescriptor:
      'Freiport embraces modernity and new ways of conducting war and business.',
    favorOptions: [
      {
        trapping: 'Firelock',
        cost: 1,
      },
      {
        trapping: 'Firelock Ammunition',
        trappingDescription: '10',
        cost: 1,
      },
      {
        trapping: 'Small Income',
        trappingDescription: '2 Marks',
        cost: 1,
      },
    ],
  },
  Wulflund: {
    image: '/Wulflund.png',
    homeland: 'The Margraviate of Wulflund',
    leader: 'Margraf Sigismund Wulftanner',
    vision:
      'The Margraf desires to see the Empire return to the Old Ways, the worship of the pagan gods before the rise of the Temple. Wulflund is also the worst plagued by the Darkness and its people are long suffering and stoic in the face of danger and damnation.',
    leaderPromise:
      'if the Margraf becomes the Emperor he will break the Temples stranglehold on the Empire. Wulflund and the Petty Kingdoms will be free to practice their traditional religions without fear of the Temple Malleus. The Darkness will be driven back at a terrible cost. There will be civil war and strife, but from the fires a stronger people will emerge',
    descriptors: [
      'Pagan',
      'Defiant',
      'Strong',
      'Defenders',
      'Rural',
      'Furs',
      'Talismans',
    ],
    favorDescriptor:
      'Wulflund preserves the pagan gods of old and stands defiant against the Darkness Without.',
    favorOptions: [
      {
        trapping: 'Pagan Talisman',
        trappingDescription: 'Resist a level of Corruption (1/Event)',
        cost: 1,
      },
      {
        trapping: 'Sacred Wolfskin',
        trappingDescription: 'Counts as Helmet if worn on shoulders',
        cost: 2,
      },
      {
        trapping: 'Superior Great Weapon or Polearm',
        cost: 1,
      },
    ],
  },
  Lyonesse: {
    image: '/Lyonesse.png',
    homeland: 'Lyonesse',
    leader: 'Roi (Queen) Brionne Ines Guilloux and Duke Roumald d’Ardan',
    vision:
      'The Roi has called upon an ancient custom of Erranty upon the cursed forest Drakenwald. All Knights and Serfs who take up arms and travel North to bring back the miraculous Witchstone will be rewarded and their debts forgiven at the expense of the crown! With the power of the stone the antiquated armies and tired magics of the Kingdom will once more be a match for the technology of the Empire. Now bands of Bretons slip up the less guarded Wulfland Marches and enter the Drakenwald, for gold, for glory, for the freedom of Lyonesse, for The Lady!',
    leaderPromise:
      'if the Kingdom of Lyonesse gathers enough Witchstone their mages and knights will once more be a match for Imperial Steel. A new age will dawn for the Breton people; while the Imperials squabble in the ruins of their Empire Lyonesse will rise once more, blessed by the Lady, to its position of preeminence in the Old World',
    descriptors: ['Chivalry', 'Questing', 'Patriotic', 'Faithful', 'Reckless'],
    favorDescriptor: 'Lyonesse clings to the old traditions of Chivalry.',
    favorOptions: [
      {
        trapping: 'Superior Bow',
        cost: 1,
      },
      {
        trapping: 'Holy Tress',
        trappingDescription: 'Pray to regain Talent use (1/day)',
        cost: 1,
      },
      {
        trapping: "Lady's Tears",
        trappingDescription: 'Consumable: heals wounds & diseases (1/Event)',
        cost: 1,
      },
    ],
  },
  'Collegia Arcane': {
    image: '/Collegia.png',
    homeland: 'The Collegia Arcane',
    leader: 'Arch-Matriarch Vos Velorum',
    vision:
      'Since the Fading the Colleges have been a shadow of themselves but with the Starfall power flowed through the Magisters once more! The Arch-Matriarch sees the Witchstone as the new renaissance of arcane study. She and the Headmasters have dispatched their Colleges out to advise and assist the various factions on gathering Witchstone; effectively playing all sides of the conflict in a bid to take as much as they can, and most importantly, back the winning side.',
    leaderPromise:
      'A college mage will be "given" or "assigned" to one of the factions by the game staff. They must effectively serve their assignment if the Colleges are to gather and unravel the mystery of the power within the Witchstone. Then they will wield true power and make the princes and potentates of the earth become supplicants for their favor. The Temple Malleus will no longer be able to hunt and torment Magi. A new age will dawn where those with The Gift rule.',
    descriptors: [
      'Wizards',
      'Mercenary',
      'Lust for Power',
      'Curiosity',
      'Scholarly',
    ],
    favorDescriptor:
      'The Five Colleges study and police magic. Their laboratories and libraries are second to none.',
    favorOptions: [],
  },
  'Temple Malleus': {
    image: '/Temple.png',
    homeland: 'The Temple Malleus',
    leader:
      'Witch Hunter General Stephanus van Diehl & Witch Hunter General Katerin Eider',
    vision:
      'The Witch Hunters General are the ruling Diarchy of the Temple Malleus, the most militant of the three orders within the Temple Church. The Starfall brought forth the Darkness and now it is up to the Temple Malleus to excise the corruption from the heart of the Empire. The Temple Malleus is made up of zealots, inquisitors, bounty hunters, spies and mercenaries- driven by holy zeal or the love of the Temples boundless gold, it matters not to those who fall into their clutches.',
    leaderPromise:
      'if the Temple Malleus gathers the Witchstone into the vaults beneath the High Temple they will curtail the creeping Darkness, render the upstart Magi impotent and prove that the only power is divine power. Divinity, of course, bestows earthly rewards to its faithful servants',
    descriptors: [
      'Zealous',
      'Pious',
      'Driven',
      'Ruthless',
      'Somber',
      'Righteous',
    ],
    favorDescriptor:
      'The Temple provides blessed relics and instruments to purge the Darkness Within and fight the Darkness Without.',
    favorOptions: [
      {
        trapping: 'Holy Litany',
        trappingDescription: 'Cast Daze as a Chanter (1/Event)',
        cost: 1,
      },
      {
        trapping: 'Silver Bullet / Bolt / Dagger',
        trappingDescription: 'Grievously Sounds undead or demons (1/Event)',
        cost: 1,
      },
      {
        trapping: "Martyr's Seal",
        trappingDescription:
          'Resist a Wound or Spell by an Evil being (1/Event)',
        cost: 1,
      },
    ],
  },
};

type FavorOption = {
  trapping: string;
  trappingDescription?: string;
  cost: number;
};

export type FactionDescription = {
  image: string;
  homeland: string;
  leader: string;
  vision: string;
  leaderPromise: string;
  descriptors: string[];
  favorDescriptor: string;
  favorOptions: FavorOption[];
};
