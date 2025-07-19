// src/components/HomePageSection3/HomePageSection3.jsx
import React from "react";
import GalleryPage from "../../pages/GalleryPage";
import "./HomePageSection3.css";

export default function HomePageSection3() {
  return (
    <section className="home-page-section-3">
      {/* this will render exactly what GalleryPage does */}
      <GalleryPage />
    </section>
  );
}
