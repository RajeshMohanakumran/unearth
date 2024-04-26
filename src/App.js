import React from 'react';

import { Routes, Route } from 'react-router-dom'
import './ChatPage';
import ChatPage from './ChatPage';
import Homee from './Components/Homee/Homee';
import LoginForm from './Components/LoginForm/LoginForm';
import SignUpForm from './Components/SignUpForm/SignUpForm';
function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="login/" element={<LoginForm />} />
        <Route path="register/" element={<SignUpForm />} />
        <Route path="chat/" element={<ChatPage />} />
      </Routes>
    </div>
  );
};

export default App;
