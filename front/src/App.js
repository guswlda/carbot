// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Notification from './components/notification/notification';
import Login from './components/auth/login';
import CarInfo from './components/carinfo/carInfo';
import CarSelect from './components/carselect/carSelect';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carInfo" element={<CarInfo />} />
        <Route path="/carSelect" element={<CarSelect />} />
      </Routes>
    </Router>
  );
};

export default App;
