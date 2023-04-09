import { Archetypes } from '@malleus/constants/Archetypes';
import { useCharacterStore } from '@malleus/store/character.store';
import Paper from '@mui/material/Paper';
import { uniq } from 'lodash';
import { WizardCard } from '../../';

export const ArchetypePanel = () => {
  const charArchetype = useCharacterStore(
    (store) => store.activeChar.archetype,
  );
  const charTrainings = useCharacterStore(
    (store) => store.activeChar.trainings,
  );
  const updateCharacter = useCharacterStore((store) => store.updateCharacter);

  const handleArchetypeClick = (archetype: string) => {
    if (archetype === 'Scholar') {
      const trainings = uniq([...charTrainings, 'Learned']);
      updateCharacter({ archetype, trainings });
    }
    updateCharacter({ archetype });
  };

  return (
    <Paper className="wizard-panel flex-wrap justify-between">
      {Archetypes.map((archetype) => (
        <WizardCard
          className="w-[48%]"
          key={archetype.name}
          selected={charArchetype === archetype.name}
          onClick={() => handleArchetypeClick(archetype.name)}
          {...archetype}
        />
      ))}
    </Paper>
  );
};
