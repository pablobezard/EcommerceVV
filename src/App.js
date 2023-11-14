import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import LoginForm from './Components/Login/LoginForm';
import RegisterForm from './Components/Register/RegisterForm';
import Page404 from './Pages/Page404';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        const data = response.data[0].casa;
        const venta = parseFloat(data.venta.replace(',', '.'));
        setExchangeRate(venta);
      } catch (error) {
        console.error('Error al obtener la tasa de cambio:', error);
      }
    };

    fetchExchangeRate();
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const convertToPesos = (price) => {
    const priceInPesos = price * exchangeRate;
    return priceInPesos.toFixed(2);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/products" element={<Products addToCart={addToCart} convertToPesos={convertToPesos} />} exact />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} convertToPesos={convertToPesos} />} exact />
          <Route path="/login" element={<LoginForm />} exact />
          <Route path="/register" element={<RegisterForm />} exact />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
