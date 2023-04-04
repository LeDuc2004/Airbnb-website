import React from "react";
import Home from "./components/Home";
import Lease from "./components/Lease";
import Chuyendi from "./chuyendi/Chuyendi";
import { Routes, Route, Link } from "react-router-dom";
import Sell from "./components/Sell";
import { useState } from "react";
import Ttuser from "./ttuser/Ttuser";
import Hire from "./listhire/Hire";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lease" element={<Lease />} />
        <Route path="/sell/:id/:option" element={<Sell />} />
        <Route path="/chuyendi" element={<Chuyendi />} />
        <Route path="/information" element={<Ttuser />} />
        <Route path="/hire" element={<Hire />} />


      </Routes>
    </>
  );
}

export default App;
