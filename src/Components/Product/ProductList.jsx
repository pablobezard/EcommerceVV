import React, { useState, useEffect } from 'react';
import './ProductList.css';
import product1Image from '../../image/products/product1.jpg';
import product2Image from '../../image/products/product2.jpg';
import product3Image from '../../image/products/product3.jpg';
import product4Image from '../../image/products/product4.jpg';
import product5Image from '../../image/products/product5.jpg';
import product6Image from '../../image/products/product6.jpg';
import { BsCartPlus } from 'react-icons/bs';

const ProductsData = [
    {
      "id": 1,
      "name": "iphone 14 PRO",
      "description": " Super Retina XDR display 6.7 or 6.1 inches1 ProMotion technology Always-on display ",
      "price": 399.99,
      "image": product1Image
    },
    {
      "id": 2,
      "name": "mac air m1",
      "description": " 8 core CPU You have plenty of speed. You don't run out of battery.",
      "price": 699.99,
      "image": product2Image
    },
    {
      "id": 3,
      "name": "iphone 13 PRO",
      "description": "6.1″ o 5.4 Pantalla Super Retina XDR1",
      "price": 229.99,
      "image": product3Image
    },
    {
      "id": 4,
      "name": "ipad 9a",
      "description": "Chip A14 Bionic CPU de 6 núcleos GPU de 4 núcleos GPU de 4 núcleos",
      "price": 229.99,
      "image": product4Image
    },
    {
      "id": 5,
      "name": "iphone 12 PRO",
      "description": "Ceramic shield front Aluminum design with glass back.",
      "price": 199.99,
      "image": product5Image
    },
    {
      "id": 6,
      "name": "iphone 6 plus",
      "description": "Apple A8 2 cores, 1.40Ghz",
      "price": 199.99,
      "image": product6Image
    }
];
function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductsData);
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          {/* Agregar al carrito */}
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            <BsCartPlus /> Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;