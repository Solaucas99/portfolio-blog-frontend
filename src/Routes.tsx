import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Project from './Pages/Project';

export function AppRoutes() {
  return (
    <Router basename="/portfolio-blog-frontend">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}
