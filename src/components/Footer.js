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
        {/* <div className="input-areas">
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

            </form>
          </div> */}
          <Button buttonStyle="btn--primary" buttonSize="btn--large">Subscribe </Button>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">How it works</Link>
            <Link to="/about">Teams</Link>
            <Link to="/about">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/about">Contact</Link>
            <Link to="/about">Support</Link>
            <Link to="/about">Destinations</Link>
          </div>
        </div>
      </div>
      <small class="website-rights">
        All copyrights reserved by Dammitta university © 2022
      </small>
    </div>
  );
}

export default Footer;
