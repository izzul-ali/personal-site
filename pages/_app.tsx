import { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Izzul Maali</title>
        <meta name="description" content="Izzul Maali's personal site" />
        <meta name="theme-color" content="#cce6ff" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
