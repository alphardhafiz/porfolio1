import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import Img2 from "../assets/img2.webp";
import Img3 from "../assets/img3.webp";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a fullstack developer. I enjoy developing front-end and back-end.
        </p>
        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Img2} alt="gambar" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={Img3} alt="gambar" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
