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
          I am <b>Moh Alphard Hafiz Buci</b>, a Bachelor of Mechanical Engineering from
          Riau University. My passion has led me to pursue a career in <b>Front-End
          Web Development</b>, where I have successfully developed multiple
          projects. Currently, I am a <b>Software Engineer at PT. Halotec
          Indonesia</b>, focusing on creating accessible websites using <b>JavaScript,
          HTML, CSS, and React.js</b>. I consistently stay up-to-date with industry
          advancements and am committed to enhancing my skills through
          self-learning and online courses.
        </p>
        <p>
          In addition to my full-time work, I have completed several boot camps
          and training programs, including the <b>Juara Coding Bootcamp</b> and
          <b>Harisenin.com Bootcamp</b>, which have strengthened my expertise in <b>MERN
          Stack, SQL</b>, and various front-end technologies.
        </p>
        <p>
          With a detail-oriented mindset, I am eager for further opportunities
          to grow as a <b>Front-End Developer</b> and contribute to innovative web
          solutions.
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
