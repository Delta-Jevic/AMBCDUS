import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TheAmbassador from "./pages/TheAmbassador";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/the-ambassador" element={<TheAmbassador />} />
    </Routes>
  );
}