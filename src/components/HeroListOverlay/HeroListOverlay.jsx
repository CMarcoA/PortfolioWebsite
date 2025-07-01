import React from "react";
import { Link } from "react-router-dom";
import { slides } from "../../data/slides";
import "./HeroListOverlay.css";

export default function HeroListOverlay() {
  return (
    <div className="hero-list-overlay">
      {slides.map((slide) => (
        <Link
          key={slide.slug}
          to={`/films/${slide.slug}`}
          className="hero-list-item"
        >
          {slide.title}
          <span className="hero-list-year">2025</span>
        </Link>
      ))}
    </div>
  );
}
