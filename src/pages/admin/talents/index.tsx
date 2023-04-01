import { api } from '@malleus/utils/api';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { type NextPage } from 'next';
import { useState } from 'react';

const Talents: NextPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const createTalent = api.talent.create.useMutation({});

  const onSubmit = () => {
    createTalent.mutate({
      name,
      description,
    });
  };

  return (
    <Main className="malleus-bg flex min-h-screen flex-col items-center justify-center">
      <Form>
        <TextField
          label="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          label="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </Main>
  );
};

const Main = styled('main')(({ theme }) => ({
  position: 'fixed',
  inset: theme.spacing(0, 0, 0, 8),
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export default Talents;
