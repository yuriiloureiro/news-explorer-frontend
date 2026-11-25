import "./NothingFound.css";

function NothingFound({ hasError = false }) {
  return (
    <section className="nothing-found">
      <h2 className="nothing-found__title">
        {hasError ? "Algo deu errado" : "Nada encontrado"}
      </h2>
      <p className="nothing-found__text">
        {hasError
          ? "Desculpe, ocorreu um erro durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar indisponível. Tente novamente mais tarde."
          : "Desculpe, mas nada foi encontrado com esses termos. Tente pesquisar por outro tema."}
      </p>
    </section>
  );
}

export default NothingFound;
