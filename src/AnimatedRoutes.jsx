import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./components/Home/Home";
import PageProject from "./components/PageProject/PageProject";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projet" element={<PageProject />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
