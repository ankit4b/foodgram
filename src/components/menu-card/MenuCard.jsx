import React from "react";
import "./MenuCard.css";

export default function MenuCard({ image, title, price }) {
  return (
    <div className="card-area">
      <div className="card-img">
        <img src={image} />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>

      <div className="card-footer">
        <p>${price}</p>
        <button>Order Now</button>
      </div>
    </div>
  );
}
