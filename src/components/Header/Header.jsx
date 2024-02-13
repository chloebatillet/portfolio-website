import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import Menu from "../Menu/Menu";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { LuSunDim, LuMoon } from "react-icons/lu";

import "./styles.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header({ isDark, setIsDark }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname.includes("projet"));

  return (
    <header>
      <div className="top-bar">
        <div className="top-bar-content">
          {/* Logo */}
          <div
            className="logo"
            data-text="Chloé B."
            onClick={() => {
              location.pathname.includes("projet")
                ? navigate("/", { replace: true })
                : window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
            }}
          >
            Chloé B.
          </div>

          {/* Icon switch mode */}
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

            {/* Icon burger visible sous 900px */}

            {!location.pathname.includes("projet") && (
              <div
                className={menuIsOpen ? "menu-burger is-open" : "menu-burger"}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                <div className="menu-burger--line"></div>
                <div className="menu-burger--line"></div>
                <div className="menu-burger--line"></div>
              </div>
            )}
          </div>
        </div>

        {/* Menu qui slide au clic sur le burger */}
        <div className={menuIsOpen ? "menu-fullpage is-open" : "menu-fullpage"}>
          <div className="menu-container">
            <Menu setMenuIsOpen={setMenuIsOpen} />
          </div>
        </div>
      </div>

      {/* Menu de bas de page, visible au-dessus de 900px */}
      {!location.pathname.includes("projet") && (
        <div className="menu-fixed-container">
          <div className="menu-fixed">
            <Menu setMenuIsOpen={setMenuIsOpen} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
