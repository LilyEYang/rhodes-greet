import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home';
import CheckInPage from './components/CheckInPage';
import AttendanceList from './components/AttendanceList';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/check-in" element={<CheckInPage />} />
        <Route path="/attendance" element={<AttendanceList />} />
      </Routes>
    </HashRouter>
  );
};

export default App;