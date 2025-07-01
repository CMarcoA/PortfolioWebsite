// src/components/NavBar/NavBar.jsx
import React from "react";
import "./NavBar.css";

export default function NavBar({ onMenuClick }) {
  return (
    <header className="site-header">
      <button className="menu-btn" onClick={onMenuClick}>
        ☰ Menu
      </button>
      <div className="logo-wrap">
        <img src="/a24-logo.png" alt="A24 logo" className="site-logo" />
      </div>
    </header>
  );
}
