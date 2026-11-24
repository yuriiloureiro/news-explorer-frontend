import { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NewsCard from "../../components/NewsCard/NewsCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SavedNews.css";

function toCardArticle(saved) {
  return {
    _id: saved._id,
    url: saved.link,
    urlToImage: saved.image,
    title: saved.title,
    description: saved.text,
    publishedAt: saved.date,
    source: { name: saved.source },
  };
}

function getSortedKeywords(articles) {
  const counts = {};
  articles.forEach(({ keyword }) => {
    counts[keyword] = (counts[keyword] || 0) + 1;
  });
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
}

function SavedNews({ savedArticles, onSignIn, onSignOut, onDeleteArticle }) {
  const { currentUser } = useContext(CurrentUserContext);
  const articles = savedArticles || [];

  const keywords = getSortedKeywords(articles);
  const shownKeywords = keywords.length > 3 ? keywords.slice(0, 2) : keywords;
  const hiddenCount = keywords.length - shownKeywords.length;
  const total = articles.length;
  const totalText =
    total === 0
      ? "não tem artigos salvos"
      : `tem ${total} ${total === 1 ? "artigo salvo" : "artigos salvos"}`;

  return (
    <>
      <Header variant="light" onSignIn={onSignIn} onSignOut={onSignOut} />
      <main className="saved-news">
        <div className="saved-news__container">
          <h1 className="saved-news__title">
            {currentUser.name}, você {totalText}
          </h1>
          {keywords.length > 0 && (
            <p className="saved-news__keywords">
              Por palavra-chave:{" "}
              {shownKeywords.map((keyword, index) => (
                <span key={keyword}>
                  <span className="saved-news__keyword">{keyword}</span>
                  {index < shownKeywords.length - 1 ? ", " : ""}
                </span>
              ))}
              {hiddenCount > 0 && `, e mais ${hiddenCount}`}
            </p>
          )}
          {savedArticles && (
            <ul className="saved-news__list">
              {articles.map((article) => (
                <li className="saved-news__item" key={article._id}>
                  <NewsCard
                    article={toCardArticle(article)}
                    variant="saved"
                    keyword={article.keyword}
                    isSaved
                    onDeleteClick={onDeleteArticle}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SavedNews;
