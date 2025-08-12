// src/pages/GalleryPage.jsx
import React from "react";
import { galleryItems } from "../data/galleryData";
import PolaroidCard from "../components/Gallery/PolaroidCard";
import "./GalleryPage.css";

export default function GalleryPage() {
  // Java analogy: Think of mapping a List<GalleryItem> into UI components.
  return (
    <main className="gallery-wrap">
      <h2 className="gallery-heading">Gallery</h2>

      <section className="gallery-grid" aria-label="Polaroid gallery">
        {galleryItems.map((item) => (
          <PolaroidCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
