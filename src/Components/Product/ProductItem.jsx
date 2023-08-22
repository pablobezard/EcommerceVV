import React from 'react';
import './ProductItem.css';



function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: {product.price}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}


export default ProductItem;
