import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

import image1 from '../img/shop/Dhwaja.jpg'
import image2 from '../img/shop/Koti .jpg'
import image3 from '../img/shop/Saree -.jpg'
import image4 from '../img/shop/Silver Coin.png'


const sampleProducts = [
  {
    id: '1',
    name: 'Koti',
    description: 'The flag hoisted on top of the shikhara of the Somnath Mahadev temple is available as prasad...',
    price: '₹999',
    image: image2,
    shipping: '2-5 Business Days',
    returnPolicy: 'Products are not returnable',
  },
  {
    id: '2',
    name: 'Dhwaja',
    description: 'A beautifully carved idol from the temple archives...',
    price: '₹999.00',
    image: image1,
    shipping: '3-7 Business Days',
    returnPolicy: 'Return within 7 days',
  },
  {
    id: '3',
    name: 'Saree',
    description: 'A beautifully carved idol from the temple archives...',
    price: '₹999.00',
    image: image3,
    shipping: '3-7 Business Days',
    returnPolicy: 'Return within 7 days',
  },
   {
    id: '4',
    name: 'Silver Coin',
    description: 'A beautifully carved idol from the temple archives...',
    price: '₹999.00',
    image: image4,
    shipping: '3-7 Business Days',
    returnPolicy: 'Return within 7 days',
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Product not found</h2>
        <Link to="/shop" className="btn btn-secondary mt-3">Back to Shop</Link>
      </div>
    );
  }

  return (
  
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-6">
          <div className="shadow rounded overflow-hidden">
            <img src={product.image} alt={product.name} className="img-fluid rounded" />
          </div>
        </div>

        <div className="col-md-6">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/shop">All Products</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
            </ol>
          </nav>

          <h2 className="fw-bold text-uppercase mb-3">{product.name}</h2>
          <p className="text-muted fs-5">{product.description}</p>
          <h4 className="text-orange fw-semibold mb-4">{product.price}</h4>

          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="input-group" style={{ width: '120px' }}>
              <button className="btn btn-outline-secondary" type="button">-</button>
              <input type="text" className="form-control text-center" defaultValue="1" />
              <button className="btn btn-outline-secondary" type="button">+</button>
            </div>
            <button className="btn btn-warning text-white px-4 fw-bold">
              <i className="bi bi-cart-plus-fill me-2"></i>Add to Cart
            </button>
          </div>

          <p className="mb-2"><i className="bi bi-heart me-2"></i><span>Add to wishlist</span></p>
          <p className="text-muted small mb-1"><i className="bi bi-truck me-2"></i>Shipping: {product.shipping}</p>
          <p className="text-muted small"><i className="bi bi-arrow-counterclockwise me-2"></i>{product.returnPolicy}</p>

        </div>
      </div>
    </div>
  );
}
