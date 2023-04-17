import React from "react";
import { NavLink } from "react-router-dom";
import "./ProjectCardStyles.css";

const ProjectCard = ({ img, title, text, urlProject }) => {
  return (
    <div className="project-container">
      <div className="project-card">
        <img src={img} alt="porto" />
        <h2 className="project-title">{title}</h2>
        <div className="pro-details">
          <p>{text}</p>
          <div className="pro-btns">
            <NavLink to={urlProject} target="_blank" className="btn">
              View
            </NavLink>
            {/* <NavLink to={"url.com"} className="btn">
              Source
            </NavLink> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
