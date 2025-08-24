// src/pages/GalleryPage.jsx
import React from "react";
import { galleryItems } from "../data/galleryData";
import PolaroidCard from "../components/Gallery/PolaroidCard";
import StackPreview from "../components/Gallery/StackPreview"; // ⬅ add this
import "./GalleryPage.css";

export default function GalleryPage() {
  return (
    <main className="gallery-wrap">
      <h2 className="gallery-heading">Gallery (test)</h2>

      {/* Original grid stays here */}
      <section className="gallery-grid">
        {galleryItems.map((item) => (
          <PolaroidCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
