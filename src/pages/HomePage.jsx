// src/pages/HomePage.jsx
import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import HeroListOverlay from "../components/HeroListOverlay/HeroListOverlay";
import "./HomePage.css";
import HomePageSection2 from "../components/HomePageSection2/HomePageSection2";

export default function HomePage() {
  // this line creates the piece of state called `menuOpen`
  // and its updater `setMenuOpen`
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Never inside the shifting container */}
      <NavBar onMenuClick={() => setMenuOpen((o) => !o)} />
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* This is the *only* div that moves */}
      <div className="scroll-container">
        <section className="home-hero-container">
          <HeroCarousel />
          <HeroListOverlay />
        </section>

        <HomePageSection2 />
      </div>
    </>
  );
}
