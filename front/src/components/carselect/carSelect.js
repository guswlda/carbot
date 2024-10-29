import React, { useState } from 'react';
import './carSelect.css';
import Header from '../header/header'; // Header 컴포넌트 가져오기
import Footer from '../footer/footer'; // Footer 컴포넌트 가져오기
import { Link } from 'react-router-dom';
import Eximg from '../../images/genesis.png';

const CarSelect = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleManufacturerChange = (event) => {
    setSelectedManufacturer(event.target.value);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <div className="car-select-page">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div className="car-select-container">
        <h2>나에게 맞는 차량을 검색해 보세요!</h2>

        {/* Search Section */}
        <div className="search-container">
          <select onChange={handleManufacturerChange} className="dropdown">
            <option value="">제조사</option>
            <option value="manufacturer1">제조사1</option>
            <option value="manufacturer2">제조사2</option>
          </select>

          <select onChange={handleModelChange} className="dropdown">
            <option value="">차종</option>
            <option value="model1">차종1</option>
            <option value="model2">차종2</option>
          </select>

          <button className="search-button">조회</button>
        </div>

        {/* Car List Section */}
        <div className="car-list">
          <div className="car-card">
            <img src={Eximg} alt="포르쉐 마칸 22" />
            <p>모델명: 포르쉐 마칸 22</p>
            <button className="details-button">자세히 보기</button>
          </div>

          <div className="car-card">
            <img src={Eximg} alt="포르쉐 마칸" />
            <p>모델명: 포르쉐 마칸</p>
            <button className="details-button">자세히 보기</button>
          </div>

          <div className="car-card">
            <img src={Eximg} alt="GV80 Coupe" />
            <p>Model: GV80 coupe</p>
            <button className="details-button">자세히 보기</button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default CarSelect;
