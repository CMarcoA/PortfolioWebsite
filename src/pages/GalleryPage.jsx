import React from "react";
import "./GalleryPage.css";
import { galleryData } from "../data/galleryData";
import PolaroidItem from "../components/PolaroidItem/PolaroidItem";

export default function GalleryPage() {
  return (
    <div className="gallery-container">
      <div className="spacer" style={{ height: "100px" }} />
      <div className="gallery-title">
        <h1 className="title-main">Visual Archive</h1>
        <p className="title-sub">A Collection of Cinematic Memories</p>
      </div>
      <div className="gallery">
        {galleryData.map((item) => (
          <PolaroidItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
