import { AuthGuard } from '@malleus/components/AuthGuard/AuthGuard';
import { type NextPage } from 'next';
import Character from './Character.view';

const Page: NextPage = () => {
  return (
    <AuthGuard>
      <Character />
    </AuthGuard>
  );
};

export default Page;
