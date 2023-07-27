import React, { useState } from "react";
import "./Testimonial.css";
import images from "../../constants/images";
import testimonials from "../../static/testimonial.json";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log("testimonials : ", testimonials);

  const length = testimonials.length;

  const changeIndex = (action) => {
    if (action === "prev") {
      if (activeIndex === 0) {
        setActiveIndex(length - 1);
      } else {
        setActiveIndex((prevIndex) => prevIndex - 1);
      }
    } else if (action === "next") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % length);
    }
  };

  return (
    <div className="app__testimonial" id="review">
      <img src={images.Semicolon} className="start" />
      <img src={images.Semicolon} className="end" />
      <div className="app__testimonial__title">
        <h2>What our popular customers are saying</h2>
      </div>
      <div className="app__testimonial__body">
        <div className="app__testimonial__body-user">
          <div className="app__testimonial__body-user_img">
            <img src={testimonials[activeIndex].image} />
          </div>
          <div className="app__testimonial__body-user_details">
            <h4>{testimonials[activeIndex].name}</h4>
            <p>{testimonials[activeIndex].designation}</p>
          </div>
        </div>
        <div className="app__testimonial__body-testimonial">
          <p>{testimonials[activeIndex].review}</p>
        </div>
        <div className="app__testimonial__body-rating">
          {renderStars(testimonials[activeIndex].rating)}
          {/* <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span> */}
        </div>
      </div>

      {/* <div className="app__testimonial__body">
        <div className="app__testimonial__body-user">
          <div className="app__testimonial__body-user_img">
            <img src={images.User} />
          </div>
          <div className="app__testimonial__body-user_details">
            <h4>Serhiy Hipsky</h4>
            <p>CEO Universal</p>
          </div>
        </div>
        <div className="app__testimonial__body-testimonial">
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system idea of denouncing pleasure ...But I must
            explain to you how all this mistaken idea of denouncing pleasure and
            praising pain was born and I will give you a complete account of the
            system idea of denouncing pleasure ...
          </p>
        </div>
        <div className="app__testimonial__body-rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
      </div> */}
      <div>
        <div className="arrows">
          <span
            className="fa fa-arrow-circle-o-left icon"
            style={{ color: "gray" }}
            onClick={() => changeIndex("prev")}
          ></span>
          <span
            className="fa fa-arrow-circle-o-right checked icon"
            onClick={() => changeIndex("next")}
          ></span>
        </div>
      </div>
    </div>
  );
}

const renderStars = (rating) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const remainder = rating - filledStars;

  const stars = [];

  // Filled stars
  for (let i = 0; i < filledStars; i++) {
    stars.push(<span key={`star-${i}`} className="fa fa-star checked"></span>);
  }

  // Half star (if applicable)
  if (remainder >= 0.5) {
    stars.push(
      <span key={`star-half`} className="fa fa-star-half checked"></span>
    );
  }

  // Empty stars
  const remainingStars = totalStars - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<span key={`star-empty-${i}`} className="fa fa-star"></span>);
  }

  return stars;
};
