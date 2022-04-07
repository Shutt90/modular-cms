import '../styles/globals.css'
import AuthLayout from '../containers/AuthLayout'
import Head from 'next/head';

function MyApp({ Component, pageProps, }) {
 
  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Notable&family=Pirata+One&family=Squada+One&family=Teko&display=swap" rel="stylesheet"></link>
    </Head>
    <AuthLayout>
      <Component {...pageProps} />
    </AuthLayout>
    </>
  )
}

export default MyApp
