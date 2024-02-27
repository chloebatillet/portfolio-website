import { useEffect, useState } from "react";
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";

import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  const [isDark, setIsDark] = useState(localStorage.getItem("darkMode"));
  const isMobileOrTablet =
    /Android|webOS|iPhone|iPad|iPod|Macintosh|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

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

  return (
    <Router>
      {!isMobileOrTablet && <Cursor />}
      <Header isDark={isDark} setIsDark={setIsDark} />
      <AnimatedRoutes />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
