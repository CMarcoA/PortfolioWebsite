// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}
