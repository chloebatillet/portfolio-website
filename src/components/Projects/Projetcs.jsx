import "./styles.scss";

import data from "../../assets/data.json";
import ProjectBox from "./ProjectBox/ProjectBox";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projetcs() {
  const projects = data.projects;

  useGSAP(() => {
    let projectsEl = gsap.utils.toArray(".project-box");

    gsap.to(projectsEl, {
      x: 0,
      stagger: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".projects-container",
        start: "center 90%",
        end: "center 60%",
        scrub: 2,
      },
    });
  });

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
