import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { MdOutlineLogin } from 'react-icons/md';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/notification" className="header-link">
          공지사항
        </Link>
      </div>

      <Link to="/" className="header-logo">
        <img src={Logo} alt="Carbot Logo" className="logo" />
      </Link>

      <div className="header-right">
        <Link to="/login" className="header-link">
          <MdOutlineLogin className="small-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
