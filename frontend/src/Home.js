// Home.js
import React from 'react';
import logo from './Images/logo.svg';
import './App.css';

function Home() {
  return (
    <>
      <h2 className='mb-4'>Latest Products</h2>
      <div className='row'>
        {/* Product Box start */}
        <div className='col-12 col-md-3 mb-2'>
          <div className="card shadow">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title ">Card title</h4>
              <h4 className="card-title text-primary text-muted">Price: Rs. 2500/-</h4>
            </div>
            <div className='card-footer'>
              <button title="Add to cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
              <button title="Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
          </div>
        </div>
        {/* Product Box end */}
        {/* Duplicate the Product Box as needed */}
      </div>
    </>
  );
}

export default Home;
