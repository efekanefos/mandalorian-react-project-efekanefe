import React from "react";

import "./style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecondPage from "./components/SecondPage";
import About from "./components/About";
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import Episode from "./components/Episode";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js";
import "https://unpkg.com/aos@2.3.1/dist/aos.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SecondPage />
      <About />
      <Episode />
      <Slide />
      <Footer />
    </div>
  );
}
