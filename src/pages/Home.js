import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer" >
        <h1>City Pizza</h1>
        <p>Pizza Along With The Way To Home</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
