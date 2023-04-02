import { api } from '@malleus/utils/api';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { ArchetypeSelect } from '../ArchetypeSelect';
import { FactionSelect } from '../FactionSelect';
import { HomelandSelect } from '../HomelandSelect';

export function CharacterForm() {
  const [name, setName] = useState('');
  const [homeland, setHomeland] = useState('');
  const [archetypeId, setArchetypeId] = useState<string>('');

  const { data: sessionData } = useSession();
  const createCharacter = api.character.create.useMutation({});

  const onSubmit = () => {
    console.log({
      name,
      homeland,
      archetypeId,
    });
    createCharacter.mutate({ name, homeland, archetypeId });
  };

  return (
    <Form>
      <TextField
        label="Player Name"
        defaultValue={sessionData?.user?.name}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Name"
        InputLabelProps={{ shrink: true }}
        onBlur={({ target }) => setName(target.value)}
        defaultValue={name}
      />
      <HomelandSelect homeland={homeland} setHomeland={setHomeland} />
      <ArchetypeSelect />
      <TextField fullWidth label="notes" multiline rows={4} />
      <FactionSelect faction="" setFaction={console.log} />
      <Button onClick={onSubmit}>Submit</Button>
    </Form>
  );
}

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));
