import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Main/Home";
import Service from "./components/Main/Service";
import Company from "./components/Main/Company";
import Career from "./components/Main/Career";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;