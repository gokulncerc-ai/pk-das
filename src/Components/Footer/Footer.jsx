import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Footer.css';
import pkdims from "../../assets/Images/pkdims.png";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Make Appointments", path: "https://bookappointment.pkdashospital.com/", isExternal: true },
    { label: "Health Check", path: "/health-checkups" },
    { label: "Social Responsibility", path: "/Social-Responsibility" },
    { label: "Contact Us", path: "/contact" },
    { label: "Careers", path: "https://hrms.thenehrugroup.com/careers/", isExternal: true }
  ];

  const departments = [
    { label: "Surgery", path: "/general-department/general-surgery" },
    { label: "Psychiatry", path: "/general-department/psychiatry" },
    { label: "Cardiology", path: "/Cardiology" },
    { label: "Orthopedics", path: "/general-department/orthopedics" },
    { label: "Pediatric", path: "/general-department/pediatrics" },
    { label: "Anesthesiology", path: "/critical-care-medicine" },
    { label: "Oncology", path: "/Oncology" },
    { label: "Dermatology", path: "/general-department/dermatology" }
  ];

  const patientCare = [
    { label: "Book Appointment", path: "https://bookappointment.pkdashospital.com/", isExternal: true },
    { label: "Health Checkups", path: "/health-checkups" },
    { label: "Insurance", path: "/insurance" },
    { label: "Patient Guide", path: "/doctors-directory" },
    { label: "Facilities", path: "/Infrastructure" },
    { label: "Testimonials", path: "/patient-care/testimonials" },
    { label: "Medical Records", path: "/patient-care/central-laborotory" },
    { label: "Online Payments", path: "/contact" }
  ];

  const renderLink = (item) => {
    if (item.isExternal) {
      return (
        <a href={item.path} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-chevron-right"></i>
          {item.label}
        </a>
      );
    }
    return (
      <Link to={item.path} onClick={scrollToTop}>
        <i className="bi bi-chevron-right"></i>
        {item.label}
      </Link>
    );
  };

  return (
    <footer className="footer-section">
      <Container>
        <Row>
          {/* LEFT SECTION */}
          <Col lg={3} md={6}>
            <div className="footer-about">
              <Link to="/" onClick={scrollToTop}>
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
                    {renderLink(item)}
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
                    {renderLink(item)}
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
                    {renderLink(item)}
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
                <Link to="/About-P.K-Das" onClick={scrollToTop}>About Us</Link>
                <span>|</span>
                <Link to="/health-checkups" onClick={scrollToTop}>Services</Link>
                <span>|</span>
                <Link to="/contact" onClick={scrollToTop}>Privacy Policy</Link>
                <span>|</span>
                <Link to="/contact" onClick={scrollToTop}>Terms & Conditions</Link>
                <span>|</span>
                <Link to="/" onClick={scrollToTop}>Sitemap</Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;