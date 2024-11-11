// src/app/layout.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Menu />
      <div className="layout-content">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
