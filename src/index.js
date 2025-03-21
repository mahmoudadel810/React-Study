// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Product/>);
// import ReactDOM from "react-dom/client";
import React from 'react';
import { createRoot } from "react-dom/client";
import App from './components/app.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./index.css";




const root = createRoot(document.getElementById('root'));

root.render(<App />);  
