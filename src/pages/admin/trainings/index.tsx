import { api } from '@malleus/utils/api';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { type NextPage } from 'next';
import { useState } from 'react';

const Trainings: NextPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [knave, setKnave] = useState(false);

  const createTraining = api.training.create.useMutation({});

  const onSubmit = () => {
    createTraining.mutate({
      name,
      description,
      knave,
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
        <FormControl>
          <FormControlLabel
            className="text-white"
            control={
              <Checkbox onChange={(_, b) => setKnave(b)} value={knave} />
            }
            label="Knave"
          />
        </FormControl>
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

export default Trainings;
