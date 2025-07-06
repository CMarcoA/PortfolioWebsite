import React from "react";
import { useParams } from "react-router-dom";
import "./GalleryDetail.css";

export default function GalleryDetail() {
  const { id } = useParams();

  return (
    <div className="gallery-detail">
      <h2>Gallery Item {id}</h2>
      <p>
        This is the detail page for gallery item {id}. You can fetch more data
        here based on the ID parameter.
      </p>
    </div>
  );
}
