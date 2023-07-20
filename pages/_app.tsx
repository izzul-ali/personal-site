import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import '@/styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Izzul Ma'ali</title>
      </Head>

      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-PLH9Z740PN"
      />

      <Script
        id="gtag-id"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-PLH9Z740PN');`
        }}
      />

      <Component {...pageProps} />
    </>
  )
}
