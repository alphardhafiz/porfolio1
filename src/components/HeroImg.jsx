import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/intro-bg.webp";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="IntroImg" className="into-img" />
      </div>
      <div className="content">
        <p>HI, I'M Moh Alphard Hafiz Buci</p>
        <h1>Full Stack Web Developoer</h1>
        <div>
          <Link to={"/project"} className="btn">
            Projects
          </Link>
          <Link to={"/contact"} className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
