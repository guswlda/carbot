import React from 'react';
import { RiRobot2Line } from 'react-icons/ri';
import './callbotIcon.css';

const ChatbotIcon = () => {
  return (
    <div className="chatbot-icon">
      <RiRobot2Line size={40} color="#fff" /> {/* 아이콘 크기 및 색상 설정 */}
    </div>
  );
};

export default ChatbotIcon;
