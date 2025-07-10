import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fot.css'
const Fot = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" pt-5 pb-4 border-top">
      <Container>
        <Row className="g-4">
          {/* Company Info */}
          <Col lg={4} md={6}>
            <div className="mb-4">
              <h5 className="fw-bold mb-3">Company Name</h5>
              <p className="text-muted mb-4">
                Creating innovative solutions to complex problems through design and technology.
              </p>
              <div className="social-icons">
                <a href="#" className="text-decoration-none me-3 text-dark">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="#" className="text-decoration-none me-3 text-dark">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="#" className="text-decoration-none me-3 text-dark">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="#" className="text-decoration-none text-dark">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Services</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Services */}
          <Col lg={2} md={6}>
            <h6 className="text-uppercase fw-bold mb-4">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Web Design</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">App Development</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">UI/UX Design</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Digital Marketing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">SEO</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={4} md={6}>
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <address className="text-muted">
              <p className="mb-2"><i className="bi bi-geo-alt-fill me-2"></i> 123 Tech Street, San Francisco, CA 94107</p>
              <p className="mb-2"><i className="bi bi-envelope-fill me-2"></i> info@company.com</p>
              <p className="mb-2"><i className="bi bi-telephone-fill me-2"></i> +1 (234) 567-8900</p>
              <p><i className="bi bi-clock-fill me-2"></i> Mon-Fri: 9AM - 5PM</p>
            </address>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0 text-muted">&copy; {currentYear} Company Name. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="#" className="text-muted text-decoration-none">Privacy Policy</a></li>
              <li className="list-inline-item mx-2">·</li>
              <li className="list-inline-item"><a href="#" className="text-muted text-decoration-none">Terms of Service</a></li>
              <li className="list-inline-item mx-2">·</li>
              <li className="list-inline-item"><a href="#" className="text-muted text-decoration-none">Cookie Policy</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Fot;