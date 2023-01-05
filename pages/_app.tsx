import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BaseOneLayout from '../components/layouts/BaseOne/BaseOneLayout'
import { Provider } from 'react-redux'
import store from "../redux/store"

import { Bebas_Neue } from "@next/font/google"
const BebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  weight: ["400"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <div className={BebasNeue.className}> */}
        <BaseOneLayout>
          <Component {...pageProps} />
        </BaseOneLayout>
      {/* </div> */}
    </Provider>
  )
}
