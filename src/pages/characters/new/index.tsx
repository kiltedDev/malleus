import { CharacterForm } from '@malleus/components/CharacterForm';
import { styled } from '@mui/material/styles';
import { type NextPage } from 'next';

const Characters: NextPage = () => {
  return (
    <Main className="malleus-bg flex min-h-screen flex-col items-center justify-center">
      <CharacterForm />
    </Main>
  );
};

const Main = styled('main')(({ theme }) => ({
  position: 'fixed',
  inset: theme.spacing(0, 0, 0, 8),
}));

export default Characters;
