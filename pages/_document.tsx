import { Html, Head, NextScript, Main } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#cce6ff" />
        <meta name="description" content="Izzul Maali's personal site" />
        <link rel="icon" type="image/x-icon" href="/icon.ico" />
        <title>Izzul Maali</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
