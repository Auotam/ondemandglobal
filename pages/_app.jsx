import { Provider } from 'react-redux'
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import '../styles/index.scss';
import AppProvider from '../context/AppContext';
import Preloader from '../components/preloader';
import SEO from '../components/seo';
import useUserData from '@/utils/UseUserdata';
import "../styles/globals.css"
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>


let persistor = persistStore(store)


function MyApp({ Component, pageProps }) {

  return (
    <>
    <SEO  />
      <Provider store={store}>
        <PersistGate loading={<Preloader/>} persistor={persistor}>
        <AppProvider>
          
          <Component {...pageProps} />
          <ToastContainer />
          
        </AppProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
