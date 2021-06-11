import React from "react";
import { Button } from "./Button";
import "../App.css";
import "../styles/HeroSection.css";
import Video from '../videos/video-1.mp4'

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted />
      <h1>CARLOS DAMIAN</h1>
      <p>Developer</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
