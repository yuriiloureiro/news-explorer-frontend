import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__circle" />
      <p className="preloader__text">Procurando notícias...</p>
    </div>
  );
}

export default Preloader;
