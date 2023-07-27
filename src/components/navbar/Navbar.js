import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrolled(scrollTop > 0);
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        scrolled ? "app__header__nav  navbar-scrolled" : "app__header__nav"
      }
    >
      {/* <nav className="app__header__nav " > */}
      <h3 className="app__header__nav-logo">Foodgram</h3>
      <ul className="app__header__nav-menus_container">
        <li className="app__header__nav-menu">
          <a href="#home">Home</a>
        </li>
        <li className="app__header__nav-menu">
          <a href="#feature">Packages</a>
        </li>
        <li className="app__header__nav-menu">
          <a href="#review">Review</a>
        </li>
        <li className="app__header__nav-menu">
          <a href="#aboutUs">About Us</a>
        </li>
        <li className="app__header__nav-menu active">
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className="sm-nav_section">
        <span className="fa fa-bars" onClick={() => setToggle(true)}></span>
        {toggle && (
          <div className="sm-nav-menus_section">
            <span
              className="fa fa-close"
              onClick={() => setToggle(false)}
            ></span>
            <ul className="app__header__sm-nav-menus_container">
              <li className="app__header__sm-nav-menu">
                <a href="#home">Home</a>
              </li>
              <li className="app__header__sm-nav-menu">
                <a href="#feature">Packages</a>
              </li>
              <li className="app__header__sm-nav-menu">
                <a href="#review">Review</a>
              </li>
              <li className="app__header__sm-nav-menu">
                <a href="#aboutUs">About Us</a>
              </li>
              <li className="app__header__sm-nav-menu active">
                <a href="mailto:ankit404sahu@gmail.com">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
