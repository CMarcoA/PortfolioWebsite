// src/components/HeroCarousel/HeroSlide.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HeroCarousel.css";

export default function HeroSlide({ slide }) {
  return (
    <div className="hero-slide">
      <video
        src={slide.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        {/* Your main title */}
        <h1 className="hero-title">
          <Link to={`/films/${slide.slug}`}>{slide.title}</Link>
        </h1>
      </div>
    </div>
  );
}

// WHAT IS ({ slide }) ?
// Inside your component, slide is just a variable holding that one object you passed in—one of the entries from your slides array
