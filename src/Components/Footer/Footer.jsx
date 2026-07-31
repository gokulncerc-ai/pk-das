import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Footer.css';
import pkdims from "../../assets/Images/pkdims.png";

const Footer = () => {

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Make Appointments", path: "/book-appointment" },
    { label: "Speciality Departments", path: "/departments/speciality" },
    { label: "General Departments", path: "/departments/general" },
    { label: "Health Check", path: "/health-checkups" },
    { label: "Social Responsibility", path: "/social-responsibility" },
    { label: "Contact Us", path: "/contact" },
    { label: "Careers", path: "https://hrms.thenehrugroup.com/careers/" }
  ];

  const departments = [
    { label: "Surgery", path: "/departments/surgery" },
    { label: "Psychiatry", path: "/departments/psychiatry" },
    { label: "Cardiology", path: "/departments/cardiology" },
    { label: "Orthopedics", path: "/departments/orthopedics" },
    { label: "Pediatric", path: "/departments/pediatric" },
    { label: "Anesthesiology", path: "/departments/anesthesiology" },
    { label: "Oncology", path: "/departments/oncology" },
    { label: "Dermatology", path: "/departments/dermatology" }
  ];

  const patientCare = [
    { label: "Book Appointment", path: "/book-appointment" },
    { label: "Health Checkups", path: "/health-checkups" },
    { label: "Insurance", path: "/insurance" },
    { label: "Patient Guide", path: "/patient-guide" },
    { label: "Facilities", path: "/facilities" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Medical Records", path: "/medical-records" },
    { label: "Online Payments", path: "/online-payments" }
  ];

  return (
    <footer className="footer-section">
      <Container>
        <Row>
          {/* LEFT SECTION */}
          <Col lg={3} md={6}>
            <div className="footer-about">
              <Link to="/">
                <img
                  src={pkdims}
                  alt="PKDAS Hospital"
                  className="footer-logo"
                />
              </Link>
              <p>
                PKDAS Hospital has grown to provide a world-class facility for advanced
                restorative dentistry with compassion, innovation and excellence.
              </p>
              <ul className="footer-contact">
                <li>
                  <i className="bi bi-geo-alt"></i>
                  <span>Ottapalam, Palakkad, Kerala - 679101</span>
                </li>
                <li>
                  <i className="bi bi-telephone"></i>
                  <span>+91 1234 567 890</span>
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  <span>info@pkdas.com</span>
                </li>
              </ul>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* QUICK LINKS */}
          <Col lg={3} md={6}>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>
                      <i className="bi bi-chevron-right"></i>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* DEPARTMENTS */}
          <Col lg={3} md={6}>
            <div className="footer-links">
              <h4>Departments</h4>
              <ul>
                {departments.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>
                      <i className="bi bi-chevron-right"></i>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* PATIENT CARE */}
          <Col lg={3} md={6}>
            <div className="footer-links">
              <h4>Patient Care</h4>
              <ul>
                {patientCare.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>
                      <i className="bi bi-chevron-right"></i>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div className="footer-copyright">
                <p>Copyright © 2026 PKDAS Hospital. All Rights Reserved.</p>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="footer-bottom-links">
                <Link to="/about">About Us</Link>
                <span>|</span>
                <Link to="/services">Services</Link>
                <span>|</span>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <span>|</span>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
                <span>|</span>
                <Link to="/sitemap">Sitemap</Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;