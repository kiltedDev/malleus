import { Trappings } from '@malleus/constants/Trappings';
import { useCharacterStore } from '@malleus/store/character.store';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TrappingCard } from './TrappingCard';

export const TrappingPanel = () => {
  const charTrappings = useCharacterStore(
    (store) => store.activeChar.trappings,
  );

  const updateCharacter = useCharacterStore((store) => store.updateCharacter);

  const handleTrappingClick = (trapping: string, selected: boolean) => {
    const trappings = selected
      ? charTrappings.filter((charTrapping) => charTrapping !== trapping)
      : [...charTrappings, trapping];
    updateCharacter({ trappings });
  };

  return (
    <Paper className="wizard-panel flex-wrap justify-between overflow-y-auto">
      <Typography variant="title" fontSize={32} className="w-full text-center">
        Everyone has at least 4 upkeep to spend.
      </Typography>
      {Trappings.map((trapping) => {
        const selected = charTrappings.some(
          (charTrapping) => trapping.name === charTrapping,
        );
        return (
          <TrappingCard
            className="w-[31%]"
            key={trapping.name}
            onClick={() => handleTrappingClick(trapping.name, selected)}
            selected={selected}
            {...trapping}
          />
        );
      })}
    </Paper>
  );
};
