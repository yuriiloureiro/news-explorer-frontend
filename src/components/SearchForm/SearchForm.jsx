import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setKeyword(event.target.value);
    if (error) {
      setError("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = keyword.trim();
    if (!trimmed) {
      setError("Por favor, insira uma palavra-chave");
      return;
    }
    setError("");
    onSearch(trimmed);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input
        className="search-form__input"
        type="text"
        name="keyword"
        placeholder="Inserir tema"
        value={keyword}
        onChange={handleChange}
        required
      />
      <button className="search-form__button" type="submit">
        Procurar
      </button>
      {error && <span className="search-form__error">{error}</span>}
    </form>
  );
}

export default SearchForm;
