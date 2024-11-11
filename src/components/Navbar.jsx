// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Club Management Dashboard</h2>
      <div className="navbar-profile">
        <span>Admin</span>
        <img src="profile.png" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
