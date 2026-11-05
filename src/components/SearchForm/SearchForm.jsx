import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        name="keyword"
        placeholder="Inserir tema"
      />
      <button className="search-form__button" type="submit">
        Procurar
      </button>
    </form>
  );
}

export default SearchForm;
