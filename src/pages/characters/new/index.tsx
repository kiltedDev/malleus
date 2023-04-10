import { AuthGuard } from '@malleus/components/AuthGuard/AuthGuard';
import { type NextPage } from 'next';
import NewCharacter from './NewCharacter.view';

const Page: NextPage = () => {
  return (
    <AuthGuard>
      <NewCharacter />
    </AuthGuard>
  );
};

export default Page;
