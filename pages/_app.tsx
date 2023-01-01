import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BaseOneLayout from '../components/layouts/BaseOne/BaseOneLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseOneLayout>
      <Component {...pageProps} />
    </BaseOneLayout>
  )
}
