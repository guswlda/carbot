// login.js
import React from 'react';
import './login.css';

const Login = () => {
  return (
    <section className='login-container'>
      <div class='login-box'>
        <div class='login-box-text'>
          <h1>로그인</h1>
          <a href='#' class='dealer-login'>
            딜러 로그인
          </a>
        </div>

        <div class='help-links'>
          <a href='#'>아이디 찾기</a> |<a href='#'>비밀번호 찾기</a>
          <p>
            회원이 아니신가요?{' '}
            <a href='#' class='signup-link'>
              회원가입
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
