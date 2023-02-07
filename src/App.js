import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./components/Category";
import logo from "./assets/img/logo.png";

function App() {
  //State qui me sert à récupérer la data
  const [data, setData] = useState();
  // State qui me sert à savoir si la data a été récupérée
  const [isLoading, setIsLoadding] = useState(true);

  // La callback de mon useEffect va être appelée une seule fois au premier rendu de mon composant
  useEffect(() => {
    const fetchData = async () => {
      // Ma requête peut échouer donc je la place dans un try catch
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--rpqmwt7bcj27.code.run/"
        );
        console.log(response.data);
        // Je stocke le résultat dans data
        setData(response.data);
        // Je fais paser isLoading à false
        setIsLoadding(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    // J'appelle ma fonction
    fetchData();
  }, []);

  // Tant que isLoading vaut true, j'affiche un indicateur de chargement
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="App">
      <header>
        <img src={logo} alt="logo deliveroo" />
      </header>
      <div className="hero-container container">
        <div>
          <h1>{data.restaurant.name}</h1>
          <p className="hero-description">{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} alt="meal" />
      </div>
      <main>
        <div className="container main-part">
          <section className="left-part">
            {/* Je parcours le tableau categories, chacuns des objets de ce tableau sera mentionnable sous le nom category */}
            {data.categories.map((category, index) => {
              // Si ma catégorie contient des plats, j'affiche un composant Category
              if (category.meals.length !== 0) {
                // Je donne l'objet représentant une categorie en props à mon composant
                return <Category category={category} key={index} />;
              } else {
                // Sinon rien
                return null;
              }
            })}
          </section>
          <section className="right-part">Panier</section>
        </div>
      </main>
    </div>
  );
}

export default App;
