// src/components/Gallery/PolaroidCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./polaroid.css";

export default function PolaroidCard({ item }) {
  // Java analogy: item is a simple POJO; props ≈ constructor parameters.
  return (
    <article className="polaroid-card">
      <Link to={`/gallery/${item.slug}`} className="polaroid-link" aria-label={item.title}>
        <div className="polaroid-image">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img src={item.img} alt={`${item.title} photo`} loading="lazy" />
        </div>

        <div className="polaroid-meta">
          <span className="polaroid-date">{item.date}</span>
          <h3 className="polaroid-title">{item.title}</h3>
          <p className="polaroid-blurb">{item.blurb}</p>
        </div>
      </Link>
    </article>
  );
}
