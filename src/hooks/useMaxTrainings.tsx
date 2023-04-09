import { useCharacterStore } from '@malleus/store/character.store';
import { useEffect, useState } from 'react';

export const useMaxTrainings = () => {
  const character = useCharacterStore((store) => store.activeChar);
  const [maxTrainings, setMaxTrainings] = useState(3);

  useEffect(() => {
    let newMax = 3;

    if (character.eventCount > 2) {
      newMax += 1;
    }
    if (character.eventCount > 6) {
      newMax += 1;
    }
    if (
      character.archetype === 'Knave' ||
      character.archetype === 'Scholar' ||
      character.archetype === 'Commoner'
    ) {
      newMax += 1;
    }
    setMaxTrainings(newMax);

    return () => {
      setMaxTrainings(3);
    };
  }, [character.archetype, character.eventCount]);

  return maxTrainings;
};
