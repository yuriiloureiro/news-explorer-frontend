import { useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import NewsCardList from "../../components/NewsCardList/NewsCardList";
import Preloader from "../../components/Preloader/Preloader";
import NothingFound from "../../components/NothingFound/NothingFound";
import { searchNews } from "../../utils/newsApi";

const STORAGE_KEY = "news-explorer-search";

function getSavedSearch() {
  try {
    const savedSearch = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return savedSearch && savedSearch.keyword ? savedSearch : null;
  } catch {
    return null;
  }
}

function Main({ onSignIn }) {
  const savedSearch = getSavedSearch();

  const [articles, setArticles] = useState(
    savedSearch ? savedSearch.articles : [],
  );
  const [keyword, setKeyword] = useState(
    savedSearch ? savedSearch.keyword : "",
  );
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(Boolean(savedSearch));
  const [hasError, setHasError] = useState(false);

  function handleSearch(searchKeyword) {
    setKeyword(searchKeyword);
    setHasSearched(true);
    setIsLoading(true);
    setHasError(false);

    searchNews(searchKeyword)
      .then((data) => {
        const results = data.articles || [];
        setArticles(results);
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ keyword: searchKeyword, articles: results }),
        );
      })
      .catch(() => {
        setArticles([]);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function renderResults() {
    if (isLoading) {
      return <Preloader />;
    }

    if (hasError) {
      return <NothingFound />;
    }

    if (hasSearched && articles.length === 0) {
      return <NothingFound />;
    }

    if (articles.length > 0) {
      return <NewsCardList key={keyword} articles={articles} />;
    }

    return null;
  }

  return (
    <>
      <div className="page__hero">
        <Header variant="dark" onSignIn={onSignIn} />
        <Hero onSearch={handleSearch} initialKeyword={keyword} />
      </div>
      {renderResults()}
      <About />
      <Footer />
    </>
  );
}

export default Main;
