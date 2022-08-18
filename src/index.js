import React from "react";
import App from "./components/app/App";
import "./style/style.scss";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
    <Router>
        <App />
    </Router>
);
