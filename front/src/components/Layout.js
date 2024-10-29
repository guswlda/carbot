// Layout.js
import React from 'react';
import Header from '../components/header/header'; // Header 컴포넌트 import
import Footer from '../components/footer/footer'; // Footer 컴포넌트 import
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet /> {/* Outlet을 통해 각 페이지의 콘텐츠가 렌더링됩니다 */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
