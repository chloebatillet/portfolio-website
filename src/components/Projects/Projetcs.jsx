import "./styles.scss";

import data from "../../assets/data.json";
import ProjectBox from "./ProjectBox/ProjectBox";


function Projetcs() {
  const projects = data.projects;

  return (
    <div className="projects-container">
      {projects.map((project, index) => {
        return (
          <ProjectBox
            key={project.name}
            name={project.name}
            type={project.type}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default Projetcs;
