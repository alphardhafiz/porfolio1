import "./WorkCardStyles.css";

import React from "react";
import ProjectCard from "./ProjectCard";

import ProjectCardData from "./WorkCardData";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      {ProjectCardData.map((d, i) => (
        <ProjectCard
          key={i}
          img={d.img}
          title={d.title}
          text={d.text}
          urlProject={d.urlProject}
        />
      ))}
    </div>
  );
};

export default WorkCard;
