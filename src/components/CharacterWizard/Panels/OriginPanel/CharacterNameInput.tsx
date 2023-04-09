import { useCharacterStore } from '@malleus/store/character.store';
import TextField from '@mui/material/TextField';
import { type FocusEvent } from 'react';

export const CharacterNameInput = () => {
  const updateCharacter = useCharacterStore((store) => store.updateCharacter);
  const name = useCharacterStore((store) => store.activeChar.name);

  const handlenameBlur = (e: FocusEvent<HTMLInputElement>) => {
    updateCharacter({ name: e.target.value });
  };

  return (
    <TextField
      onBlur={handlenameBlur}
      InputLabelProps={{ shrink: true }}
      label="Character Name"
      defaultValue={name}
    />
  );
};
