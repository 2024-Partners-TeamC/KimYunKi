import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <Link to="/" className="home-banner">홈</Link>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
