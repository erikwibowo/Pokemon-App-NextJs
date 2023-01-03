import '../styles/globals.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Comfortaa } from '@next/font/google'

const comfortaa = Comfortaa({ subsets: ['latin'] })

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return <main className={comfortaa.className}>
    <Component {...pageProps} />
  </main>
}
