import { Trainings, type Training } from '@malleus/constants/Trainings';
import { useMaxTrainings } from '@malleus/hooks/useMaxTrainings';
import { useNeedsIllicit } from '@malleus/hooks/useNeedsIllicit';
import { useCharacterStore } from '@malleus/store/character.store';
import Paper from '@mui/material/Paper';
import { WizardCard } from '../../WizardCard';

export const TrainingPanel = () => {
  const charTrainings = useCharacterStore(
    (store) => store.activeChar.trainings,
  );
  const charArchetype = useCharacterStore(
    (store) => store.activeChar.archetype,
  );
  const maxTrainings = useMaxTrainings();
  const needsIllicit = useNeedsIllicit();
  const updateCharacter = useCharacterStore((store) => store.updateCharacter);

  const checkTrainingDisabled = (training: Training) => {
    if (charArchetype === 'Scholar' && training.name === 'Learned') return true;
    if (charTrainings.includes(training.name)) return false;
    if (charTrainings.length >= maxTrainings) return true;
    if (charTrainings.length === maxTrainings - 1 && needsIllicit) {
      return !training.illicit;
    }
  };

  const handleTrainingClick = (training: string, selected: boolean) => {
    const trainings = selected
      ? charTrainings.filter((charTraining) => charTraining !== training)
      : [...charTrainings, training];
    updateCharacter({ trainings });
  };

  return (
    <Paper className="wizard-panel flex-wrap justify-between overflow-y-auto">
      {Trainings.map((training) => {
        const selected = charTrainings.some(
          (charTraining) => training.name === charTraining,
        );
        return (
          <WizardCard
            key={training.name}
            className="w-[31%]"
            onClick={() => handleTrainingClick(training.name, selected)}
            selected={selected}
            disabled={checkTrainingDisabled(training)}
            {...training}
          />
        );
      })}
    </Paper>
  );
};
