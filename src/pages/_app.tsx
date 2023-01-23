import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Page from 'components/Page';
import TagManager from 'react-gtm-module';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-P673S3C' });
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Shill Cares Foundation</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default App;
