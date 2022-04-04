import '../styles/globals.css'
import AuthLayout from '../containers/AuthLayout'

function MyApp({ Component, pageProps, }) {
 
  return (
    <AuthLayout>
      <Component {...pageProps} />
    </AuthLayout>
  )
}

export default MyApp
