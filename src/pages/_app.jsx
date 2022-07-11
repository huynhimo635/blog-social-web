/* eslint-disable react/jsx-props-no-spreading */
import { Provider as StoreProvider } from 'react-redux'
import { store } from '../store/redux'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
