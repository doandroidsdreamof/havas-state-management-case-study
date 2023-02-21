import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import MusicPage from './pages/MusicPage';
import BlogPage from './pages/BlogPage';
import PageRouter from './routes/PageRouter';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageRouter />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/audio' element={<MusicPage />} />
    </Routes>
  );
}

export default App;
