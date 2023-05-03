import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes, useLoaderData, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";


function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence wate>
      <Routes location={location} key={location.pathname}>
        <Route path="/beetroot_exam_project" element={<Home />} />
        <Route path="/beetroot_exam_project/cuisine/:type" element={<Cuisine />} />
        <Route path="/beetroot_exam_project/searched/:search" element={<Searched />} />
        <Route path="/beetroot_exam_project/recipe/:name" element={<Recipe />}/>
      </Routes>
      </AnimatePresence>
  );
}

export default Pages;
