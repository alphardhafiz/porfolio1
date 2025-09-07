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
          Hi, I’m <b>Moh Alphard Hafiz Buci</b>, a Front-End Developer with
          solid experience in building modern, responsive, and user-friendly web
          applications using
          <b>ReactJS, JavaScript, HTML, and CSS</b>. I specialize in creating
          clean, accessible, and high-performing user interfaces that align with
          industry best practices.
        </p>
        <p>
          Currently, I’m working as a{" "}
          <b>Frontend Developer at PT. Code Development Indonesia</b>, where I
          develop websites that comply with accessibility standards, using
          technologies like <b>ReactJS and Svelte</b>. Previously, I worked as a
          <b>Software Engineer at Halotec Indonesia</b>, contributing to the
          development of web solutions with a strong focus on performance and
          usability.
        </p>
        <p>
          Beyond my professional work, I’ve also contributed to several
          full-stack projects, including{" "}
          <b>
            school management platforms, service tracking systems, and
            e-commerce applications
          </b>
          . My background in Mechanical Engineering combined with hands-on
          bootcamp training has sharpened my problem-solving skills and
          adaptability across different technologies, including
          <b>NextJS, Node.js, Express, and MongoDB</b>.
        </p>
        <p>
          I thrive in collaborative environments and love taking on front-end
          challenges that push me to grow while delivering value to users. Let’s
          build something awesome together.
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
