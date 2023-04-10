import { AuthGuard } from '@malleus/components/AuthGuard/AuthGuard';
import { type NextPage } from 'next';
import Characters from './Characters.view';

const Page: NextPage = () => {
  return (
    <AuthGuard>
      <Characters />
    </AuthGuard>
  );
};

export default Page;
