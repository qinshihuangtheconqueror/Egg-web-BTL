// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/admin';
import './global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
}

export default App;
