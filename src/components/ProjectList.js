import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  

  const renderProjectItem = projects.map((project) => {
    console.log(project.id)
    console.log("jeena")
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>;
  })

  console.log(renderProjectItem)
 

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {renderProjectItem}
      </div>
    </div>
  );
}

export default ProjectList;
