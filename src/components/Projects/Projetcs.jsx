import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles.scss";


gsap.registerPlugin(useGSAP, ScrollTrigger);

function Projetcs() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".one", {
        scrollTrigger: {
          trigger: ".one",
          start: "top center",
          end: "top 100px",
          scrub: 1,
          // markers: true,
        },
        x: 200,
        rotation: 360,
        ease: "none",
        duration: 3,
      });
    },
    { scope: container }
  );

  return (
    <div className="projects-container" ref={container}>
      <div className="project-box one"></div>
      <div className="project-box two"></div>
      <div className="project-box three"></div>
    </div>
  );
}

export default Projetcs;
