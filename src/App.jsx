import { useEffect, useState } from "react";
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import PageProject from "./components/PageProject/PageProject";

function App() {
  // const [isDark, setIsDark] = useState(
  //   JSON.parse(localStorage.getItem("darkMode"))
  // );
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
    <>
      {!isMobileOrTablet && <Cursor />}
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Outlet />
    </>
  );
}

export default App;
