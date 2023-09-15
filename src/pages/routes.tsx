import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Intro from "./intro";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/intro" element={<Intro />} />
    </Routes>
  );
};

export default RoutesComponent;