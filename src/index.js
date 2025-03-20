import React from 'react';
// import ReactDOM from "react-dom/client";
import {createRoot} from "react-dom/client";
import App from './App.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Product/>);


const root = createRoot(document.getElementById('root'));

root.render(<App />)