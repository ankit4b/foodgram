import React from "react";
import Header from "./components/header/Header";
import FoodMenus from "./components/food-menus/FoodMenus";
import LearnMore from "./components/learn-more/LearnMore";
import Feature from "./components/feature/Feature";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Header></Header>
      <FoodMenus></FoodMenus>
      <LearnMore></LearnMore>
      <Feature></Feature>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}
