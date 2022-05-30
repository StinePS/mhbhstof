import Document, { Html, Head, Main, NextScript } from "next/document";

// This custom `Document` is for overwriting fonts on the entire page
// https://nextjs.org/docs/basic-features/font-optimization
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="noindex" />
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Heebo:wght@400;600;700&family=Inter:wght@400;500;600&family=Parisienne&display=swap"
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
