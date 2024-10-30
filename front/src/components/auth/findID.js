import React, { useState } from 'react';
import './findID.css';

const FindId = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ name: false, email: false });
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const handleValidation = () => {
    const newErrors = {
      name: name.trim() === '',
      email: email.trim() === '',
    };
    setErrors(newErrors);

    return !newErrors.name && !newErrors.email; // 모든 필드가 유효한지 반환
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setIsModalOpen(true); // 입력이 유효하면 모달 열기
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <div className='findID-container'>
      <div className='findID-box'>
        <h1>아이디 찾기</h1>
        <form onSubmit={handleSubmit} className='input-name'>
          <p>이름</p>
          <input
            type='text'
            placeholder='이름 입력'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && (
            <span className='error-text'>이름을 입력해 주세요.</span>
          )}

          <p>이메일</p>
          <input
            type='email'
            placeholder='이메일 입력'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && (
            <span className='error-text'>이메일을 입력해 주세요.</span>
          )}

          <div className='findID-button'>
            <button type='submit'>확인</button>
          </div>
        </form>
      </div>

      {/* 모달창 표시 */}
      {isModalOpen && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <h2>아이디 안내</h2>
            <p>고객님의 아이디는 "choimoney"입니다.</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindId;
