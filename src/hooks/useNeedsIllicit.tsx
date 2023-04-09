import { IllicitTrainings } from '@malleus/constants/Trainings';
import { useCharacterStore } from '@malleus/store/character.store';
import { intersection } from 'lodash';
import { useEffect, useState } from 'react';

export const useNeedsIllicit = () => {
  const character = useCharacterStore((store) => store.activeChar);
  const [needsIllicit, setNeedsIllicit] = useState(false);

  useEffect(() => {
    setNeedsIllicit(
      character.archetype === 'Knave' &&
        intersection(character.trainings, IllicitTrainings).length === 0,
    );
  }, [character.archetype, character.trainings]);

  return needsIllicit;
};
