import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
export default function N404() {
  return (
    <Container 
      fluid 
      className="min-vh-100 d-flex align-items-center justify-content-center px-0 bg-light"
    >
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead">The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary btn-lg">Go to Home</Link>
      </div>
    </Container>  
  );
}