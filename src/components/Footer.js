import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join us in the Scientific Research Encyclopedia of Damietta University
        </p>
        <p className="footer-subscription-text">
          Research Gate is a non-profit organization that aims to spread
          knowledge and culture, and instill a love of reading among students
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="footer-input"
              name="password"
              type="password"
              placeholder="Your Password"
            />
            <Button buttonStyle="btn--outline">login </Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">How it works</Link>
            <Link to="/">Teams</Link>
            <Link to="/">Terms of Service</Link>  
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
          </div>
        </div>
      </div>
      <small class="website-rights">
        All copyrights reserved by Dammitta university © 2020
      </small>
    </div>
  );
}

export default Footer;
