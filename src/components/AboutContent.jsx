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
          Hi, I’m <b>Moh Alphard Hafiz Buci</b>, a passionate Front-End Developer with strong
          hands-on experience in building modern, responsive, and user-friendly
          web applications using <b>ReactJS, JavaScript, HTML, and CSS</b>.
        </p>
        <p>
          With a background in Mechanical Engineering and a deep curiosity in
          tech, I’ve transitioned into web development through intensive
          bootcamps and real-world projects. I’ve contributed to several
          full-stack applications—ranging from service tracking systems to
          school management platforms—while continuously learning and adapting
          to new tools and frameworks like{" "}
          <b>NextJS, Express, Node.js, and MongoDB</b>.
        </p>
        <p>
          I thrive in collaborative environments, love solving front-end
          challenges, and always aim to build clean, accessible, and
          high-performing user interfaces. Currently, I’m working as a Software
          Engineer at <b>Halotec Indonesia</b>, where I develop websites that
          align with accessibility standards and modern best practices.
        </p>
        <p>Let’s build something awesome together.</p>
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
