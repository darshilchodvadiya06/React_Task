import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewListPage from './ReviewListPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/review-list">Review List</Link>
            </li>
          </ul>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<ReviewForm />} />
            <Route path="/review-list" element={<ReviewListPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
