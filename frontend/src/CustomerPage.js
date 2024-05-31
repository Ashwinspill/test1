import React from 'react';
import CustomerNavbar from './CustomerNavbar';

function CustomerPage() {
  return (
    <div>
      <CustomerNavbar />
      <div className="container mt-5">
        <h2>Customer Page</h2>
        {/* Add customer-specific content here */}
      </div>
    </div>
  );
}

export default CustomerPage;