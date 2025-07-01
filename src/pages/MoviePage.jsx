// src/pages/MoviePage.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { slug } = useParams();

  return (
    <div
      style={{
        padding: "2rem",
        color: "#fff",
        background: "#000",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textTransform: "capitalize" }}>{slug.replace(/-/g, " ")}</h1>
      <p>Details coming soon…</p>
    </div>
  );
}
