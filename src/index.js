import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import QuienesSomos from './components/QuienesSomos';
import Ligas from './components/Ligas/Ligas';
import {Routes, Route, BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
        <Route path="/Ligas" element={<Ligas/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);