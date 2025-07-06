import React from "react";
import { Link } from "react-router-dom";
import "./PolaroidItem.css";

export default function PolaroidItem({ id, src, date, title, desc }) {
  return (
    <div className="gallery-item">
      <Link to={`/gallery/${id}`}>
        <img src={src} alt={title} className="gallery-image" />
        <div className="gallery-info">
          <h4>{date}</h4>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </Link>
    </div>
  );
}
