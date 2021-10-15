import Router from 'next/router';
import { Provider } from 'react-redux';
import nProgress from 'nprogress';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from '../src/components/Layout/Layout';
import '../styles/main.scss';
import store from '../src/store/store';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    document.documentElement.classList.add('theme-light');
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </Provider>
  );
}
export default MyApp;
