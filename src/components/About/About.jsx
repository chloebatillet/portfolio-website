import { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".flower", {
        scrollTrigger: {
          trigger: ".flower",
          start: "top center",
          end: "top 100px",
          scrub: 1,
          // markers: true,
        },
        rotation: 360,
        ease: "power3.in",
        duration: 3,
      });
    },
    { scope: container }
  );

  return (
    <div className="about-container" ref={container}>
      <div className="flower">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="titles">
        <h1 className="main-title">
          Hello, je suis Chloé, <br /> développeuse fullstack JavaScript
        </h1>
        <h2>Je conçois et développe des applications pour le web</h2>
      </div>

      <div className="scroll-indicator">
        scroll{" "}
        <span className="icon">
          <IoIosArrowForward />
          <IoIosArrowForward />
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
}

export default About;
