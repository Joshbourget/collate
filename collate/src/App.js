import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './components/GetStarted';
import Login from './components/Login';
import HomePage from './components/HomePage';
import GroupChat from './components/GroupChat';
import DirectMessage from './components/DirectMessage';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/group-chat" element={<GroupChat />} />
        <Route path="/direct-message" element={<DirectMessage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
