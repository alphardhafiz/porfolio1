import React from "react";
import { NavLink } from "react-router-dom";
import "./ProjectCardStyles.css";

const ProjectCard = ({ img, title, text, urlProject, urlPreview }) => {
  return (
    <div className="project-container">
      <div className="project-card">
        <img src={img} alt="porto" />
        <h2 className="project-title">{title}</h2>
        <div className="pro-details">
          <p>{text}</p>
          <div className="pro-btns">
            {urlProject && (
              <NavLink to={urlProject} target="_blank" className="btn">
                View
              </NavLink>
            )}
            {/* <NavLink to={"url.com"} className="btn">
              Source
            </NavLink> */}
            {urlPreview && (
              <NavLink to={urlPreview} target="_blank" className="btn">
                Preview
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
