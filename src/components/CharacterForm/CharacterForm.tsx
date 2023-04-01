import { Homelands } from '@malleus/constants/homelands';
import { api } from '@malleus/utils/api';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useSession } from 'next-auth/react';
import { Controller, useForm } from 'react-hook-form';

export function CharacterForm() {
  const { data: archetypes } = api.archetype.getAll.useQuery();
  const { register, handleSubmit, control, reset } = useForm();

  const { data: sessionData } = useSession();
  const createCharacter = api.character.create.useMutation({});

  const onSubmit = (data: { name: string }) => {
    console.log(data);
    createCharacter.mutate(data);
  };

  return (
    <Form>
      <TextField
        label="Player Name"
        value={sessionData?.user?.name}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField label="Name" onChange={onChange} value={value} />
        )}
      />
      <Controller
        name="homeland"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            freeSolo
            options={Homelands}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Homeland"
                onChange={onChange}
                value={value}
              />
            )}
          />
        )}
      />
      <Controller
        name="archetype"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <InputLabel>Archetype</InputLabel>
            <Select>
              {archetypes &&
                archetypes.map((archetype) => (
                  <MenuItem key={archetype.id}>{archetype.name}</MenuItem>
                ))}
            </Select>
          </FormControl>
        )}
      />
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </Form>
  );
}

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));
