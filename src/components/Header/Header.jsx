import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";

function Header({ variant = "dark", onSignIn, onSignOut }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleSignIn() {
    setIsMenuOpen(false);
    onSignIn();
  }

  function handleSignOut() {
    setIsMenuOpen(false);
    onSignOut();
  }

  return (
    <header className={`header header_variant_${variant}`}>
      <div className="header__container">
        <Link
          className="header__logo"
          to="/"
          onClick={() => setIsMenuOpen(false)}
        >
          NewsExplorer
        </Link>
        <nav className={`header__nav ${isMenuOpen ? "header__nav_open" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                className={`header__nav-link ${
                  variant === "dark" ? "header__nav-link_active" : ""
                }`}
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
            </li>
            {isLoggedIn && (
              <li className="header__nav-item">
                <Link
                  className={`header__nav-link ${
                    variant === "light" ? "header__nav-link_active" : ""
                  }`}
                  to="/saved-news"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Artigos salvos
                </Link>
              </li>
            )}
          </ul>
          {isLoggedIn ? (
            <button
              className="header__auth-button"
              type="button"
              aria-label="Sair"
              onClick={handleSignOut}
            >
              <span className="header__user-name">{currentUser.name}</span>
            </button>
          ) : (
            <button
              className="header__auth-button"
              type="button"
              onClick={handleSignIn}
            >
              Entrar
            </button>
          )}
        </nav>
        <button
          className="header__menu-button"
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="header__menu-line" />
          <span className="header__menu-line" />
        </button>
      </div>
    </header>
  );
}

export default Header;
