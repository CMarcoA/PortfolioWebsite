// src/index.js
import React from "react";
import { createRoot } from "react-dom/client"; // ← new API
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot instead of ReactDOM.render
root.render(<App />);
