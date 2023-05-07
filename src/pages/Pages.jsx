import React from "react";
import Main from "./Main";
import Cuisine from "./Cuisine";
import { Route, Routes, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";


function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence wate>
      <Routes location={location} key={location.pathname}>
        <Route path="/beetroot_exam_project" element={<Main />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />}/>
      </Routes>
      </AnimatePresence>
  );
}

export default Pages;
