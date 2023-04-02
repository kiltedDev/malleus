import { Archetypes } from '@malleus/constants/Archetypes';
import { useCharacterStore } from '@malleus/store/character.store';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { type ChangeEvent } from 'react';

export const ArchetypeSelect = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const setCharacterAttr = useCharacterStore((store) => store.setCharacterAttr);
  const archetypeId = useCharacterStore(
    (store) => store.activeChar.archetypeId,
  );

  const handleArchetypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacterAttr('archetypeId', e.target.value);
  };

  return (
    <FormControl>
      <InputLabel shrink>Archetype</InputLabel>
      <Select
        onChange={handleArchetypeChange}
        defaultValue={archetypeId}
        notched
        input={<OutlinedInput notched label="Archetype" />}
      >
        {Object.values(Archetypes).map((archetype) => (
          <MenuItem key={archetype.id} value={archetype.id}>
            {archetype.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
