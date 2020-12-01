import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Button2 } from "./Button2";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="../videos/video-1.mp4" autoPlay loop muted />
      <h1>
        Do you need <i class="fas fa-thumbs-up"></i> VIDEO?
      </h1>
      <p>Video Creation Company GoooodVIDEO</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Free Download Video
        </Button>
        <Button2
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          See All Works
          <i className="far fa-play-circle" />
        </Button2>
      </div>
    </div>
  );
}

export default HeroSection;
