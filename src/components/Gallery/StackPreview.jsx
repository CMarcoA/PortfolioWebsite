// src/components/Gallery/StackPreview.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./StackPreview.css";

/**
 * StackPreview (scattered variant with seeded randomness)
 *
 * Props:
 * - title: string
 * - cover: string (image URL)
 * - to: string (route)
 * - height?: number (px, default 260)
 * - backCount?: number (# of blank backers, default 3)
 * - featured?: boolean (heavier shadow/scale)
 *
 * Notes (Java analogy):
 * - props ≈ constructor parameters for a lightweight view object.
 * - We use a deterministic RNG seeded from `title` so each instance has a
 *   unique but stable scatter pattern (no re-render flicker).
 */

// simple deterministic RNG: stable across renders for a given seed
function seededRand(seed, min, max) {
  let x = Math.sin(seed) * 10000;
  const frac = x - Math.floor(x);
  return min + frac * (max - min);
}

export default function StackPreview({
  title,
  cover,
  to,
  height = 260,
  backCount = 3,
  featured = false,
}) {
  // Build a seed from title (fall back to length if empty)
  const baseSeed =
    (title && [...title].reduce((acc, c) => acc + c.charCodeAt(0), 0)) ||
    (title ? title.length : 42);

  // Generate backers with tighter, randomized offsets (won't overlap neighbors)
  const backs = Array.from({ length: backCount }).map((_, i) => {
    // ranges tuned to keep the stack inside its grid cell:
    const rot = seededRand(baseSeed + i * 13, -3.2, 3.2); // degrees
    const tx = seededRand(baseSeed + i * 7, -6, 6);       // px
    const ty = seededRand(baseSeed + i * 11, -6, 6);      // px
    return (
      <span
        key={i}
        className="stack-back"
        style={{ transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg)` }}
      />
    );
  });

  return (
    <Link to={to} className="stack-preview" aria-label={title}>
      <div
        className={`stack-stage ${featured ? "is-featured" : ""}`}
        style={{ "--sp-h": `${height}px` }}
      >
        {/* randomized blank polaroids behind */}
        {backs}

        {/* main polaroid */}
        <figure className="stack-polaroid" role="group" aria-label={title}>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img src={cover} alt={`${title} photo`} loading="lazy" />
          <figcaption className="stack-caption">{title}</figcaption>
        </figure>
      </div>
    </Link>
  );
}
