import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { type PropsWithChildren } from 'react';

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { data: sessionData } = useSession();

  if (!sessionData?.user) {
    void router.push('/login');
  }
  return <>{children}</>;
};
