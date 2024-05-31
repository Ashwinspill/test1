import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AdminNavbar from './AdminNavbar';
import logo from './Images/addShoe.avif';
import logo2 from './Images/viewShoes.jpg';


function AdminPage() {
  return (
    <div>
      <AdminNavbar />
      <div className="container mt-5">
        <h2>SHOES</h2>
        <div className='row'>
          {/* Product Box start */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title d-flex justify-content-center">Add Shoes</h4>
              </div>
              <div className='card-footer d-flex justify-content-center'>
                {/* Link to the AddShoe component */}
                <Link to="/addshoe" className='btn btn-success btn-lg'>
                  <i className="fa-regular fa-square-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* Product Box end */}
          {/* Product Box start */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card shadow">
              <img src={logo2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title d-flex justify-content-center">Show Shoes</h4>
              </div>
              <div className='card-footer d-flex justify-content-center'>
                {/* Link to the AddShoe component */}
                <Link to="/addshoe" className='btn btn-success btn-lg'>
                  <i className="fa-regular fa-square-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* Product Box end */}
          {/* Duplicate the Product Box as needed */}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;