// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Notification from './components/notification/notification';
import Login from './components/auth/login';

import CarInfo from './components/carinfo/carInfo';
import CarSelect from './components/carselect/carSelect';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout을 모든 페이지의 상위 컴포넌트로 설정 */}
        <Route element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/login' element={<Login />} />
          <Route path='/carInfo' element={<CarInfo />} />
          <Route path='/carSelect' element={<CarSelect />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
