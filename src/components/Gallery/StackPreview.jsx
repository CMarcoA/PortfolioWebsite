// src/components/Gallery/StackPreview.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./StackPreview.css";

/**
 * StackPreview
 * Polaroid-styled preview with subtle stacked frames and bold-elegant hover.
 *
 * Props:
 * - title: string (caption)
 * - cover: string (image URL)
 * - to: string (route to navigate on click)
 *
 * Java analogy: a lightweight view class whose constructor params are props.
 */
export default function StackPreview({ title, cover, to }) {
  return (
    <Link to={to} className="stack-preview" aria-label={title}>
      <figure className="stack-polaroid" role="group" aria-label={title}>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={cover} alt={`${title} photo`} loading="lazy" />
        <figcaption className="stack-caption">{title}</figcaption>
      </figure>
    </Link>
  );
}
