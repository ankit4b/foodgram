import React from "react";
import "./Header.css";
import images from "../../constants/images";

export default function Header() {
  return (
    <div className="app__header" id="home">
      <div className="app__header__content">
        <h1>People who love to eat are always the best people.</h1>
        <p>
          Indulge in a culinary journey of flavors and discover delightful
          recipes on our Food Haven - Where Taste Meets Imagination!
        </p>
        <div className="app__header__content-explare">
          <button className="active">Explore our Menu</button>
          <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
          </div>
        </div>
      </div>
      <img src={images.ZitiPlate} className="img-1" />
      <img src={images.Carbonara} className="img-2" />
      <img src={images.TortelliniPlate} className="img-3" />
      <img src={images.Tomatoes} className="img-4" />
      <img src={images.Omleat} className="img-5" />
    </div>
  );
}
