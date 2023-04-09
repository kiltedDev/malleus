import { useCharacterStore } from '@malleus/store/character.store';
import { useEffect, useState } from 'react';

export const useMaxTalents = () => {
  const character = useCharacterStore((store) => store.activeChar);
  const [maxTalents, setMaxTalents] = useState(
    character.eventCount > 4 ? 2 : 1,
  );

  useEffect(() => {
    setMaxTalents(character.eventCount > 4 ? 2 : 1);

    return () => {
      setMaxTalents(1);
    };
  }, [character.eventCount]);

  return maxTalents;
};
