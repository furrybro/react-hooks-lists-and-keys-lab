import React from "react";

function ProjectItem({ name, about, technologies }) {

  const spanTech = technologies.map((tech, idx) => {
    return <span key={idx}>{tech}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {spanTech}
      </div>
    </div>
  );
}

export default ProjectItem;
