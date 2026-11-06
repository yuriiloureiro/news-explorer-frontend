import "./NewsCard.css";

function NewsCard({ article }) {
  const date = new Date(article.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="card">
      <div className="card__image-wrapper">
        {article.urlToImage ? (
          <img
            className="card__image"
            src={article.urlToImage}
            alt={article.title}
          />
        ) : (
          <div className="card__image card__image_empty" />
        )}
        <button
          className="card__save-button"
          type="button"
          aria-label="Salvar artigo"
        >
          <svg
            className="card__save-icon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 3h12a1 1 0 0 1 1 1v17l-7-5-7 5V4a1 1 0 0 1 1-1z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="card__content">
        <p className="card__date">{date}</p>
        <h3 className="card__title">{article.title}</h3>
        <p className="card__text">{article.description || ""}</p>
        <p className="card__source">{article.source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
