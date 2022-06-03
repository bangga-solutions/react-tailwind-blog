import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './blog/Home';
import Blog from './blog/Blog';
import Tags from './blog/Tags';
import Projects from './blog/Projects';
import About from './blog/About';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/tags" element={<Tags />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
