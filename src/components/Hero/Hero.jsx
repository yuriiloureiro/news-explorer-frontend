import SearchForm from "../SearchForm/SearchForm";
import "./Hero.css";

function Hero({ onSearch }) {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">O que está acontecendo no mundo?</h1>
        <p className="hero__subtitle">
          Encontre as últimas notícias sobre qualquer tema e salve elas em sua
          conta pessoal
        </p>
        <SearchForm onSearch={onSearch} />
      </div>
    </section>
  );
}

export default Hero;
