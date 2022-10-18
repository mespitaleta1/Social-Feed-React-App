import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MultiplePosts from './pages/multiplePosts';
import OnePost from './pages/onePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultiplePosts />} />
        <Route path="/one-post" element={<OnePost />} />
      </Routes>
    </Router>
  );
}

export default App;
