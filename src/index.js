// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Product/>);
// import ReactDOM from "react-dom/client";
import React from 'react';
import {createRoot} from "react-dom/client";
import App from './App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.css'





const root = createRoot(document.getElementById('root'));

root.render(<App />)