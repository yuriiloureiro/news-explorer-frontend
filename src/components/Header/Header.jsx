import "./Header.css";

function Header({ onEntrar }) {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="/">
          NewsExplorer
        </a>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="header__nav-link header__nav-link_active" href="/">
                Início
              </a>
            </li>
          </ul>
          <button
            className="header__auth-button"
            type="button"
            onClick={onEntrar}
          >
            Entrar
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
