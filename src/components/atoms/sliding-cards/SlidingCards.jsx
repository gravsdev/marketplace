import { Link } from "react-router-dom";
import { useSlidingCards } from "../../../storage/animations";
import {
  CaretLeftOutline,
  CaretRightOutline,
  SquareWithArrowBottomUpOutline,
} from "../icons";

import "./sliding-cards.css";

export function SlidingCards(props) {
  const { position, cardNumber, setSliderInc, setSliderDec } =
    useSlidingCards();

  const handleImage = (e) => {
    console.log("error de imagen");
    e.target.style.display = "none";
  };

  return (
    <div id="root-carousel" {...props}>
      <div className="carousel--wrapper">
        <div className="carousel-slider">
          <div
            className="slider"
            style={{ transform: `translateX(${position}%)` }}
          >
            {props.data.map((value, index) => (
              <div
                key={value.id}
                id="root-simple-card"
                style={{
                  transform: cardNumber === index ? "scale(1)" : "scale(.9)",
                }}
              >
                <img
                  src={value.image.pat}
                  alt={value.image.name}
                  onError={handleImage}
                />
                <Link to={`store/${value.title}/${value.id}`} className="layer">
                  <span>Ir a la tienda</span>
                  <SquareWithArrowBottomUpOutline />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button
          className="slider-button previous"
          style={{ display: cardNumber === 0 ? "none" : "" }}
          onClick={setSliderDec}
        >
          <CaretLeftOutline className="icon" />
        </button>
        <button
          className="slider-button next"
          style={{
            display: cardNumber === props.data.length - 1 ? "none" : "",
          }}
          onClick={setSliderInc}
        >
          <CaretRightOutline className="icon" />
        </button>
      </div>

      <div className="carousel--content">
        <h4 className="title">
          {props.data[cardNumber]?.title || "Título no disponible"}
        </h4>
        <p className="text">
          {cardNumber + 1} {"/"} {props.data.length}
        </p>
      </div>
    </div>
  );
}
