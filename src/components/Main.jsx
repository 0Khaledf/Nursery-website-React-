import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="blur-background">
      <div className="hero-card">
        <h1 className="hero-title">Paradise Nursery</h1>
        <p className="hero-subtitle">Where Green Meets Serenity</p>
        
        <p>
          Welcome to <strong>Paradise Nursery</strong>, where nature flourishes and serenity thrives. 
          Explore our wide collection of plants and let greenery transform your space into a peaceful sanctuary. 
          Whether you're a gardening enthusiast or just starting, we have something special for you.
        </p>
        
        <Link to="/plants" className="nav-link d-inline-block mt-3">
          <button className="hero-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
