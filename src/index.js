import React from "react";
import { createRoot } from "react-dom/client";
import "./Sass/style.scss";
import App from "./routers/app";

createRoot(document.getElementById("root")).render(<App />);
