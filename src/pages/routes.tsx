import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Intro from "./intro";
import Profile from "./profile";
import Event from "./event";
import ScrollTop from "../components/scrollToTop";
import Design from "./design";
import Furniture from "./furniture";
import DesignDetail from "./designDetail";
import FurnitureDetail from "./furnitureDetail";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/event" element={<Event />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/design1234" element={<Design />} />
        <Route path="/design-detail/:index" element={<DesignDetail />} />
        <Route path="/furniture1234" element={<Furniture />} />
        <Route path="/furniture-detail/:index" element={<FurnitureDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;