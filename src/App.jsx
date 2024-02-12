import { useEffect, useState } from "react";
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";

import { Element } from "react-scroll";

import About from "./components/About/About";
import Projetcs from "./components/Projects/Projetcs";
import Contact from "./components/Contact/Contact";
import Experiences from "./components/Experiences/Experiences";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isDark, setIsDark] = useState(false);
  const isMobileOrTablet =
    /Android|webOS|iPhone|iPad|iPod|Macintosh|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    if (mq.matches || isDark) {
      setIsDark(true);
      document.querySelector("body").classList.add("--dark");
    } else {
      setIsDark(false);
      document.querySelector("body").classList.remove("--dark");
    }

    mq.addEventListener("change", (evt) => setIsDark(evt.matches));
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
        //snap: 1 / (horizontalSections.length - 1),
        end: () => "+=" + document.querySelector("#container").offsetWidth,
      },
    });

    gsap.to(".line", {
      width: "100%",
      stagger: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".line",
        start: "left 90%",
        end: "right 30%",
        scrub: 1,
        markers: true,
        containerAnimation: tween,
      },
    });
  });

  return (
    <>
      {!isMobileOrTablet && <Cursor />}
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main id="container">
        <div
          name="about"
          className="section-element"
          // style={{ background: "red" }}
          id="about"
        >
          <About />
        </div>
        <div
          name="projects"
          className="section-element"
          style={{ background: "orange" }}
          id="projects"
        >
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
