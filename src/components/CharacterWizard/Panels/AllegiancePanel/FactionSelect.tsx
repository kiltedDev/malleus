import { Factions } from '@malleus/constants/Factions';
import { useCharacterStore } from '@malleus/store/character.store';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { type ChangeEvent } from 'react';

export const FactionSelect = () => {
  const updateCharacter = useCharacterStore((store) => store.updateCharacter);
  const charFaction = useCharacterStore((store) => store.activeChar.faction);
  const charArchetype = useCharacterStore(
    (store) => store.activeChar.archetype,
  );

  const handleFactionChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateCharacter({ faction: e.target.value });
  };

  return (
    <FormControl fullWidth>
      <InputLabel shrink id="faction-select-label">
        Allegiance
      </InputLabel>
      <Select
        id="faction-select"
        labelId="faction-select-label"
        onChange={handleFactionChange}
        fullWidth
        value={charFaction}
        input={<OutlinedInput notched label="Allegiance" />}
        notched
      >
        {Factions.map((faction) => (
          <MenuItem
            key={faction}
            value={faction}
            disabled={
              faction === 'Collegia Arcane' && charArchetype !== 'Scholar'
            }
          >
            {faction}
            {faction === 'Collegia Arcane' &&
              charArchetype !== 'Scholar' &&
              ' - Scholar Required'}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
