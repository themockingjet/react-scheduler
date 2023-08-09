import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./main.css";

import App from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import LivePreview from "./pages/LivePreview";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
                <Route path="/admin" element={<Admin />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/Component" element={<LivePreview />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
