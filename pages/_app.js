import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import { wrapper } from './store';
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )

}

export default wrapper.withRedux(MyApp);