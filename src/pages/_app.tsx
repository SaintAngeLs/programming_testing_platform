import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps : { session, ...pageProps } }: AppProps) {
  return(
    <>
      <Head>
        <title>JUDGE ITLOG</title>
        <meta name="description" content="WEB application - cthe component of the educational platfrom to test the solutions of the form of the file or the code integrated." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/JUSTICE.ico" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps}/>
      </SessionProvider>
    </>
       
  )
}
