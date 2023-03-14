import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';
import TimerPage from './pages/TimerPage';
import QuotePage from './pages/QuotePage';
import MadeByPage from './pages/MadeByPage';


function App() {
  return (
        <Router>
          <Nav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/madeby" element={<MadeByPage />} />
        </Routes>
      </Router>
  );
}

export default App;
