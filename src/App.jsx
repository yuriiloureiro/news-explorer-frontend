import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__hero">
        <Header />
        <Hero />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
