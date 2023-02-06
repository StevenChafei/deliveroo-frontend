import "./App.css";
import logo from "./assets/img/logo.png";
import header from "./assets/img/header-image.jpeg";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo de Deliveroo" />
      </header>

      <div className="bandeau">
        <div className="intro">
          <h1>Le Pain Quotidien - Montorgueil</h1>

          <p>
            Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien
            propose des ingrédients simples et sains, du bon pain, des fruits et
            des légumes frais et de saison issus de l’agriculture biologique.
          </p>

          <img src={header} alt="photo de l'intro" />
        </div>
      </div>
      <section className="content">
        <div className="main">
          <h2>Brunchs</h2>
          <div className="menu"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
