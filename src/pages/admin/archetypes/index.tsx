import { api } from '@malleus/utils/api';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { type NextPage } from 'next';
import { useState } from 'react';

const Archetypes: NextPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [income, setIncome] = useState(0);
  const [trainingIncrease, setTrainingIncrease] = useState(0);
  const [upkeepIncrease, setUpkeepIncrease] = useState(0);

  const createArchetype = api.archetype.create.useMutation({});

  const onSubmit = () => {
    createArchetype.mutate({
      name,
      description,
      features,
      income,
      trainingIncrease,
      upkeepIncrease,
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
        <TextField
          label="Features"
          onChange={(e) => setFeatures(e.target.value)}
          value={features}
        />
        <TextField
          label="Income"
          type="number"
          onChange={(e) => setIncome(parseInt(e.target.value))}
          value={income}
        />
        <TextField
          label="Training Increase"
          type="number"
          onChange={(e) => setTrainingIncrease(parseInt(e.target.value))}
          value={trainingIncrease}
        />
        <TextField
          label="Upkeep Increase"
          type="number"
          onChange={(e) => setUpkeepIncrease(parseInt(e.target.value))}
          value={upkeepIncrease}
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

export default Archetypes;
