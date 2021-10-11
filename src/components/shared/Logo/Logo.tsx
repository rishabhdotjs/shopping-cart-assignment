import Link from 'next/link';
import Image from 'next/image';

export default function Logo(): JSX.Element {
  return (
    <Link href="/">
      <a className="app__logo">
        <Image
          src={'/images/logo_2x.png'}
          alt="Sabka Bazaar Compnay Logo"
          layout="fill"
        />
      </a>
    </Link>
  );
}
