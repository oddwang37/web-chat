import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';
import MainPage from 'pages/MainPage';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/forgot-pass" element={<ForgotPasswordPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
