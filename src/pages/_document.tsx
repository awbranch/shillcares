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
          {/*
          TODO: Set default page meta data
          <meta name="description" content="" />
          <meta name="robots" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:title" content="" />
          <meta  property="og:description" content="" />
          */}
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap"
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
