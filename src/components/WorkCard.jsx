import "./WorkCardStyles.css";

import React from "react";
import ProjectCard from "./ProjectCard";

import ProjectCardData from "./WorkCardData";

const WorkCard = () => {
  return (
    <>
      <h1 className="project-heading">Projects</h1>
      <div className="work-container">
        {ProjectCardData.map((d, i) => (
          <ProjectCard
            key={i}
            img={d.img}
            title={d.title}
            text={d.text}
            urlProject={d.urlProject}
            urlPreview={d.urlPreview}
          />
        ))}
      </div>
    </>
  );
};

export default WorkCard;
