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
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          // markers: true,
        },
        //y: 50,
        rotation: 360,
        background: "blue",
        ease: "none",
        duration: 3,
        containerAnimation: '#projects',
      });

      gsap.to(".two", {
        scrollTrigger: {
          trigger: ".two",
          start: "right 80%",
          end: "left 50%",
          scrub: 1,
          // markers: true,
        },
        //y: -100,
        background: "blue",
        rotation: 360,
        ease: "none",
        duration: 3,
        containerAnimation: "#projects",
      });

      gsap.to(".three", {
        scrollTrigger: {
          trigger: ".three",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          //markers: true,
        },
        //y: 100,
        rotation: 360,
        ease: "none",
        duration: 3,
        background: "blue",
        containerAnimation: "#projects",
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
