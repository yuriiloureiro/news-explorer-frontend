import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./SavedNews.css";

function SavedNews({ onEntrar }) {
  return (
    <>
      <Header variant="light" onEntrar={onEntrar} />
      <main className="saved-news">
        <div className="saved-news__container">
          <h1 className="saved-news__title">Artigos salvos</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SavedNews;
