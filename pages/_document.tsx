import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/images/apple-touch-icon.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/images/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/images/favicon-16x16.png'
            />
            <link rel='manifest' href='/images/site.webmanifest' />
            <link
              rel='mask-icon'
              href='/images/safari-pinned-tab.svg'
              color='#5bbad5'
            />
            <meta name='msapplication-TileColor' content='#da532c' />
            <meta name='theme-color' content='#ffffff' />

            <link rel='stylesheet' href='https://use.typekit.net/sml5pan.css' />

            <meta charSet='UTF-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1.0'
            />
            <title>Flowser: FLOW GUI BROWSER</title>
          </Head>

          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
