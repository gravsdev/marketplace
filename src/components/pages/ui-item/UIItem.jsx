import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ui-item.css";

function UIItem() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // window.scrollTo(0, 0);
    setProduct(data.find((value) => value.id === id));
  }, [data, id]);

  return (
    <div id="root-ui-item">
      <section className="first">
        <div className="section__container">
          <div className="section--content">
            <h2 className="head">{product?.category}</h2>

            <h1 className="title">{product?.title}</h1>

            <p className="text">{product?.description}</p>

            <div className="options">
              <a href="#" className="simple-button outline">
                <span>Vista previa</span>
              </a>

              <a href="#" className="simple-button">
                <span>Comprar ahora</span>
              </a>
            </div>
          </div>

          <div className="section--banner">
            <img src={product?.image.path} alt={product?.image.name} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default UIItem;
