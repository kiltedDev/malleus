import { useCharacterStore } from '@malleus/store/character.store';
import TextField from '@mui/material/TextField';
import { type FocusEvent } from 'react';

export const PlayerNameInput = () => {
  const updateCharacter = useCharacterStore((store) => store.updateCharacter);
  const playerName = useCharacterStore((store) => store.activeChar.playerName);

  const handlenameBlur = (e: FocusEvent<HTMLInputElement>) => {
    updateCharacter({ playerName: e.target.value });
  };

  return (
    <TextField
      onBlur={handlenameBlur}
      InputLabelProps={{ shrink: true }}
      label="Player Name"
      defaultValue={playerName}
    />
  );
};
