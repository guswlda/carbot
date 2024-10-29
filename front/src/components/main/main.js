import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './main.css';
import Video from '../../video/graycar.mp4';
import Eximage from '../../images/genesis.png';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main-container">
      {/* header section */}
      <header className="header">
        <Header />
      </header>

      {/* video section */}
      <section className="video-section">
        <video className="background-video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </section>

      {/* best-car section */}
      <section className="best-car">
        <p className="bestcar-text">BEST CAR</p>
        <div className="container">
          <div className="card">
            <img src={Eximage} alt="포르쉐 마칸 22" />
            <div className="info">
              <p>모델명: 포르쉐 마칸 22</p>
              <Link to="/carInfo" className="main-links">
                <button className="info-button">자세히 보기</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={Eximage} alt="포르쉐 마칸" />
            <div className="info">
              <p>모델명: 포르쉐 마칸</p>
              <Link to="/carInfo" className="main-links">
                <button className="info-button">자세히 보기</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={Eximage} alt="GV80 Coupe" />
            <div className="info">
              <p>Model: GV80 Coupe</p>
              <Link to="/carInfo" className="main-links">
                <button className="info-button">자세히 보기</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* car-select section */}
      <div className="select-button">
        <Link to="/carSelect" className="main-links">
          <button>차량 조회</button>
        </Link>
      </div>

      {/* footer section */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
