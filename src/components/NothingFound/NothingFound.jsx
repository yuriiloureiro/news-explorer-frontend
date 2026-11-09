import "./NothingFound.css";

function NothingFound() {
  return (
    <section className="nothing-found">
      <h2 className="nothing-found__title">Nada encontrado</h2>
      <p className="nothing-found__text">
        Desculpe, mas nada foi encontrado com esses termos. Tente pesquisar por
        outro tema.
      </p>
    </section>
  );
}

export default NothingFound;
