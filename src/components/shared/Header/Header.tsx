import Logo from '../Logo/Logo';
import MiniCart from '../Nav/MiniCart';
import Nav from '../Nav/Nav';
import SubMenu from '../Nav/SubMenu';

export default function Header(): JSX.Element {
  return (
    <header className="app__header">
      <div className="app__container">
        <article className="flex">
          <Logo />
          <Nav />
          <div className="app__submenu">
            <SubMenu />
            <MiniCart />
          </div>
        </article>
      </div>
    </header>
  );
}
