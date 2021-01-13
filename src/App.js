import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecondPage from "./components/SecondPage";
import About from "./components/About";
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import Episode from "./components/Episode";

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
