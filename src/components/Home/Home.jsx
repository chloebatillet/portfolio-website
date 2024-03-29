import React from "react";

import Section from "../Section/Section";
import Intro from "../Intro/Intro";
import Presentation from "../Presentation/Presentation";
import Projetcs from "../Projects/Projetcs";
import Experiences from "../Experiences/Experiences";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Transition from "../Transition/Transition";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Home() {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1000px)", () => {
      const horizontalSections = gsap.utils.toArray(
        ".section-element.--horizontal"
      );

      let tween = gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#horizontal-container",
          pin: true,
          scrub: 2,
          invalidateOnRefresh: true,
          //* Interfère avec les liens du menu
          //* Interfère avec la navigation horizontale
          //snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + document.querySelector("#horizontal-container").offsetWidth,
        },
      });

      // Horizontal navigation ------------------------------------
      let maxWidth = 0;

      const getMaxWidth = () => {
        maxWidth = 0;
        horizontalSections.forEach((section) => {
          maxWidth += section.offsetWidth;
        });
      };
      getMaxWidth();
      ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

      let getPosition = getScrollLookup(".section-element.--horizontal", {
        start: "top top",
        containerAnimation: tween,
      });

      let menuLinks = gsap.utils.toArray("a.word");
      menuLinks.pop(); // remove <Contact /> which is not in tween

      menuLinks.forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          gsap.to(window, {
            scrollTo: getPosition(el.getAttribute("href")),
            overwrite: "auto",
            duration: 0.3,
          });
        });
      });

      function getScrollLookup(
        targets,
        { start, pinnedContainer, containerAnimation }
      ) {
        let triggers = gsap.utils.toArray(targets).map((el) =>
            ScrollTrigger.create({
              trigger: el,
              start: start || "top top",
              pinnedContainer: pinnedContainer,
              refreshPriority: -10,
              containerAnimation: containerAnimation,
            })
          ),
          st = containerAnimation && containerAnimation.scrollTrigger;
        return (target) => {
          let t = gsap.utils.toArray(target)[0],
            i = triggers.length;
          while (i-- && triggers[i].trigger !== t) {}
          if (i < 0) {
            return console.warn("target not found", target);
          }
          return containerAnimation
            ? st.start +
                (triggers[i].start / containerAnimation.duration()) *
                  (st.end - st.start)
            : triggers[i].start;
        };
      }

      // Highlights menu ------------------------------------
      let activableSections = horizontalSections;
      activableSections.shift();

      activableSections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "left 70%",
          end: "right 70%",
          containerAnimation: tween,
          onToggle: (self) => {
            const el = document.querySelectorAll(`a.word.${section.id}`);
            if (self.isActive) {
              el.forEach((e) => {
                e.classList.add("is-active");
              });
            } else {
              el.forEach((e) => {
                e.classList.remove("is-active");
              });
            }
          },
        });
      });

      // Experiences ------------------------------------
      gsap.to(".line", {
        width: "100%",
        stagger: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".line",
          start: "center 100%",
          end: "center 60%",
          scrub: 1,
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
      gsap.to(".menu-fixed-container", {
        "--menu-opacity": 0,
        zIndex: -1,
        scrollTrigger: {
          trigger: ".contact-section-wrapper",
          start: "top 100%",
          end: "top 100%",
          scrub: true,
        },
      });

      gsap.to(".menu-fixed", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".contact-section-wrapper",
          start: "top 100%",
          end: "top 100%",
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
          trigger: "#contacts",
          start: "top 100%",
          end: "top 90%",
          scrub: true,
        },
      });

      // backdrop-blur
      gsap.to(".top-bar", {
        "--menu-blur": 0,
        scrollTrigger: {
          trigger: "#contacts",
          start: "top 25%",
          end: "top 100%",
          scrub: true,
        },
      });
    });
  });

  return (
    <>
      <main id="container">
        <div id="horizontal-container">
          <Section id={"blabla"} content={<Intro />} />
          <Section
            id={"about"}
            title={"about"}
            index={"00"}
            content={<Presentation />}
          />
          <Section
            id={"projects"}
            title={"projets"}
            index={"01"}
            content={<Projetcs />}
          />
          <Section
            id={"experiences"}
            title={"experiences"}
            index={"02"}
            content={<Experiences />}
          />
        </div>

        <section className="section-element" id="contacts">
          <Contact />
        </section>

      </main>
      <Footer />
      
      <Transition />
    </>
  );
}

export default Home;
