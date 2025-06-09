import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img 
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="Instagram"
        className="logo"
      />
    </header>
  );
};

export default Header; 