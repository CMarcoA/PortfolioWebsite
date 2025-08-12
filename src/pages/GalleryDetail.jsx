// src/pages/GalleryDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { galleryItems } from "../data/galleryData";
import "./GalleryDetail.css";

export default function GalleryDetail() {
  // Java analogy: slug is a method parameter supplied by the router.
  const { slug } = useParams();
  const item = galleryItems.find((g) => g.slug === slug);

  if (!item) {
    return (
      <main className="detail-wrap">
        <p className="detail-notfound">Item not found.</p>
        <Link className="detail-back" to="/gallery">
          ← Back to Gallery
        </Link>
      </main>
    );
  }

  return (
    <main className="detail-wrap">
      <Link className="detail-back" to="/gallery">
        ← Back to Gallery
      </Link>

      <article className="detail-card">
        <div className="detail-image">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img src={item.img} alt={`${item.title} full photo`} />
        </div>

        <div className="detail-meta">
          <span className="detail-date">{item.date}</span>
          <h1 className="detail-title">{item.title}</h1>
          <p className="detail-blurb">{item.blurb}</p>
        </div>
      </article>
    </main>
  );
}
