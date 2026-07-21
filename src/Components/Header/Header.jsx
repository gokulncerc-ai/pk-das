import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
  Button, NavDropdown, Accordion
} from "react-bootstrap";

import logoimg from "../../assets/Images/logoimg.png";
import generaldepartment from "../../assets/Images/generaldepartment.webp"
import superspeciality from "../../assets/Images/superspeciality.webp"


const Header = () => {

  const [show, setShow] = useState(false);

  const [sticky, setSticky] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 60) {

        setSticky(true);

      } else {

        setSticky(false);

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <>

      {/*==============================
                    HEADER
            ==============================*/}

      <header className={`header ${sticky ? "sticky-header" : ""}`}>

        <Container>


          <Navbar expand="lg" className="custom-navbar">

            {/*==============================
                                LOGO
                        ==============================*/}

            <Navbar.Brand href="/" className="logo">

              <img
                src={logoimg}
                alt="Hospital Logo"
              />

            </Navbar.Brand>

            {/*==============================
                                MOBILE BUTTON
                        ==============================*/}

            <button
              className="menu-btn"
              onClick={handleShow}
            >

              <i className="bi bi-list"></i>

            </button>

            {/*==============================
                            DESKTOP NAVIGATION
                        ==============================*/}

            <Nav className="desktop-nav ms-auto">
              <Nav.Link href="/">

                Home

              </Nav.Link>

              {/* -------About US Drop Down------ */}
              <NavDropdown
                title={
                  <span className="nav-dropdown-title">
                    About Us
                  </span>
                }
                id="about-dropdown"
                className="custom-dropdown about-dropdown"
              >

                <NavDropdown.Item
                  as={Link} to="/About-P.K-Das"
                  className="dropdown-item-custom about-item"
                >
                  <i className="bi bi-hospital dropdown-icon"></i>
                  <span className="dropdown-text">About P.K. Das</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link} to="/The-Trust"
                  className="dropdown-item-custom founder-item"
                >
                  <i className="bi bi-people-fill dropdown-icon"></i>
                  <span className="dropdown-text">The Trust</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link} to="/Founder"
                  className="dropdown-item-custom founder-item"
                >
                  <i className="bi bi-person-badge dropdown-icon"></i>
                  <span className="dropdown-text">Founder</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link} to="/Chairman-Message"
                  className="dropdown-item-custom chairman-item"
                >
                  <i className="bi bi-chat-left-text dropdown-icon"></i>
                  <span className="dropdown-text">Chairman's Message</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link} to="/Ceo-Message"
                  className="dropdown-item-custom ceo-item"
                >
                  <i className="bi bi-person-workspace dropdown-icon"></i>
                  <span className="dropdown-text">CEO's Message</span>
                </NavDropdown.Item>


                <NavDropdown.Item
                  as={Link} to="/Trustee-Message"
                  className="dropdown-item-custom trustees-item"
                >
                  <i className="bi bi-person-badge-fill dropdown-icon"></i>
                  <span className="dropdown-text">Trustee's Message</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link} to="/Director-Message"
                  className="dropdown-item-custom trustees-item"
                >
                  <i className="bi bi-person-workspace dropdown-icon"></i>
                  <span className="dropdown-text">Directors Message</span>
                </NavDropdown.Item>


                <NavDropdown.Item
                  as={Link} to="/Social-Responsibility"
                  className="dropdown-item-custom social-item"
                >
                  <i className="bi bi-heart-pulse-fill dropdown-icon"></i>
                  <span className="dropdown-text">Social Responsibility</span>
                </NavDropdown.Item>


                <NavDropdown.Item
                  as={Link} to="/Awards-Recognition"
                  className="dropdown-item-custom awards-item"
                >
                  <i className="bi bi-award-fill dropdown-icon"></i>
                  <span className="dropdown-text">Awards & Recognition</span>
                </NavDropdown.Item>


                <NavDropdown.Item
                  as={Link} to="/Infrastructure"
                  className="dropdown-item-custom infrastructure-item"
                >
                  <i className="bi bi-building-fill dropdown-icon"></i>
                  <span className="dropdown-text">Infrastructure</span>
                </NavDropdown.Item>

              </NavDropdown>

              <NavDropdown
                title="Departments"
                id="departments-dropdown"
                className="departments-dropdown"
                autoClose="outside"
              >
                <div className="mega-menu">

                  {/* Super Speciality */}
                  <div className="dept-card">
                    <img
                      src={superspeciality}
                      alt="Super Speciality"
                      className="dept-img"
                    />

                    <h5>Super Speciality</h5>

                    {/* <NavDropdown.Item as={Link} to="/Cardiology">
                      <small><strong>Cardiology</strong></small>
                    </NavDropdown.Item> */}
                    <a href="/departments/neurology" className="dropdown-item"><small><strong>Neurology</strong></small></a>
                    <a href="/departments/nephrology" className="dropdown-item"><small><strong>Nephrology</strong></small></a>
                    <a href="/departments/neurosurgery" className="dropdown-item"><small><strong>Neurosurgery</strong></small></a>
                    <a href="/departments/urology" className="dropdown-item"><small><strong>Gastroentrology</strong></small></a>
                    <a href="/departments/oncology" className="dropdown-item"><small><strong>Oncology</strong></small></a>
                    <a href="/departments/oncology" className="dropdown-item"><small><strong>Neonatology</strong></small></a>
                    <a href="/departments/oncology" className="dropdown-item"><small><strong>Plastic Surgery</strong></small></a>
                    <a href="/departments/oncology" className="dropdown-item"><small><strong>Critical Care</strong></small></a>
                  </div>

                  {/* General Departments */}
                  <div className="dept-card">

                    <img
                      src={generaldepartment}
                      alt="General Departments"
                      className="dept-img"
                    />

                    <h5>General Departments</h5>

                    <div className="dept-list">

                      <a href="/departments/general-medicine" className="dropdown-item">
                        <small><strong>General Medicine</strong></small>
                      </a>

                      <a href="/departments/general-surgery" className="dropdown-item">
                        <small><strong>General Surgery</strong></small>
                      </a>

                      <a href="/departments/orthopedics" className="dropdown-item">
                        <small><strong>Orthopedics</strong></small>
                      </a>

                      <a href="/departments/pediatrics" className="dropdown-item">
                        <small><strong>Pediatrics</strong></small>
                      </a>

                      <a href="/departments/ent" className="dropdown-item">
                        <small><strong>ENT</strong></small>
                      </a>

                      <a href="/departments/dermatology" className="dropdown-item">
                        <small><strong>Dermatology</strong></small>
                      </a>

                      <a href="/departments/psychiatry" className="dropdown-item">
                        <small><strong>Psychiatry</strong></small>
                      </a>

                      <a href="/departments/pulmonology" className="dropdown-item">
                        <small><strong>Pulmonology</strong></small>
                      </a>

                      <a href="/departments/radiology" className="dropdown-item">
                        <small><strong>Radiology</strong></small>
                      </a>

                      <a href="/departments/dentistry" className="dropdown-item">
                        <small><strong>Dentistry</strong></small>
                      </a>

                      <a href="/departments/physiotherapy" className="dropdown-item">
                        <small><strong>Physiotherapy</strong></small>
                      </a>

                      <a href="/departments/obg" className="dropdown-item">
                        <small><strong>OBG</strong></small>
                      </a>

                      <a href="/departments/ivf" className="dropdown-item">
                        <small><strong>IVF & Fertility</strong></small>
                      </a>

                      <a href="/departments/blood-bank" className="dropdown-item">
                        <small><strong>Blood Bank</strong></small>
                      </a>

                    </div>

                  </div>
                </div>
              </NavDropdown>

              {/* -----------Doctors Drop down Starts---------- */}
              <NavDropdown
                title={
                  <span className="nav-dropdown-title">
                    Doctors
                  </span>
                }
                id="about-dropdown"
                className="custom-dropdown about-dropdown"
              >

                <NavDropdown.Item
                  href="/find-doctor"
                  className="dropdown-item-custom doctor-item"
                >
                  <i className="bi bi-search-heart dropdown-icon"></i>
                  <span className="dropdown-text">Find Doctor</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/doctor-directory"
                  className="dropdown-item-custom directory-item"
                >
                  <i className="bi bi-journal-medical dropdown-icon"></i>
                  <span className="dropdown-text">Doctors Directory</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/doctor-schedule"
                  className="dropdown-item-custom schedule-item"
                >
                  <i className="bi bi-calendar2-week dropdown-icon"></i>
                  <span className="dropdown-text">Doctors Schedule</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/book-consultation"
                  className="dropdown-item-custom consultation-item"
                >
                  <i className="bi bi-calendar-check dropdown-icon"></i>
                  <span className="dropdown-text">Book Consultation</span>
                </NavDropdown.Item>


              </NavDropdown>
              {/* -----------Doctors Drop down ends---------- */}

              {/* ---------Patient cars dropdown starts----------- */}

              <NavDropdown
                title={
                  <span className="nav-dropdown-title">
                    Patient Care
                  </span>
                }
                id="about-dropdown"
                className="custom-dropdown about-dropdown"
              >

                <NavDropdown.Item
                  href="/find-doctor"
                  className="dropdown-item-custom doctor-item"
                >
                  <i className="bi bi-calendar2-check dropdown-icon"></i>
                  <span className="dropdown-text">Book appointments</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/doctor-directory"
                  className="dropdown-item-custom directory-item"
                >
                  <i className="bi bi-heart-pulse dropdown-icon"></i>
                  <span className="dropdown-text">Health Checkups</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/doctor-schedule"
                  className="dropdown-item-custom schedule-item"
                >
                  <i className="bi bi-shield-check dropdown-icon"></i>
                  <span className="dropdown-text">Insurance & PTA</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/book-consultation"
                  className="dropdown-item-custom consultation-item"
                >
                  <i className="bi bi-beaker dropdown-icon"></i>
                  <span className="dropdown-text">Central Laboratory</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/book-consultation"
                  className="dropdown-item-custom consultation-item"
                >
                  <i className="bi bi-chat-quote dropdown-icon"></i>
                  <span className="dropdown-text">Testimonials</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/book-consultation"
                  className="dropdown-item-custom consultation-item"
                >
                  <i className="bi bi-person-heart dropdown-icon"></i>
                  <span className="dropdown-text">Patient Care</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/book-consultation"
                  className="dropdown-item-custom consultation-item"
                >
                  <i className="bi bi-hospital dropdown-icon"></i>
                  <span className="dropdown-text">Emergency Services</span>
                </NavDropdown.Item>

                <li className="dropdown-submenu">
                  <a
                    href="#"
                    className="dropdown-item d-flex justify-content-between align-items-center"
                  >
                    <span>
                      <i className="bi bi-building dropdown-icon"></i>
                      Satellite Services
                    </span>

                    <i className="bi bi-chevron-right"></i>
                  </a>

                  <ul className="submenu dropdown-menu">

                    <li>
                      <a href="/satellite-clinic-1" className="dropdown-item">
                        Pathiripala
                      </a>
                    </li>

                    <li>
                      <a href="/satellite-clinic-2" className="dropdown-item">
                        Thiruvilwamala
                      </a>
                    </li>

                    <li>
                      <a href="/satellite-clinic-3" className="dropdown-item">
                        Ambalapara
                      </a>
                    </li>



                  </ul>
                </li>


              </NavDropdown>

              {/* ---------Patient cars dropdown ends----------- */}

              {/* ---------Media Gallery----------- */}

              <NavDropdown
                title={
                  <span className="nav-dropdown-title">
                    Media & Events
                  </span>
                }
                id="about-dropdown"
                className="custom-dropdown about-dropdown"
              >

                <NavDropdown.Item
                  href="/find-doctor"
                  className="dropdown-item-custom doctor-item"
                >
                  <i className="bi bi-images dropdown-icon"></i>
                  <span className="dropdown-text">Gallery</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/doctor-directory"
                  className="dropdown-item-custom directory-item"
                >
                  <i className="bi bi-newspaper dropdown-icon"></i>
                  <span className="dropdown-text">News & Events</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/doctor-schedule"
                  className="dropdown-item-custom schedule-item"
                >
                  <i className="bi bi-journal-text dropdown-icon"></i>
                  <span className="dropdown-text">Blogs</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/book-consultation"
                  className="dropdown-item-custom consultation-item"
                >
                  <i className="bi bi-shield-check dropdown-icon"></i>
                  <span className="dropdown-text">Health Insurance</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/book-consultation"
                  className="dropdown-item-custom consultation-item"
                >
                  <i className="bi bi-people-fill dropdown-icon"></i>
                  <span className="dropdown-text">Outreach Activities</span>
                </NavDropdown.Item>


              </NavDropdown>

              {/* ----------Media & Gallery ends--------- */}

              <Nav.Link href="/contact">

                Contact

              </Nav.Link>

              <Button className="appointment-btn">

                <i className="bi bi-calendar-check me-2"></i>

                Book Appointment

              </Button>

            </Nav>

          </Navbar>

        </Container>

      </header>

      {/*====================================
                    MOBILE OFFCANVAS
            =====================================*/}

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="mobile-offcanvas"
      >

        <Offcanvas.Header closeButton />

        <Offcanvas.Body>

          <div className="mobile-logo">

            <img
              src={logoimg}
              alt="Hospital Logo"
            />

          </div>

          <Nav className="mobile-nav">

            <Nav.Link
              href="/"
              onClick={handleClose}
            >
              Home
            </Nav.Link>
            {/* -------------About us accordion starts ------------- */}
            <Accordion flush className="mobile-menu-accordion">

              <Accordion.Item eventKey="0">

                <Accordion.Header>

                  About Us

                </Accordion.Header>

                <Accordion.Body>

                  <Nav className="mobile-submenu">

                    <Nav.Link
                      as={Link} to="/About-P.K-Das"
                      onClick={handleClose}
                    >
                      <i className="bi bi-hospital me-2"></i>
                      About P.K. Das
                    </Nav.Link>

                    <Nav.Link
                      as={Link} to="/The-Trust"
                      onClick={handleClose}
                    >

                      <i className="bi bi-people-fill me-2"></i>
                      The Trust
                    </Nav.Link>

                    <Nav.Link
                      as={Link} to="/Founder"
                      onClick={handleClose}
                    >
                      <i className="bi bi-person-badge me-2"></i>
                      Founder
                    </Nav.Link>

                    <Nav.Link
                      as={Link} to="/Chairman-Message"
                      onClick={handleClose}
                    >
                      <i className="bi bi-person-workspace me-2"></i>
                      Chairman's Message
                    </Nav.Link>

                    <Nav.Link
                      as={Link} to="/Ceo-Message"
                      onClick={handleClose}
                    >
                      <i className="bi bi-people-fill me-2"></i>
                      Ceo's Message
                    </Nav.Link>

                    <Nav.Link
                      as={Link} to="/Trustee-Message"
                      onClick={handleClose}
                    >
                      <i className="bi bi-heart-pulse-fill me-2"></i>
                      Trustee's Message
                    </Nav.Link>

                    <Nav.Link
                      as={Link} to="/Director-Message"
                      onClick={handleClose}
                    >
                      <i className="bi bi-person-workspace dropdown-icon"></i>
                      Directors Message
                    </Nav.Link>

                    <Nav.Link
                      as={Link} to="/Awards-Recognition"
                      onClick={handleClose}
                    >
                      <i className="bi bi-award-fill me-2"></i>
                      Awards & Recognition
                    </Nav.Link>

                    <Nav.Link
                      href="/Social-Responsibility"
                      onClick={handleClose}
                    >
                      <i className="bi bi-heart-pulse-fill me-2"></i>
                      Social Responsibility
                    </Nav.Link>

                    <Nav.Link
                      href="/infrastructure"
                      onClick={handleClose}
                    >
                      <i className="bi bi-building-fill me-2"></i>
                      Infrastructure
                    </Nav.Link>

                  </Nav>

                </Accordion.Body>

              </Accordion.Item>

            </Accordion>
            {/* -------------About us accordion ends ------------- */}

            {/* --------------Departments section starts------------ */}
            <Accordion flush className="mobile-menu-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Departments</Accordion.Header>

                <Accordion.Body>

                  <Accordion flush>

                    {/* Super Speciality */}
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Super Speciality</Accordion.Header>

                      <Accordion.Body className="p-0">

                        <Nav.Link href="/departments/cardiology" onClick={handleClose}>
                          Cardiology
                        </Nav.Link>

                        <Nav.Link href="/departments/neurology" onClick={handleClose}>
                          Neurology
                        </Nav.Link>

                        <Nav.Link href="/departments/nephrology" onClick={handleClose}>
                          Nephrology
                        </Nav.Link>

                        <Nav.Link href="/departments/neurosurgery" onClick={handleClose}>
                          Neurosurgery
                        </Nav.Link>

                        <Nav.Link href="/departments/urology" onClick={handleClose}>
                          Urology
                        </Nav.Link>

                        <Nav.Link href="/departments/cardiothoracic" onClick={handleClose}>
                          Cardiothoracic Surgery
                        </Nav.Link>

                        <Nav.Link href="/departments/gastroenterology" onClick={handleClose}>
                          Gastroenterology
                        </Nav.Link>

                        <Nav.Link href="/departments/oncology" onClick={handleClose}>
                          Oncology
                        </Nav.Link>

                        <Nav.Link href="/departments/neonatology" onClick={handleClose}>
                          Neonatology
                        </Nav.Link>

                      </Accordion.Body>
                    </Accordion.Item>

                    {/* General Departments */}

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>General Departments</Accordion.Header>

                      <Accordion.Body className="p-0">

                        <Nav.Link href="/departments/general-medicine" onClick={handleClose}>
                          General Medicine
                        </Nav.Link>

                        <Nav.Link href="/departments/general-surgery" onClick={handleClose}>
                          General Surgery
                        </Nav.Link>

                        <Nav.Link href="/departments/orthopedics" onClick={handleClose}>
                          Orthopedics
                        </Nav.Link>

                        <Nav.Link href="/departments/pediatrics" onClick={handleClose}>
                          Pediatrics
                        </Nav.Link>

                        <Nav.Link href="/departments/ent" onClick={handleClose}>
                          ENT
                        </Nav.Link>

                        <Nav.Link href="/departments/dermatology" onClick={handleClose}>
                          Dermatology
                        </Nav.Link>

                        <Nav.Link href="/departments/psychiatry" onClick={handleClose}>
                          Psychiatry
                        </Nav.Link>

                        <Nav.Link href="/departments/pulmonology" onClick={handleClose}>
                          Pulmonology
                        </Nav.Link>

                        <Nav.Link href="/departments/radiology" onClick={handleClose}>
                          Radiology
                        </Nav.Link>

                        <Nav.Link href="/departments/dentistry" onClick={handleClose}>
                          Dentistry
                        </Nav.Link>

                        <Nav.Link href="/departments/physiotherapy" onClick={handleClose}>
                          Physiotherapy
                        </Nav.Link>

                        <Nav.Link href="/departments/obg" onClick={handleClose}>
                          OBG
                        </Nav.Link>

                        <Nav.Link href="/departments/ivf" onClick={handleClose}>
                          IVF & Fertility
                        </Nav.Link>

                        <Nav.Link href="/departments/blood-bank" onClick={handleClose}>
                          Blood Bank
                        </Nav.Link>

                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* --------------Departments section ------------ */}

            {/* ------Offcanvas for Doctor Starts---------- */}

            <Accordion flush className="mobile-menu-accordion">

              <Accordion.Item eventKey="0">

                <Accordion.Header>

                  Doctors

                </Accordion.Header>

                <Accordion.Body>

                  <Nav className="mobile-submenu">

                    <Nav.Link
                      href="/find-doctor"
                      onClick={handleClose}
                    >
                      <i className="bi bi-search-heart me-2"></i>
                      Find Doctor
                    </Nav.Link>

                    <Nav.Link
                      href="/doctor-directory"
                      onClick={handleClose}
                    >
                      <i className="bi bi-journal-medical me-2"></i>
                      Doctors Directory
                    </Nav.Link>

                    <Nav.Link
                      href="/doctor-schedule"
                      onClick={handleClose}
                    >
                      <i className="bi bi-calendar2-week me-2"></i>
                      Doctors Schedule
                    </Nav.Link>

                    <Nav.Link
                      href="/book-consultation"
                      onClick={handleClose}
                    >
                      <i className="bi bi-calendar-check me-2"></i>
                      Book Consultation
                    </Nav.Link>

                  </Nav>

                </Accordion.Body>

              </Accordion.Item>

            </Accordion>

            {/* -----------Offcanvas for Doctors ends---------- */}

            <Accordion flush className="mobile-menu-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Patient Care</Accordion.Header>

                <Accordion.Body className="p-0">

                  <Nav.Link href="/find-doctor" onClick={handleClose}>
                    <i className="bi bi-calendar2-check me-2"></i>
                    Book Appointments
                  </Nav.Link>

                  <Nav.Link href="/health-checkups" onClick={handleClose}>
                    <i className="bi bi-heart-pulse me-2"></i>
                    Health Checkups
                  </Nav.Link>

                  <Nav.Link href="/insurance-tpa" onClick={handleClose}>
                    <i className="bi bi-shield-check me-2"></i>
                    Insurance & TPA
                  </Nav.Link>

                  <Nav.Link href="/central-laboratory" onClick={handleClose}>
                    <i className="bi bi-beaker me-2"></i>
                    Central Laboratory
                  </Nav.Link>

                  <Nav.Link href="/testimonials" onClick={handleClose}>
                    <i className="bi bi-chat-quote me-2"></i>
                    Testimonials
                  </Nav.Link>

                  <Nav.Link href="/patient-care" onClick={handleClose}>
                    <i className="bi bi-person-heart me-2"></i>
                    Patient Care
                  </Nav.Link>

                  <Nav.Link href="/emergency-services" onClick={handleClose}>
                    <i className="bi bi-hospital me-2"></i>
                    Emergency Services
                  </Nav.Link>

                  {/* Satellite Services */}
                  <Accordion flush>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <i className="bi bi-building me-2"></i>
                        Satellite Services
                      </Accordion.Header>

                      <Accordion.Body className="p-0">

                        <Nav.Link
                          href="/satellite-clinic/pathiripala"
                          onClick={handleClose}
                        >
                          Pathiripala
                        </Nav.Link>

                        <Nav.Link
                          href="/satellite-clinic/thiruvilwamala"
                          onClick={handleClose}
                        >
                          Thiruvilwamala
                        </Nav.Link>

                        <Nav.Link
                          href="/satellite-clinic/ambalapara"
                          onClick={handleClose}
                        >
                          Ambalapara
                        </Nav.Link>

                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion flush className="mobile-menu-accordion">

              <Accordion.Item eventKey="0">

                <Accordion.Header>

                  Media & Events
                </Accordion.Header>

                <Accordion.Body>

                  <Nav className="mobile-submenu">

                    <Nav.Link
                      href="/find-doctor"
                      onClick={handleClose}
                    >
                      <i className="bi bi-images dropdown-icon"></i>
                      Gallery
                    </Nav.Link>

                    <Nav.Link
                      href="/doctor-directory"
                      onClick={handleClose}
                    >
                      <i className="bi bi-newspaper dropdown-icon"></i>
                      News & Events
                    </Nav.Link>

                    <Nav.Link
                      href="/doctor-schedule"
                      onClick={handleClose}
                    >
                      <i className="bi bi-journal-text dropdown-icon"></i>
                      Blogs
                    </Nav.Link>

                    <Nav.Link
                      href="/book-consultation"
                      onClick={handleClose}
                    >
                      <i className="bi bi-shield-check dropdown-icon"></i>
                      Health Awareness
                    </Nav.Link>

                    <Nav.Link
                      href="/book-consultation"
                      onClick={handleClose}
                    >
                      <i className="bi bi-people-fill dropdown-icon"></i>
                      Outreach Activites
                    </Nav.Link>

                  </Nav>

                </Accordion.Body>

              </Accordion.Item>

            </Accordion>

            <Nav.Link
              href="/contact"
              onClick={handleClose}
            >
              Contact
            </Nav.Link>

          </Nav>

          {/*==============================
                            MOBILE BUTTONS
                    ==============================*/}

          <div className="mobile-buttons">

            <Button className="appointment-btn w-100">

              <i className="bi bi-calendar-check me-2"></i>

              Book Appointment

            </Button>

            <Button
              className="call-btn w-100 mt-3"
              variant="outline-success"
            >

              <i className="bi bi-telephone-fill me-2"></i>

              Emergency Call

            </Button>

          </div>

        </Offcanvas.Body>

      </Offcanvas>

    </>

  );

};

export default Header;