// src/components/Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <aside className="menu">
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/list">Members List</Link></li>
        <li><Link to="/parent">Events</Link></li>
        <li><Link to="/student">Attendance</Link></li>
        <li><Link to="/teacher">Performance</Link></li>
      </ul>
    </aside>
  );
};

export default Menu;
