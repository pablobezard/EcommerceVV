/* Home.jsx */

import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import { BsCreditCard, BsGift, BsCreditCard2Back, BsCreditCard2Front, BsCreditCardFill, BsCashStack } from 'react-icons/bs';
import Image1 from '../../image/general/coursel1.jpg';
import Image2 from '../../image/general/coursel2.jpg';
import Image3 from '../../image/general/coursel3.jpg';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Ecommerce Home Page</h1>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="carousel-image"
              src={Image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Vintage</h3>
              <p>Products that give nostalgia</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image"
              src={Image2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>All kinds of technologies</h3>
              <p>Econoic products</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image"
              src={Image3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Makeup 30% off</h3>
              <p>Enjoy our offers</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="minicards-container">
        <div className="minicard">
          <BsCreditCard size={30} />
          <p>Credit card</p>
        </div>
        <div className="minicard">
          <BsGift size={30} />
          <p>Promotions</p>
        </div>
        <div className="minicard">
          <BsCreditCard2Back size={30} />
          <p>Debit card</p>
        </div>
        <div className="minicard">
          <BsCreditCard2Front size={30} />
          <p>installments without card</p>
        </div>
        <div className="minicard">
          <BsCreditCardFill size={30} />
          <p>Mercado Crédito</p>
        </div>
        <div className="minicard">
          <BsCashStack size={30} />
          <p>Cash</p>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2023 PabloBezard. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
