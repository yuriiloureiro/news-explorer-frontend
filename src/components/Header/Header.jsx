import { Link } from "react-router-dom";
import "./Header.css";

function Header({ variant = "dark", onEntrar }) {
  return (
    <header className={`header header_variant_${variant}`}>
      <div className="header__container">
        <Link className="header__logo" to="/">
          NewsExplorer
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                className={`header__nav-link ${
                  variant === "dark" ? "header__nav-link_active" : ""
                }`}
                to="/"
              >
                Início
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className={`header__nav-link ${
                  variant === "light" ? "header__nav-link_active" : ""
                }`}
                to="/saved-news"
              >
                Artigos salvos
              </Link>
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
