import React from 'react';
import LoginPage from 'pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
