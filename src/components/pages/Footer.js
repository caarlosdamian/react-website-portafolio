import React from "react";
import "../../styles/Footer.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join this Adventure with me
        </p>

        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">sent</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About me</h2>
            <Link to="-aboutme">About me</Link>
          </div>
          <div class="footer-link-items">
            <h2>Portafolio</h2>
            <Link to="/portafolio">Portafolio</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Carlos
            </Link>
          </div>
          <small class="website-rights">&copy;2021 Carlos Damian</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
