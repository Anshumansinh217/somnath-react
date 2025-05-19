import React, { useState } from 'react';
import './shop.css';
import { Link } from 'react-router-dom'; 
import image1 from '../img/shop/Dhwaja.jpg'
import image2 from '../img/shop/Koti .jpg'
import image3 from '../img/shop/Saree -.jpg'
import image4 from '../img/shop/Silver Coin.png'


const sampleProducts = [
  { id: 1, name: 'Koti', price: '₹999', image: image2 },
  { id: 2, name: 'Dhwaja', price: '₹999', image: image1 },
  { id: 3, name: 'Saree', price: '₹399', image: image3 },
  { id: 4, name: 'Silver Coin', price: '₹399', image: image4 },
  { id: 5, name: 'Heritage Ruins', price: '₹399', image: '../img/temple-image/22628577_6672181.jpg' },
  { id: 6, name: 'Heritage Ruins', price: '₹399', image: '../img/temple-image/22628577_6672181.jpg' },
  { id: 7, name: 'Heritage Ruins', price: '₹399', image: '../img/temple-image/22628577_6672181.jpg' },
  { id: 8, name: 'Heritage Ruins', price: '₹399', image: '../img/temple-image/22628577_6672181.jpg' },
  // Repeat or map more
];

export default function Shop() {
  const [view, setView] = useState('grid');

  return (
    <div className="shop-wrapper">
      <div className="shop-header">
        <input className="search-bar" placeholder="Search products..." />
        <select className="filter-dropdown">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <div className="view-toggle">
          <button onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''}>🔲</button>
          <button onClick={() => setView('list')} className={view === 'list' ? 'active' : ''}>📃</button>
        </div>
      </div>

      <div className={`products-container ${view}`}>
        {sampleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="buy-now">Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="page-btn">Prev</button>
        {[1, 2, 3, 4, 5].map(num => (
          <button className="page-btn" key={num}>{num}</button>
        ))}
        <button className="page-btn">Next</button>
      </div>
    </div>
  );
}
