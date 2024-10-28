import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './main.css';
import Video from '../video/graycar.mp4';

const Main = () => {
  return (
    <div className="main-container">
      {/* header */}
      <header className="header">
        <Header />
      </header>

      {/* Video Section */}
      <section className="video-section">
        <video className="background-video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </section>

      {/* footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
