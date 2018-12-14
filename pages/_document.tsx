import Document, { Head, Main, NextScript } from 'next/document';
import * as React from 'react';
import blueprintCss from '@blueprintjs/core/lib/css/blueprint.css';

import { SITE_DESCRIPTION, SITE_IMAGE, SITE_NAME, SITE_TITLE } from '../src/constants/env';

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await Document.getInitialProps(...args)
    const { req, renderPage } = args[0]
    const page = renderPage()

    return { ...documentProps, ...page }
  }

  // tslint:disable:max-line-length
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />
          <meta name="format-detection" content="telephone=no, address=no, email=no" />
          <link rel="shortcut icon" href="../static/images/logo.ico" />
          <style dangerouslySetInnerHTML={{ __html: blueprintCss }} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries"></script>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
