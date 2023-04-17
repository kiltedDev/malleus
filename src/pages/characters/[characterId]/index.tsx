import { AuthGuard } from '@malleus/components/AuthGuard/AuthGuard';
import { type NextPage } from 'next';
import Character from './Character.view';

const CharacterIndex: NextPage = () => {
  return (
    <AuthGuard>
      <Character />
    </AuthGuard>
  );
};

export default CharacterIndex;
