import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/notification" className="header-link">
          공지사항
        </Link>
      </div>

      <div className="header-center">
        <h1 className="logo">CARBOT</h1>
      </div>

      <div className="header-right">
        <Link to="/" className="header-link">
          홈
        </Link>
        <Link to="/login" className="header-link">
          로그인
        </Link>
      </div>
    </header>
  );
};

export default header;
