import React from 'react';
import ProductList from '../../Components/Product/ProductList';
import './Products.css';

function Products({ addToCart }) {
  return (
    <div className="products-container">
      <h1 className="products-title">Products</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default Products;
