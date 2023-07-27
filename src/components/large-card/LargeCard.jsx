import React from "react";
import "./LargeCard.css";

export default function LargeCard({ image, title, price, description }) {
  return (
    <div className="large-card-area">
      <div className="card-img">
        <img src={image} />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="card-footer">
        <p>${price}</p>
        <button>Order Now</button>
      </div>
    </div>
  );
}
