import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Intro from "./intro";
import Profile from "./profile";
import Event from "./event";
import ScrollTop from "../components/scrollToTop";
import Design from "./design";
import Furniture from "./furniture";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/event" element={<Event />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/design" element={<Design />} />
        <Route path="/furniture" element={<Furniture />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;