import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Intro from "./intro";
import Profile from "./profile";
import Event from "./event";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/event" element={<Event />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default RoutesComponent;