// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="../public/fonts/Poppins/Poppins-Regular.woff"
            rel="preload"
          />
          <link
            href="../public/fonts/Poppins/Poppins-Bold.woff"
            rel="preload"
          />
          <link href="../public/fonts/Inter/Inter-Regular.woff" rel="preload" />
          <link href="../public/fonts/Inter/Inter-Bold.woff" rel="preload" />
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
