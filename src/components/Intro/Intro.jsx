import { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaReact } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles.scss";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".react-icon", {
        rotation: 360,
        duration: 5,
        repeat: -1,
      });

      const tl = gsap.timeline();
      let confettis = gsap.utils.toArray(".react-confettis");
      tl.pause();

      confettis.map((e) => {
        tl.to(
          e,
          {
            x: "random(-250, 250, 1)",
            y: "random(-150, 150, 1)",
            color: `rgb(${Math.random() * 250}, ${Math.random() * 250}, ${
              Math.random() * 250
            })`,
            scale: 3,
            opacity: 0,
            duration: 2,
            stagger: 0.1,
          },
          "<0.2"
        );
      });

      gsap.to(".react-icon", {
        scrollTrigger: {
          trigger: ".titles",
          start: "bottom center",
          end: "bottom center",
          scrub: 1,
          ease: "power3.inOut",
        },
        onStart: () => {
          tl.play();
          tl.restart();
        },
        onComplete: () => {
          tl.play();
          tl.restart();
        },
        rotation: 360,
        duration: 2,
      });
    },
    { scope: container }
  );

  return (
    <div className="intro-container" ref={container}>
      <div className="react-icon-container">
        <div className="confettis">
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
          <FaReact className="react-confettis" />
        </div>
        <FaReact className="react-icon" />
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

export default Intro;
