import React from "react";
import "./Feature.css";
import images from "../../constants/images";
import LargeCard from "../large-card/LargeCard";

export default function Feature() {
  return (
    <div className="app__feature" id="feature">
      <div className="app__feature-header">
        <h2>Food of the Month</h2>
        <p>
          Embark on a flavorful journey with our 'Food of the Month,' featuring
          seasonal delicacies that celebrate the essence of each season.
        </p>
      </div>
      <div className="cards-section">
        <LargeCard
          image={images.Dunkin}
          title="Dunkin' Munchkins"
          price="8.00"
          description="Delight in glazed goodness with Dunkin' Munchkins—irresistible doughnut holes for moments of sweet bliss."
        ></LargeCard>
        <LargeCard
          image={images.Fish}
          title="Two-Piece Fish Meal"
          price="10.00"
          description="Savor the sea's bounty with our Two-Piece Fish Meal. Dive into crispy, golden perfection paired."
        ></LargeCard>
        <LargeCard
          image={images.Bread}
          title="Little Caesars Crazy Bread"
          price="7.50"
          description="Get crazy for flavor with Little Caesars Crazy Bread. Satisfy your cravings with freshly baked, buttery"
        ></LargeCard>
      </div>
      <div className="app__feature-footer">
        <button>Explore Our Menu </button>
      </div>
    </div>
  );
}
