import { useEffect, useState } from "react";

import Menu from "../Menu/Menu";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { LuSunDim, LuMoon } from "react-icons/lu";

import "./styles.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header({ isDark, setIsDark }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    return () => {
      //console.log(isDark);
    };
  }, [isDark]);

  return (
    <header>
      <div className="top-bar">
        <div className="top-bar-content">
          <div
            className="logo"
            data-text="Chloé B."
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Chloé B.
          </div>

          <div style={{ display: "flex", gap: "24px" }}>
            {isDark ? (
              <LuSunDim
                fontSize={"1.5rem"}
                onClick={() => {
                  setIsDark(!isDark);
                }}
              />
            ) : (
              <LuMoon
                fontSize={"1.5rem"}
                onClick={() => {
                  setIsDark(!isDark);
                }}
              />
            )}

            <div
              className={menuIsOpen ? "menu-burger is-open" : "menu-burger"}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <div className="menu-burger--line"></div>
              <div className="menu-burger--line"></div>
              <div className="menu-burger--line"></div>
            </div>
          </div>
        </div>
        <div className={menuIsOpen ? "menu-fullpage is-open" : "menu-fullpage"}>
          <div className="menu-container">
            <Menu setMenuIsOpen={setMenuIsOpen} />
          </div>
        </div>
      </div>

      <div className="menu-fixed-container">
        <div className="menu-fixed">
          <Menu setMenuIsOpen={setMenuIsOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
