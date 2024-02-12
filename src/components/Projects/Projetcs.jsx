import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Projetcs() {
  const container = useRef();
  // const boxes = gsap.utils.toArray(".project-box");

  // useGSAP(
  //   () => {
  //     gsap.to(boxes, {
  //       scrollTrigger: {
  //         trigger: ".project-box",
  //         start: "top 50%",
  //         end: "top 80%",
  //         scrub: 1,
  //         markers: true,
  //       },
  //       //y: 50,
  //       rotation: 360,
  //       background: "blue",
  //       ease: "elastic",
  //       duration: 2,
  //       containerAnimation: "#projects",
  //     });
  //   },
  //   { scope: container }
  // );

  return (
    <div className="projects-container" ref={container}>
      <article className="project-box one">
        <h3 className="article-name" data-text="TokTok">
          TokTok
        </h3>
      </article>
      <article className="project-box two">
        <h3 className="article-name" data-text="FitnessBuddy">
          FitnessBuddy
        </h3>
      </article>
      <article className="project-box three">
        <h3 className="article-name" data-text="Portfolio">
          Portfolio
        </h3>
      </article>
      <article className="project-box three">
        <h3 className="article-name" data-text="BeGuide">
          BeGuide
        </h3>
      </article>
    </div>
  );
}

export default Projetcs;
