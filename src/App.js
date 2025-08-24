// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GalleryShowcase from "./pages/GalleryShowcase";
import GalleryDetail from "./pages/GalleryDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryShowcase />} />
        <Route path="/gallery/:slug" element={<GalleryDetail />} />
        <Route path="*" element={<div style={{padding: 24}}>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
