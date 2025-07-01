// src/components/Sidebar.jsx
import React from "react";
import "./Sidebar.css";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={isOpen ? "sidebar open" : "sidebar"}>
      <button className="close-btn" onClick={onClose}>
        ✕ Close
      </button>
      {/* your menu links here */}
    </aside>
  );
}
