import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="app__footer" id="aboutUs">
      <div className="app__footer__section">
        <div className="app__footer__section-1">
          <h3 className="footer-title">Foodgram</h3>
          <p className="footer-text">
            FoodGram: Savor the essence of delightful flavors and capture
            moments of culinary joy at our restaurant!
          </p>
          <div className="sec-1_icons">
            <span class="fa fa-facebook "></span>
            <span class="fa fa-twitter "></span>
            <span class="fa fa-instagram "></span>
          </div>
        </div>
        {/* <div className="bar" /> */}
        <div className="app__footer__section-2">
          <h3 className="footer-title">Quick links</h3>
          <div className="footer-list">
            <p className="footer-text">Home</p>
            <p className="footer-text">Packages</p>
            <p className="footer-text">Review</p>
            <p className="footer-text">About Us</p>
            <p className="footer-text">Contact Us</p>
          </div>
        </div>
        {/* <div className="bar" /> */}
        <div className="app__footer__section-3">
          <h3 className="footer-title">Contact Us</h3>
          <div className="footer-list">
            <table>
              <tr>
                <td className="icon-td">
                  <span class="fa fa-phone "></span>
                </td>
                <td>
                  <span className="footer-text">(+91) 70089 34211</span>
                </td>
              </tr>
              <tr>
                <td className="icon-td">
                  <span class="fa fa-envelope "></span>
                </td>
                <td>
                  <span className="footer-text">ankit404sahu@gmail.com</span>
                </td>
              </tr>
              <tr>
                <td className="icon-td">
                  <span class="fa fa-map-marker "></span>
                </td>
                <td>
                  <span className="footer-text">Balangir, Odisha, India</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <hr />
      <p>© Copyright 2023. All rights reserved.</p>
    </div>
  );
}
