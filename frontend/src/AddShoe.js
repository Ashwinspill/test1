import React, { useState, useEffect } from 'react';
import axios from './api/axiosConfig'; // Import the configured Axios instance
import AdminNavbar from './AdminNavbar';
import { Link } from 'react-router-dom';

function AddShoe() {
  const [brands, setBrands] = useState([]);
  const sizes = [
    { id: 1, size: 'UK 6' },
    { id: 2, size: 'UK 7' },
    { id: 3, size: 'UK 8' },
    { id: 4, size: 'UK 9' },
    { id: 5, size: 'UK 10' },
    { id: 6, size: 'UK 11' },
    { id: 7, size: 'UK 12' },
    { id: 8, size: 'UK 13' },
    { id: 9, size: 'UK 14' }
  ];
  const [formData, setFormData] = useState({
    brand: '',
    gender: '',
    model_name: '',
    image: null,
    details: '',
    price: '',
    color: '',
    sizes: []
  });

  useEffect(() => {
    axios.get('/brands/')
      .then(response => setBrands(response.data))
      .catch(error => console.error('Error fetching brands:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    let newSizes = formData.sizes;
    if (checked) {
      newSizes.push(value);
    } else {
      newSizes = newSizes.filter(size => size !== value);
    }
    setFormData({ ...formData, sizes: newSizes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === 'sizes') {
        formData.sizes.forEach(size => data.append('sizes', size));
      } else if (key === 'image' && formData[key]) {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    }

    axios.post('/shoes/', data)
      .then(response => {
        console.log('Shoe added successfully:', response.data);
        setFormData({
          brand: '',
          gender: '',
          model_name: '',
          image: null,
          details: '',
          price: '',
          color: '',
          sizes: []
        });
      })
      .catch(error => {
        console.error('Error adding shoe:', error.response.data);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container mt-5">
        <h2>Add New Shoe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Brand</label>
            <div className="input-group">
              <select name="brand" className="form-select" onChange={handleChange} value={formData.brand}>
                <option value="">Select Brand</option>
                {brands.map(brand => (
                  <option key={brand.id} value={brand.id}>{brand.name}</option>
                ))}
              </select>
              <Link to="/addbrand" className="btn btn-outline-secondary">Add New Brand</Link>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-select" onChange={handleChange} value={formData.gender}>
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="U">Unisex</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Model Name</label>
            <input type="text" name="model_name" className="form-control" onChange={handleChange} value={formData.model_name} />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input type="file" name="image" className="form-control" onChange={handleImageChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Details</label>
            <textarea name="details" className="form-control" onChange={handleChange} value={formData.details}></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="number" name="price" className="form-control" onChange={handleChange} value={formData.price} />
          </div>
          <div className="mb-3">
            <label className="form-label">Color</label>
            <input type="text" name="color" className="form-control" onChange={handleChange} value={formData.color} />
          </div>
          <div className="mb-3">
            <label className="form-label">Sizes</label>
            <div>
              {sizes.map(size => (
                <div key={size.id} className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    id={`size-${size.id}`}
                    name="sizes"
                    value={size.id} // Send the size ID instead of the size value
                    className="form-check-input"
                    onChange={handleSizeChange}
                  />
                  <label className="form-check-label" htmlFor={`size-${size.id}`}>
                    {size.size}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Add Shoe</button>
        </form>
      </div>
    </div>
  );
}

export default AddShoe;
