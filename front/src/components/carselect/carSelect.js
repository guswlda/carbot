import React, { useState, useEffect } from 'react';
import './carSelect.css';
import { Link } from 'react-router-dom';
import Eximg from '../../images/genesis.png';

const CarSelect = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  // 페이지 로드 시 스크롤을 상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleManufacturerChange = (event) => {
    setSelectedManufacturer(event.target.value);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <div className="car-select-page">
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
            <Link to="/carInfo" className="main-links">
              <button className="details-button">자세히 보기</button>
            </Link>
          </div>

          <div className="car-card">
            <img src={Eximg} alt="포르쉐 마칸" />
            <p>모델명: 포르쉐 마칸</p>
            <Link to="/carInfo" className="main-links">
              <button className="details-button">자세히 보기</button>
            </Link>
          </div>

          <div className="car-card">
            <img src={Eximg} alt="GV80 Coupe" />
            <p>Model: GV80 coupe</p>
            <Link to="/carInfo" className="main-links">
              <button className="details-button">자세히 보기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSelect;
