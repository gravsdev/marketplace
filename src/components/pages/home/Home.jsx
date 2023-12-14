import useFetch from "../../../hooks/useFetch";
import { SlidingCards } from "../../atoms/sliding-cards/SlidingCards";
import { ArrowRightOutline } from "../../atoms/icons";

import { useState } from "react";
import { useEffect } from "react";

import "./home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const {
    data,
    error: errorProduct,
    loading: loadingProduct,
  } = useFetch("product");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();

      // console.log(jsonData);
      setProducts(jsonData);
    };

    fetchProducts();
  }, []);

  return (
    <div id="root-home">
      <section className="first">
        <div className="section__container">
          <div className="section--content">
            <h1 className="title">
              <span>Completamente construido</span>
              Plantillas de interfaz de usuario
            </h1>

            <p className="text">
              Temas y plantillas únicas para cada presupuesto y cada proyecto.
              Descubra miles de temas, plantillas y productos CMS fáciles de
              personalizar, hechos por desarrolladores de clase mundial.
            </p>

            <a href="#templates" className="simple-button">
              <span>Explorar plantillas</span>
              <ArrowRightOutline />
            </a>
          </div>
        </div>
      </section>

      <section className="second">
        <div className="section__container">
          <div className="section--content">
            <h2 className="head">Plantillas</h2>

            <h3 className="title">
              Plantillas de sitio web listas para producción, diseñadas según
              sus preferencias
            </h3>

            <p className="text">
              Diseñadas a medida para satisfacer sus preferencias, estas
              opciones de sitios web están listas para ser implementadas y
              adaptadas a sus necesidades específicas.
            </p>

            <a href="#templates" className="link">
              <span>Explorar todas las plantillas</span>
              <ArrowRightOutline />
            </a>
          </div>

          <SlidingCards
            className="section--carousel"
            data={products}
            error={errorProduct}
            // loading={loadingProduct}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
