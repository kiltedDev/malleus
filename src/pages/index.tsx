import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

import { api } from '@malleus/utils/api';
import { Typography } from '@mui/material';
import Image from 'next/image';

const bodyText =
  "Malleus isn't complicated. It's ultimately about a 'not-so-friendly' competition between factions to gather as many glowing green rocks as they can- all while begrudgingly working together to survive a nightmarish onslaught of cultists and monsters. It offers a hardcore experience that endeavors to make sure all of its participants collaborate in having fun. It offers rules light mechanics and brutal, harsh combat set in a fantasy world that just barely resembles earth in the 16th Century.";

const Home: NextPage = () => {
  return (
    <div className="content">
      <Image
        alt="Malleus Hammer Logo"
        src="/malleus-hammer.webp"
        width={200}
        height={400}
      />
      <Typography variant="h2" color="white">
        What is Malleus?
      </Typography>
      <Typography variant="h3" color="red">
        Plunder or Perish in the 16th Century.
      </Typography>
      <div style={{ maxWidth: '80vw', margin: '0 auto' }}>
        <Typography variant="body1" color="white">
          {bodyText}
        </Typography>
      </div>
    </div>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  );
};
