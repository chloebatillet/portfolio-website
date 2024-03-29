import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Chip from "../Chip/Chip";
import Transition from "../Transition/Transition";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";


import "./styles.scss";

const folder = "/projectsImages/"
import data from "../../assets/data.json";


function PageProject() {
  let { state } = useLocation();

  const [index, setIndex] = useState(state.id);
  const [project, setProject] = useState(data.projects[state.id]);

  const length = data.projects.length;

  // Reset la position du scroll sur la page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    setProject(data.projects[index]);
  }, [index])

  const nextProject = () => {
    setIndex((prev) => prev === length -1 ? 0 : prev + 1);
  };

  const prevProject = () => {
    setIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };



  return (
    <main className="project-wrapper">
      <section className="project-container">
        <div className="projects-navigation">
          <span className="arrow-icon" onClick={() => prevProject()}>
            <FaAngleLeft />
          </span>
          <span className="arrow-icon" onClick={() => nextProject()}>
            <FaAngleRight />
          </span>
        </div>

        <article className="project-description">
          <aside className="project-gallery">
            <img
              src={folder + project.img}
              alt={`image projet ${project.name}`}
            ></img>
          </aside>
          <div className="project-description">
            <header>
              <h2>{project.name}</h2>
              <p className="type">{project.type}</p>
            </header>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((t) => {
                return <Chip key={t} text={t} />;
              })}
            </div>

            <div className="project-links">
              {project.github && <a
                href={project.github}
                target="_blank"
                title={`Visiter ${project.name} sur Github`}
              >
                <FaGithub />
              </a>}
              {project.website && <a
                href={project.website}
                target="_blank"
                title={`Visiter le site de ${project.name}`}
              >
                <RxExternalLink />
              </a>}
            </div>
          </div>
        </article>
      </section>

      <Transition />
    </main>
  );
}

export default PageProject;
