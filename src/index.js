import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from './components/app.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./index.css";

// Get the root element
const rootElement = document.getElementById("root");

// Create the root
const root = createRoot(rootElement);

// Render the app
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
