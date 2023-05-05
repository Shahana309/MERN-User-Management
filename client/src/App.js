import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/user/login/login';
import Signup from './components/user/signup/signup';
import HomePage from './components/user/home/home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
