import React, { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import { motion } from "framer-motion";

import "./styles.scss";
import Chip from "../Chip/Chip";

import img from "../../assets/giphy.gif";

function PageProject() {
  
  // Reset la position du scroll sur la page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
          <img src={img}></img>
          <div className="project-description">
            <header>
              <h2>Blablabla</h2>
              <p className="type">Application web</p>
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
