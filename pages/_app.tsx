import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BaseOneLayout from '../components/layouts/BaseOne/BaseOneLayout'
import { Provider } from 'react-redux'
import store from "../redux/store"

// import { Bebas_Neue } from "@next/font/google"
// import { Roboto } from "@next/font/google"


export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
        <BaseOneLayout >
          <Component {...pageProps} />
        </BaseOneLayout>
    </Provider>
  )
}
