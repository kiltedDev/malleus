import { Homelands } from '@malleus/constants/homelands';
import { useCharacterStore } from '@malleus/store/character.store';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { type FocusEvent } from 'react';

const generateHomelandOptions = () => {
  const { options } = Homelands.reduce(
    (acc, val) => {
      if (acc.currentGroup !== val.group) {
        acc.options.push(<ListSubheader>{val.group}</ListSubheader>);
      }
      return {
        currentGroup: val.group,
        options: [
          ...acc.options,
          <MenuItem key={val.name} value={val.name} title={val.description}>
            {val.name}
          </MenuItem>,
        ],
      };
    },
    { options: [] as JSX.Element[], currentGroup: '' },
  );
  return options;
};

export const HomelandSelect = () => {
  const updateCharacter = useCharacterStore((store) => store.updateCharacter);
  const homeland = useCharacterStore((store) => store.activeChar.homeland);

  const handleHomelandChange = (e: FocusEvent<HTMLInputElement>) => {
    updateCharacter({ homeland: e.target.value });
  };

  return (
    <FormControl>
      <InputLabel shrink id="homeland-select-label">
        Homeland
      </InputLabel>
      <Select
        id="homeland-select"
        labelId="homeland-select-label"
        onChange={handleHomelandChange}
        value={homeland}
        input={<OutlinedInput notched label="Allegiance" />}
        notched
      >
        {generateHomelandOptions()}
      </Select>
    </FormControl>
  );
};
