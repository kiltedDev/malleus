import { api } from '@malleus/utils/api';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

type ArchetypeSelectProps = {
  archetypeId: string;
  setArchetypeId(archetypeId: string): void;
};

export const ArchetypeSelect = ({
  archetypeId,
  setArchetypeId,
}: ArchetypeSelectProps) => {
  const { data: archetypes } = api.archetype.getAll.useQuery();
  const handleArchetypeChange = (e: React.FocusEvent<HTMLInputElement>) => {
    setArchetypeId(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel>Archetype</InputLabel>
      <Select
        onChange={handleArchetypeChange}
        defaultValue={archetypeId}
        notched
      >
        {archetypes &&
          archetypes.map((archetype) => (
            <MenuItem key={archetype.id} value={archetype.id}>
              {archetype.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
