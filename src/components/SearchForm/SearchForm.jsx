import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = keyword.trim();
    if (!trimmed) {
      return;
    }
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
      />
      <button className="search-form__button" type="submit">
        Procurar
      </button>
    </form>
  );
}

export default SearchForm;
