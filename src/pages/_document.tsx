import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="The mission of the Molly and Ed Shill Cares Foundation is to help all people and animals have a safe place to live and grow. We aim to end the cycle of violence and provide opportunities for success within our communities."
          />
          <meta name="robots" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="http://shillcares.org/" />
          <meta
            property="og:title"
            content="Molly and Ed Shill Cares Foundation"
          />
          <meta
            property="og:description"
            content="The mission of the Molly and Ed Shill Cares Foundation is to help all people and animals have a safe place to live and grow. We aim to end the cycle of violence and provide opportunities for success within our communities."
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Georgia:wght@400&family=Allerta:wght@400&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
