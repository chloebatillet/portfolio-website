import { useEffect, useState } from "react";
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";

import About from "./components/About/About";
import Projetcs from "./components/Projects/Projetcs";
import Contact from "./components/Contact/Contact";
import Experiences from "./components/Experiences/Experiences";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Presentation from "./components/Presentation/Presentation";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // const [isDark, setIsDark] = useState(
  //   JSON.parse(localStorage.getItem("darkMode"))
  // );
  const [isDark, setIsDark] = useState(localStorage.getItem("darkMode"));
  const isMobileOrTablet =
    /Android|webOS|iPhone|iPad|iPod|Macintosh|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  console.log(isDark);

  useEffect(() => {
    /**
     *
     * A la première visite :
     * - regarde si une donnée est présente dans le localStorage
     * - sinon prend la valeur dans les préférences utilisateurs
     * + écouteurs d'événements pour s'adapter aux pref utilisateurs
     *
     */

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    mq.addEventListener("change", (evt) => setIsDark(evt.matches));

    if (localStorage.getItem("darkMode")) {
      setIsDark(JSON.parse(localStorage.getItem("darkMode")));
    } else if (mq.matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // gestion du toggle de la class dark
    if (isDark) {
      document.querySelector("body").classList.add("--dark");
      localStorage.setItem("darkMode", true);
    } else {
      document.querySelector("body").classList.remove("--dark");
      localStorage.setItem("darkMode", false);
    }
  }, [isDark]);

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
      {!isMobileOrTablet && <Cursor />}
      <Header isDark={isDark} setIsDark={setIsDark} />
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
        {/* <div
          name="contacts"
          className="section-element"
          style={{ background: "orange" }}
          id="contacts"
        >
          {/* <Contact /> */}
        {/* </div> */}
      </main>
      <div
        className=""
        //style={{ background: "pink", width: "100vw", height: "100vh", zIndex: "1"}}
        id="footer"
      >
        <Contact />
      </div>
    </>
  );
}

export default App;
