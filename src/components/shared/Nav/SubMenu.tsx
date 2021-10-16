import NavLink from '../../elements/NavLink';

export default function SubMenu(): JSX.Element {
  return (
    <nav className="app__submenu__login">
      <ul>
        <li>
          <NavLink href="/login" className="app__link">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink href="/register" className="app__link">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
