import Document, { Html, Head, Main, NextScript } from "next/document";

import theme from '../src/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="icon" href="/favicon-32x32.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&family=Rowdies&display=swap"
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
