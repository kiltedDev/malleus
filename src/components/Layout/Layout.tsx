import Head from 'next/head';
import { Sidebar } from '../Sidebar';

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Malleus</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="warhammer-light.svg"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="warhammer-dark.svg"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Sidebar />
      <main className="main-container">{children}</main>
    </>
  );
}
