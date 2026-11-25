import "./NewsCard.css";

function NewsCard({
  article,
  variant = "search",
  keyword = "",
  isSaved = false,
  onSaveClick,
  onDeleteClick,
}) {
  const date = new Date(article.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const isSavedVariant = variant === "saved";
  const isSaveDisabled = !isSavedVariant && !isSaved && !article.urlToImage;

  function handleSaveButtonClick() {
    if (isSavedVariant) {
      onDeleteClick(article);
      return;
    }

    if (isSaved) {
      onDeleteClick(article);
    } else {
      onSaveClick(article);
    }
  }

  function getButtonLabel() {
    if (isSavedVariant) {
      return "Remover artigo";
    }
    return isSaved ? "Remover dos artigos salvos" : "Salvar artigo";
  }

  return (
    <article className="card">
      <div className="card__image-wrapper">
        <a
          className="card__link"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {article.urlToImage ? (
            <img
              className="card__image"
              src={article.urlToImage}
              alt={article.title}
            />
          ) : (
            <div className="card__image card__image_empty" />
          )}
        </a>
        {isSavedVariant && <p className="card__keyword">{keyword}</p>}
        <button
          className={`card__save-button${
            isSaved ? " card__save-button_active" : ""
          }`}
          type="button"
          aria-label={getButtonLabel()}
          disabled={isSaveDisabled}
          onClick={handleSaveButtonClick}
        >
          {isSavedVariant ? (
            <svg
              className="card__save-icon"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>
      <a
        className="card__link card__link_content"
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="card__content">
          <p className="card__date">{date}</p>
          <h3 className="card__title">{article.title}</h3>
          <p className="card__text">{article.description || ""}</p>
          <p className="card__source">{article.source.name}</p>
        </div>
      </a>
    </article>
  );
}

export default NewsCard;
