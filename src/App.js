// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import GalleryDetail from "./pages/GalleryDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* root URL */}
        <Route path="/" element={<HomePage />} />

        {/* /gallery → grid */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* /gallery/1,2,… → detail */}
        <Route path="/gallery/:id" element={<GalleryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
