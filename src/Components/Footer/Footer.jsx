import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './Footer.css'
import pkdims from "../../assets/Images/pkdims.png"

const Footer = () => {

  const quickLinks = [
    "Home",
    "Make Appointments",
    "Speciality Departments",
    "General Departments",
    "Health Check",
    "Social Responsibility",
    "Contact Us",
    "Careers"
  ];

  const departments = [
    "Surgery",
    "Psychiatry",
    "Cardiology",
    "Orthopedics",
    "Pediatric",
    "Anesthesiology",
    "Oncology",
    "Dermatology"
  ];

  const patientCare = [
    "Book Appointment",
    "Health Checkups",
    "Insurance",
    "Patient Guide",
    "Facilities",
    "Testimonials",
    "Medical Records",
    "Online Payments"
  ];


  return (
    <>
      <footer className="footer-section">

        <Container>

          <Row>

            {/*==============================
                            LEFT SECTION
                    ==============================*/}

            <Col lg={3} md={6}>

              <div className="footer-about">

                <img
                  src={pkdims}
                  alt="PKDAS Hospital"
                  className="footer-logo"
                />

                <p>

                  PKDAS Hospital has grown to provide a
                  world-class facility for advanced
                  restorative dentistry with compassion,
                  innovation and excellence.

                </p>

                <ul className="footer-contact">

                  <li>

                    <i className="bi bi-geo-alt"></i>

                    <span>

                      Ottapalam,
                      Palakkad,
                      Kerala - 679101

                    </span>

                  </li>

                  <li>

                    <i className="bi bi-telephone"></i>

                    <span>

                      +91 1234 567 890

                    </span>

                  </li>

                  <li>

                    <i className="bi bi-envelope"></i>

                    <span>

                      info@pkdas.com

                    </span>

                  </li>

                </ul>

                <div className="footer-social">

                  <a href="#">

                    <i className="bi bi-facebook"></i>

                  </a>

                  <a href="#">

                    <i className="bi bi-instagram"></i>

                  </a>

                  <a href="#">

                    <i className="bi bi-youtube"></i>

                  </a>

                  <a href="#">

                    <i className="bi bi-linkedin"></i>

                  </a>

                </div>

              </div>

            </Col>
            {/*==============================
                            QUICK LINKS
                    ==============================*/}

            <Col lg={3} md={6}>

              <div className="footer-links">

                <h4>

                  Quick Links

                </h4>

                <ul>

                  {quickLinks.map((link, index) => (

                    <li key={index}>

                      <a href="#">

                        <i className="bi bi-chevron-right"></i>

                        {link}

                      </a>

                    </li>

                  ))}

                </ul>

              </div>

            </Col>

            {/*==============================
                            DEPARTMENTS
                    ==============================*/}

            <Col lg={3} md={6}>

              <div className="footer-links">

                <h4>

                  Departments

                </h4>

                <ul>

                  {departments.map((department, index) => (

                    <li key={index}>

                      <a href="#">

                        <i className="bi bi-chevron-right"></i>

                        {department}

                      </a>

                    </li>

                  ))}

                </ul>

              </div>

            </Col>

            {/*==============================
                            PATIENT CARE
                    ==============================*/}

            <Col lg={3} md={6}>

              <div className="footer-links">

                <h4>

                  Patient Care

                </h4>

                <ul>

                  {patientCare.map((item, index) => (

                    <li key={index}>

                      <a href="#">

                        <i className="bi bi-chevron-right"></i>

                        {item}

                      </a>

                    </li>

                  ))}

                </ul>

              </div>

            </Col>

            {/*==============================
                            NEWSLETTER
                    ==============================*/}

            {/* <Col lg={3} md={12}>

              <div className="footer-newsletter">

                <h4>

                  Newsletter

                </h4>

                <p>

                  Subscribe to our newsletter to get the latest
                  health tips, news & updates.

                </p>

                <Form>

                  <Form.Group className="mb-3">

                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                    />

                  </Form.Group>

                  <Button className="footer-subscribe-btn">

                    Subscribe

                    <i className="bi bi-send ms-2"></i>

                  </Button>

                </Form>

              </div>

            </Col> */}

          </Row>
          {/*==================================
                        FOOTER BOTTOM
                ==================================*/}

          <div className="footer-bottom">

            <Row className="align-items-center">

              <Col lg={6} md={12}>

                <div className="footer-copyright">

                  <p>

                    Copyright © 2026 PKDAS Hospital.
                    All Rights Reserved.

                  </p>

                </div>

              </Col>

              <Col lg={6} md={12}>

                <div className="footer-bottom-links">

                  <a href="#">

                    About Us

                  </a>

                  <span>|</span>

                  <a href="#">

                    Services

                  </a>

                  <span>|</span>

                  <a href="#">

                    Privacy Policy

                  </a>

                  <span>|</span>

                  <a href="#">

                    Terms & Conditions

                  </a>

                  <span>|</span>

                  <a href="#">

                    Sitemap

                  </a>

                </div>

              </Col>

            </Row>

          </div>

        </Container>

      </footer>


    </>


  )
}

export default Footer
