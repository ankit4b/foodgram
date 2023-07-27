import React from "react";
import "./LearnMore.css";
import images from "../../constants/images";

export default function LearnMore() {
  return (
    <div className="app_learnmore">
      <div className="app_learnmore-left">
        <img src={images.Pizza} alt="Pizza Image" />
      </div>
      <div className="app_learnmore-right">
        <h2>
          Part of the secret of success is to eat what you like and let the food
          fight it out inside.
        </h2>
        <p>
          "FoodGram: An immersive gastronomic journey awaits you, where
          delectable flavors meet captivating visuals. Discover a symphony of
          tastes, artfully presented on each plate, while capturing
          Instagram-worthy moments of culinary bliss. Experience the ultimate
          dining adventure that delights both foodies and food photographers
          alike.....
        </p>
        <button>Learn More</button>
        <img src={images.HomePizzaSlide} className="app_learnmore-right_img" />
        <div className="arrows">
          <span
            className="fa fa-arrow-circle-o-left icon"
            style={{ color: "gray" }}
          ></span>
          <span className="fa fa-arrow-circle-o-right checked icon"></span>
        </div>
      </div>
    </div>
  );
}
