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
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1000px)", () => {
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
          start: "center 100%",
          end: "center 60%",
          scrub: 2,
          containerAnimation: tween,
        },
      });

      // ::before menu-fixed-container wave disappear
      const bk = document.querySelector("#container").offsetWidth;
      console.log(bk);

      gsap.to(".menu-fixed-container", {
        "--menu-opacity": 0,
        zIndex: -1,
        scrollTrigger: {
          trigger: ".contact-section-wrapper",
          start: "top 100%",
          end: "top 100%",
          markers: true,
          scrub: true,
        },
      });

      gsap.to(".menu-fixed", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".contact-section-wrapper",
          start: "top 100%",
          end: "top 100%",
          markers: true,
          scrub: 1,
        },
      });
    });

    mm.add("(max-width: 999px)", () => {
      // Projects ------------------------------------
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
        },
      });

      // ::before menu-fixed-container wave disappear
      gsap.to(".menu-fixed-container", {
        "--menu-opacity": 0,
        scrollTrigger: {
          trigger: "#footer",
          start: "top 100%",
          end: "top 90%",
          scrub: true,
        },
      });
    });

    // // Experiences ------------------------------------
    // gsap.to(".line", {
    //   width: "100%",
    //   stagger: 0.2,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".line",
    //     start: "left 90%",
    //     end: "right 40%",
    //     scrub: 1,
    //     // markers: true,
    //     containerAnimation: tween,
    //   },
    // });

    // // Projects ------------------------------------
    // let projects = gsap.utils.toArray(".project-box");

    // gsap.to(projects, {
    //   y: -20,
    //   stagger: 0.2,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".projects-container",
    //     start: "left 90%",
    //     end: "center 60%",
    //     scrub: 2,
    //     containerAnimation: tween,
    //   },
    // });

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
  });

  return (
    <>
      <main id="container">
        <div name="about" className="section-element" id="about">
          <About />
        </div>
        <div name="about" className="section-element" id="presentation">
          <h2 className="section-title">
            <span className="index">00.</span>Qui suis-je ?
          </h2>
          <Presentation />
        </div>
        <div name="projects" className="section-element" id="projects">
          <h2 className="section-title">
            <span className="index">01.</span>Projets
          </h2>
          <Projetcs />
        </div>
        <div
          name="experiences"
          className="section-element"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="experiences"
        >
          <h2 className="section-title">
            <span className="index">02.</span>Expériences
          </h2>
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
