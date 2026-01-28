import ReactDOM from "react-dom/client";

import App from "./App";
import "./globals.css";

// Note: StrictMode is disabled to prevent WebGL context issues with Three.js
// StrictMode causes components to mount twice in development, which can exceed
// the browser's WebGL context limit when rendering multiple 3D canvases
ReactDOM.createRoot(document.getElementById("root")!).render(
  <App />
);
