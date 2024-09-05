import React from 'react';
import './Category.css'
import { BsCart } from 'react-icons/bs';
const Category = ({product}) => {
  return (
    <div className="product-container">
    {product.map((product, index) => (
      <div className="product-card text-start" key={index}>
        <img src={product.img} alt={product.name} className="product-image" />
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price text-start">
          <span className="new-price">€{product.price}</span>
          <span className="discount">30% OFF</span>
        </p>
        <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe laborum incidunt facilis commodi, magnam impedit quidem natus possimus totam rerum tempora. Autem fugit ab eius libero corrupti distinctio perferendis?</p>
        <button className="cart-button"><BsCart size={24} className="me-2" />Add to cart</button>
      </div>
    ))}
  </div>
  );
};

export default Category;