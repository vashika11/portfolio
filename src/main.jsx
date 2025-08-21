import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Get the root DOM node
const rootElement = document.getElementById("root");

// Render the app if root exists
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("❌ Root element not found. Make sure your index.html includes <div id='root'></div>");
}