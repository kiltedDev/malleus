export const Homelands = [
  {
    name: 'Marklund',
    group: 'Imperial',
    description:
      'Mightiest province of the Empire, famed for its knights and military.',
    inspirations: 'Holy Roman Empire, Brandenburg, Reikland',
  },
  {
    name: 'Freilund',
    group: 'Imperial',
    description:
      'The center of trade and art, its coastal regions are a haven of corsairs and merchantmen.',
    inspirations: 'Spanish Netherlands, Caribbean,  Marienburg',
  },
  {
    name: 'Wolflund',
    group: 'Imperial',
    description:
      'Bastion of paganism and famous for its bear and wolf cloaked warriors.',
    inspirations: 'Poland, Lithuania, Cossacks, Ostland, Kislev',
  },
  {
    name: 'Hochlund',
    group: 'Imperial',
    description:
      'Seat of the Imperial Throne, center of the Temple and academies.',
    inspirations: 'Austro-Hungarian Empire, Altdorf',
  },
  {
    name: 'Sollund',
    group: 'Imperial',
    description: 'Bread basket of the empire, wealthy towns and cities.',
    inspirations: 'Bavaria, Averland, Wissenland',
  },
  {
    name: 'Ostelund',
    group: 'Imperial',
    description: 'A vast province of dark forests and forgotten battlefields.',
    inspirations: 'Kingdom of Bohemia, Hussites, Ostermark, Talabecland',
  },
  {
    name: 'Lyonesse',
    group: 'Ausländer',
    description:
      'A land of knights and chivalry, outdated but defiant and proud.',
    inspirations: 'Arthurian Hundred-Years War France, Bretonnia',
  },
  {
    name: 'Ravea',
    group: 'Ausländer',
    description: 'A land of city states, trade, art and deadly conspiracies.',
    inspirations: 'Borgia Italy, Venice, Tilea',
  },
  {
    name: 'Navarr',
    group: 'Ausländer',
    description:
      'A land of brave explorers, sailors and a ruthless devotion to the Temple.',
    inspirations: 'Golden Age Spain, Estalia',
  },
  {
    name: 'Zavarosk',
    group: 'Ausländer',
    description:
      'A land of wide open steppes and the fearless tribes of shave headed horse warriors.',
    inspirations: 'Cossacks and Tatars, Ungols',
  },
  {
    name: 'Urosk',
    group: 'Ausländer',
    description:
      'A harsh northern land devoted to the old gods but under constant assault by monsters.',
    inspirations: 'Medieval Russia, Kislev',
  },
  {
    name: 'Seljikiram',
    group: 'Ausländer',
    description:
      'A land of sprawling cities, arid hills and hushed palaces. Ruled by a sultan.',
    inspirations: 'Ottoman Empire',
  },
  {
    name: 'Ostea',
    group: 'Ausländer',
    description:
      'A pastoral borderland of rival petty rulers, scattered villages, and divided territories.',
    inspirations: 'Balkans, Scotland, Border Princes',
  },
  {
    name: 'Varnava',
    group: 'Ausländer',
    description:
      'A haunted, mountainous land with a sinister reputation for nocturnal, bloodthirsty monsters.',
    inspirations: 'Dark Fantasy Transylvania',
  },
];

export type Homeland = (typeof Homelands)[number];
