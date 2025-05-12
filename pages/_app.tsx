import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NavBar from '../components/NavBar'
import '../styles/globals.css'
 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
