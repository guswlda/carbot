import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { GoHomeFill } from 'react-icons/go';
import { MdOutlineLogin } from 'react-icons/md';

const header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/notification" className="header-link">
          공지사항
        </Link>
      </div>

      <div className="header-logo">
        <img src={Logo} alt="Carbot Logo" className="logo" />
      </div>

      <div className="header-right">
        <Link to="/" className="header-link">
          <GoHomeFill className="small-icon" />
        </Link>
        <Link to="/login" className="header-link">
          <MdOutlineLogin className="small-icon" />
        </Link>
      </div>
    </header>
  );
};

export default header;
