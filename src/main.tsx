import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Clarity from "@microsoft/clarity";

if (import.meta.env.VITE_CLARITY_PROJECT_ID) {
  Clarity.init(import.meta.env.VITE_CLARITY_PROJECT_ID);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
