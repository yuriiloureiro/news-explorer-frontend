import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NewsCard from "../../components/NewsCard/NewsCard";
import { mockArticles } from "../../utils/data";
import "./SavedNews.css";

function SavedNews({ onSignIn }) {
  return (
    <>
      <Header variant="light" onSignIn={onSignIn} />
      <main className="saved-news">
        <div className="saved-news__container">
          <h1 className="saved-news__title">Artigos salvos</h1>
          <p className="saved-news__keywords">
            Por palavra-chave:{" "}
            <span className="saved-news__keyword">natureza</span>,{" "}
            <span className="saved-news__keyword">trilhas</span>
          </p>
          <ul className="saved-news__list">
            {mockArticles.map((article) => (
              <li className="saved-news__item" key={article.url}>
                <NewsCard article={article} />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SavedNews;
