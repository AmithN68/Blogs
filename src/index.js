import React from "react";
import { createRoot } from "react-dom/client";
import "./style.scss";
import App from "./routers/app";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(<App />);
