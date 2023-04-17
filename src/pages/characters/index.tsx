import { AuthGuard } from '@malleus/components/AuthGuard/AuthGuard';
import { type NextPage } from 'next';
import Characters from './Characters.view';

const CharactersIndex: NextPage = () => {
  return (
    <AuthGuard>
      <Characters />
    </AuthGuard>
  );
};

export default CharactersIndex;
