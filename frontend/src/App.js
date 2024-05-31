// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import AdminPage from './AdminPage';
import CustomerPage from './CustomerPage';
import AddShoe from './AddShoe';
import AddBrand from './AddBrand'; // Import the AddBrand component

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/addshoe" element={<AddShoe />} />
        <Route path="/addbrand" element={<AddBrand />} /> {/* Add route for AddBrand */}
      </Routes>
    </Router>
  );
}

export default App;
