import React from 'react';
import LoginPage from 'pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from 'pages/RegistrationPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
