import { api } from '@malleus/utils/api';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { type NextPage } from 'next';
import { useSession } from 'next-auth/react';

const Characters: NextPage = () => {
  const { data: sessionData } = useSession();
  const { data: characters, refetch: refetchCharacters } =
    api.character.getAll.useQuery(undefined, {
      enabled: sessionData?.user !== undefined,
    });
  return (
    <Main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#15162c] to-[#1a0006]">
      <Typography color="primary">Characters</Typography>
      {characters?.map((character) => (
        <Typography color="primary" key={character.id}>
          {character.name}
        </Typography>
      ))}
    </Main>
  );
};

const Main = styled('main')(({ theme }) => ({
  position: 'fixed',
  inset: theme.spacing(0, 0, 0, 8),
}));

export default Characters;
