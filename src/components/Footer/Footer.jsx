import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © 2021 Supersite, desenvolvido pela News API
        </p>
        <div className="footer__links">
          <a className="footer__link" href="/">
            Home
          </a>
          <a
            className="footer__link"
            href="https://tripleten.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            TripleTen
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
