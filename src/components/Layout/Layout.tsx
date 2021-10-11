import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      <main id="main" className="app__container">
        {children}
      </main>
      <Footer />
    </>
  );
}
