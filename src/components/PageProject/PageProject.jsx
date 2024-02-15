import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import Chip from "../Chip/Chip";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import { motion } from "framer-motion";

import "./styles.scss";

import img from "../../assets/giphy.gif";
import data from "../../assets/data.json";

function PageProject() {
  let { state } = useLocation();

  console.log(state);

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
    console.log(state.id);
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
          <img src={img}></img>
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
              <a href={project.github} target="_blank">
                <FaGithub />
              </a>
              <a href={project.website} target="_blank">
                <CgWebsite />
              </a>
            </div>
          </div>
        </article>
      </section>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </main>
  );
}

export default PageProject;
