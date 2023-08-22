import React from 'react';
import './Cart.css';



function Cart({ cartItems, removeFromCart }) {
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)} // Llama a la función removeFromCart
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-total">
        <p>Total: ${cartTotal.toFixed(2)}</p>
        <button className="buy-button">Buy Now</button>
      </div>
      <div className="footer">
        <p>&copy; 2023 PabloBezard. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Cart;
