import { Factions } from '@malleus/constants/factions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useState } from 'react';

type FactionSelectProps = {
  faction: string;
  setFaction(archetypeId: string): void;
};

export const FactionSelect = ({ faction, setFaction }: FactionSelectProps) => {
  const [selected, setSelected] = useState(faction);

  const handleFactionChange = (e: React.FocusEvent<HTMLInputElement>) => {
    setFaction(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel shrink id="faction-select-label">
        Allegiance
      </InputLabel>
      <Select
        id="faction-select"
        labelId="faction-select-label"
        onChange={handleFactionChange}
        value={faction}
        input={<OutlinedInput notched label="Allegiance" />}
        notched
      >
        {Factions.map((faction) => (
          <MenuItem key={faction} value={faction}>
            {faction}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
