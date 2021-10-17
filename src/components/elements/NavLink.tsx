import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
};

function NavLink({
  href,
  exact = false,
  children,
  ...props
}: Props): JSX.Element {
  const { pathname = null } = useRouter() || {};
  const isActive = exact ? pathname === href : pathname?.startsWith(href);

  if (isActive) {
    props.className += ' active';
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

export default NavLink;
