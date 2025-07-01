import React from "react";
import "./VideoBackground.css";

export default function VideoBackground({ src, poster }) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      className="video-background"
    />
  );
}
