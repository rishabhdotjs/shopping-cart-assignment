import NavLink from '../../elements/NavLink';

export default function Nav(): JSX.Element {
  return (
    <nav className="app__navigation">
      <ul>
        <li>
          <NavLink href="/" exact className="app__link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href="/products" className="app__link">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
