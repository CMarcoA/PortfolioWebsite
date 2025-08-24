// src/pages/GalleryShowcase.jsx
import React from "react";
import { Link } from "react-router-dom";
import { galleryItems } from "../data/galleryData";
import StackPreview from "../components/Gallery/StackPreview";
import "./GalleryShowcase.css";

/**
 * GalleryShowcase
 * Left: definition panel
 * Right: grey canvas with stacked-polaroid previews
 *
 * Java analogy:
 * - This page is like a controller that composes smaller view classes (StackPreview).
 */
export default function GalleryShowcase() {
  // Curate what shows on the landing (first 4 looks clean)
  const previews = galleryItems.slice(0, 4);

  return (
    <main className="showcase-wrap">
      {/* Left panel */}
      <section className="showcase-left" aria-label="Photography definition">
        <h1 className="showcase-heading">Photography</h1>
        <p className="showcase-sub">
          fəˈtäɡrəfē
        </p>

        <p className="showcase-note">
          the <strong>art or practice</strong> of taking and processing photographs.
        </p>

        <Link to="/gallery/all" className="showcase-cta">
          View all photos →
        </Link>
      </section>

      {/* Right panel */}
      <section className="showcase-right" aria-label="Gallery previews">
        <div className="showcase-canvas">
          <div className="showcase-grid">
            {previews.map((item, idx) => (
              <StackPreview
                key={item.id}
                title={item.title}
                cover={item.img}
                to={`/gallery/${item.slug}`}
                height={320}        // taller previews per your request
                backCount={3}       // scattered backers (we tightened spacing already)
                featured={idx === 0} // first one a touch bolder
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
