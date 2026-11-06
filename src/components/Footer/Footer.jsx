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
          <a
            className="footer__link footer__link_github"
            href="https://github.com/yuriiloureiro"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.2 3.84 1.56.1-.72.4-1.21.72-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.23-5.08 5.5.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
