import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const INITIAL_COUNT = 3;
const STEP = 3;

function NewsCardList({ articles }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  return (
    <section className="results">
      <div className="results__container">
        <h2 className="results__title">Procurar resultados</h2>
        <ul className="results__list">
          {visibleArticles.map((article) => (
            <li className="results__item" key={article.url}>
              <NewsCard article={article} />
            </li>
          ))}
        </ul>
        {hasMore && (
          <button
            className="results__more-button"
            type="button"
            onClick={() => setVisibleCount(visibleCount + STEP)}
          >
            Mostrar mais
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
