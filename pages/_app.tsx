import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Layout from '../src/components/Layout/Layout';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    document.documentElement.classList.add('theme-light');
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
