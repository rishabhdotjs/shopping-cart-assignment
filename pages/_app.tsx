import Router from 'next/router';
import Head from 'next/head';
import { Provider } from 'react-redux';
import nProgress from 'nprogress';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import Layout from '../src/components/Layout/Layout';
import '../styles/main.scss';
import store from '../src/store/store';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>
            Sabka Bazaar :: Online Shopping Site for Mobiles, Electronics,
            Furniture, Grocery, Lifestyle, Books &amp; More. Best Offers!
          </title>
          <meta
            name="Keywords"
            content="Online Shopping in India,online Shopping store,Online Shopping Site,Buy Online,Shop Online,Online Shopping,Flipkart"
          />
          <meta
            name="Description"
            content="India's biggest online store for Mobiles, Fashion (Clothes/Shoes), Electronics, Home Appliances, Books, Jewelry, Home, Furniture, Sporting goods, Beauty &amp; Personal Care, Grocery and more! Find the largest selection from all brands at the lowest prices in India. Payment options - COD, EMI, Credit card, Debit card &amp; more."
          />
        </Head>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </Provider>
  );
}
export default MyApp;
