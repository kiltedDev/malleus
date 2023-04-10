import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';

import { api } from '@malleus/utils/api';

import { Layout } from '@malleus/components/Layout';
import '@malleus/styles/globals.css';
import { theme } from '@malleus/theme';
import { ThemeProvider } from '@mui/material';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Layout>
          {/* <AuthGuard> */}
          <Component {...pageProps} />
          {/* </AuthGuard> */}
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
