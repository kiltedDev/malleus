import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, type PropsWithChildren } from 'react';

const PublicRoutes = ['/auth/'] as const;

const shallNotPass = (pathname: string) => {
  if (pathname === '/') return false;
  PublicRoutes.forEach((publicRoute) => {
    if (pathname.includes(publicRoute)) return false;
  });
  return true;
};

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    console.log({ pathname: router.pathname });
    if (shallNotPass(router.pathname) && status === 'unauthenticated') {
      void router.push('/');
    }
  }, [router, status]);

  return <>{children}</>;
};
