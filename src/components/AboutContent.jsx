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
          My name is Moh Alphard Hafiz Buci, a graduate of Bachelor's degree in
          Mechanical Engineering from the University of Riau. I am passionate
          about pursuing a career in the field of Front End Development. I
          possess a strong background in Front End development, along with a
          deep interest in creating captivating and responsive user interfaces.
        </p>
        <p>
          During my participation in a bootcamp, I have honed my skills in
          working on various projects related to the needs of a Front End
          Developer. I have successfully completed projects, which have enriched
          my experience and technical skills. I am proficient in working with
          various technologies and tools commonly used in the industry, such as
          HTML, CSS, JavaScript, and popular frameworks like ReactJS.
        </p>
        <p>
          Currently, I am dedicated to deepening my knowledge and skills as a
          Front End Developer. I keep up-to-date with the latest advancements in
          the industry and strive to enhance my abilities through self-learning
          and online resources. I believe that having a strong foundation in
          Front End Development will enable me to become a competent and
          effective professional in creating exceptional user experiences.
        </p>
        <p>
          I possess strong analytical and problem-solving skills, as well as a
          collaborative team spirit. I enjoy working with teams to achieve
          shared goals and contribute positively in a dynamic work environment.
          I also have excellent communication skills and adapt quickly to
          technological changes and project requirements.
        </p>
        <p>
          I am highly enthusiastic and ready to challenge myself in the world of
          Front End Development. I hope to leverage my knowledge and skills to
          contribute to an innovative team and help create outstanding user
          experiences.
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
