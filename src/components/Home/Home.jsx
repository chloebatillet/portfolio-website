import React from "react";

import About from "../About/About";
import Projetcs from "../Projects/Projetcs";
import Contact from "../Contact/Contact";
import Experiences from "../Experiences/Experiences";
import Presentation from "../Presentation/Presentation";

import { motion } from "framer-motion";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useGSAP(() => {
    const horizontalSections = gsap.utils.toArray(".section-element");

    let tween = gsap.to(horizontalSections, {
      xPercent: -100 * (horizontalSections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        scrub: 2,
        invalidateOnRefresh: true,
        //* Interfère avec les liens du menu
        snap: 1 / (horizontalSections.length - 1),
        end: () => "+=" + document.querySelector("#container").offsetWidth,
      },
    });

    // Experiences ------------------------------------
    gsap.to(".line", {
      width: "100%",
      stagger: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".line",
        start: "left 90%",
        end: "right 40%",
        scrub: 1,
        // markers: true,
        containerAnimation: tween,
      },
    });

    // Projects ------------------------------------
    let projects = gsap.utils.toArray(".project-box");

    gsap.to(projects, {
      y: -20,
      stagger: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".projects-container",
        start: "left 90%",
        end: "center 60%",
        scrub: 2,
        containerAnimation: tween,
      },
    });

    // Contacts ---------------------------------------
    // gsap.to(".illustration-svg", {
    //   rotate: 360,
    //   scale: 1,
    //   scrollTrigger: {
    //     trigger: ".illustration-svg",
    //     start: "left 10%",
    //     end: "right 60%",
    //     scrub: 1,
    //     containerAnimation: '#footer',
    //     markers: true,
    //   }
    // });

    // gsap.to(".hand", {
    //   scrollTrigger: {
    //     trigger: ".illustration-svg",
    //     start: "top 65%",
    //     end: "top 50%",
    //     scrub: 1,
    //     containerAnimation: tween,
    //     //markers: true,
    //   },
    //   translateY: -200,
    //   scale: 1,
    // });

    // let width = document.querySelector("#projects").offsetWidth;

    // ScrollTrigger.create({
    //   trigger: "#projects",
    //   start: "top top",
    //   //endTrigger: "bottom bottom",
    //   end: `bottom 50%-=${width}`,
    //   onToggle: (self) => console.log("toggled, isActive:", self.isActive),
    //   onUpdate: (self) => {
    //     console.log(
    //       "progress:",
    //       self.progress.toFixed(3),
    //       "direction:",
    //       self.direction,
    //       "velocity",
    //       self.getVelocity()
    //     );
    //   },
    // });
  });

  return (
    <>
      <main id="container">
        <div name="about" className="section-element" id="about">
          {/* <div className="bubble"></div> */}
          <About />
        </div>
        <div name="about" className="section-element" id="about">
          {/* <div className="bubble"></div> */}
          <Presentation />
        </div>
        <div name="projects" className="section-element" id="projects">
          {/* <h1>Projects</h1> */}
          <Projetcs />
        </div>
        <div
          name="experiences"
          className="section-element"
          style={{
            // background: "blue",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="experiences"
        >
          <Experiences />
        </div>
      </main>
      <div className="" id="footer">
        <Contact />
      </div>

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
    </>
  );
}

export default Home;
