import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login"; // 👈 your login page
import About from "./pages/About";
import Family from "./pages/Family";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Default page → Login */}
        <Route path="/" element={<Login />} />

        {/* Game / other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/aakanksha" element={<Family />} />
      </Routes>
    </div>
  );
};

export default App;
