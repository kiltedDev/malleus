import { Talents, type Talent } from '@malleus/constants/Talents';
import { useMaxTalents } from '@malleus/hooks/useMaxTalents';
import { useCharacterStore } from '@malleus/store/character.store';
import Paper from '@mui/material/Paper';
import { WizardCard } from '../..';

export const TalentPanel = () => {
  const charTalents = useCharacterStore((store) => store.activeChar.talents);
  const charArchetype = useCharacterStore(
    (store) => store.activeChar.archetype,
  );
  const maxTalents = useMaxTalents();
  const updateCharacter = useCharacterStore((store) => store.updateCharacter);

  const handleTalentClick = (talent: string, selected: boolean) => {
    const talents = selected
      ? charTalents.filter((charTalent) => charTalent !== talent)
      : [...charTalents, talent];
    updateCharacter({ talents });
  };

  const checkTalentDisabled = (talent: Talent) => {
    if (charTalents.length >= maxTalents) return true;
    if (talent.name === 'Arcane' && charArchetype !== 'Scholar') return true;
  };

  return (
    <Paper className="wizard-panel flex-wrap justify-between overflow-y-auto">
      {Talents.map((talent) => {
        const selected = charTalents.some(
          (charTalent) => talent.name === charTalent,
        );
        return (
          <WizardCard
            key={talent.name}
            className="w-[48%]"
            onClick={() => handleTalentClick(talent.name, selected)}
            selected={selected}
            disabled={!selected && checkTalentDisabled(talent)}
            {...talent}
          />
        );
      })}
    </Paper>
  );
};
