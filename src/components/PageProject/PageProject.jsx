import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import "./styles.scss";
import Chip from "../Chip/Chip";

import img from "../../assets/giphy.gif";

function PageProject() {
  return (
    <main className="project-wrapper">
      <section className="project-container">
        <div className="projects-navigation">
          <span className="arrow-icon">
            <FaAngleLeft />
          </span>
          <span className="arrow-icon">
            <FaAngleRight />
          </span>
        </div>

        <article className="project-description">
          <header>
            <img src={img}></img>
            <h2>Blablabla</h2>
          </header>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            perferendis nostrum soluta quo mollitia harum deserunt, aliquid
            voluptates? Dignissimos quasi ea maiores provident, magni nemo
            repellat ut expedita corrupti eaque.
          </p>
          <div className="tags">
            <Chip text={"react"} />
            <Chip text={"axios"} />
            <Chip text={"gsap"} />
          </div>

          <div className="project-links">
            <a href="https://github.com/chloebatillet" target="_blank">
              <FaGithub />
            </a>
            <a href="https://github.com/chloebatillet" target="_blank">
              <CgWebsite />
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}

export default PageProject;
