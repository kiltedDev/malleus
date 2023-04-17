import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, type PropsWithChildren } from 'react';

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (!router.pathname.includes('auth') && status === 'unauthenticated') {
      void router.push('/auth/login');
    }
  }, [router, status]);

  return <>{children}</>;
};
