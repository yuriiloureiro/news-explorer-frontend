import { useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import NewsCardList from "../../components/NewsCardList/NewsCardList";
import Preloader from "../../components/Preloader/Preloader";
import NothingFound from "../../components/NothingFound/NothingFound";
import { searchNews } from "../../utils/newsApi";

function Main({ onEntrar }) {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleSearch(searchKeyword) {
    setKeyword(searchKeyword);
    setHasSearched(true);
    setIsLoading(true);
    setHasError(false);

    searchNews(searchKeyword)
      .then((data) => {
        setArticles(data.articles || []);
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
        <Header variant="dark" onEntrar={onEntrar} />
        <Hero onSearch={handleSearch} />
      </div>
      {renderResults()}
      <About />
      <Footer />
    </>
  );
}

export default Main;
