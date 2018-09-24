import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from "react";
import { script } from "@lds/universal-env";

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  /**
   * Each page will be wrapped with this custom content.
   * Source: https://github.com/zeit/next.js/#custom-document
   */
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/html-has-lang
      <html>
        <Head>
          <link
            rel="icon"
            href="https://edge.ldscdn.org/cdn2/common/images/logos/favicon-lds-1.ico"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.styleTags}
          <script dangerouslySetInnerHTML={{ __html: script() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
