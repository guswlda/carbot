// login.js
import React from 'react';
import './login.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = () => {
  return (
    <div className='page-container'>
      {/* Header */}
      <header className='header'>
        <Header />
      </header>

      {/* Login Box */}
      <section className='login-container'>
        <div className='login-box'>
          <div className='login-box-text'>
            <h1>로그인</h1>
            <a href='#' className='corporate-login'>
              딜러 로그인
            </a>
          </div>

          {/* Input Fields */}
          <input type='text' placeholder='아이디 입력' />
          <input type='password' placeholder='비밀번호 입력' />
          <button>로그인</button>

          {/* Help Links */}
          <div className='help-links'>
            <a href='#'>아이디 찾기</a> | <a href='#'>비밀번호 찾기</a>
            <p>
              회원이 아니신가요?{' '}
              <a href='#' className='signup-link'>
                회원가입
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
};

export default Login;
