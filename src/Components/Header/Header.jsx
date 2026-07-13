import React, { useState } from "react";
import "./Header.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";

import logoimg from "../../assets/Images/logoimg.png";


const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

      <header className="header">

        <Container>

          <Navbar className="custom-navbar w-100">

            {/* Desktop Left Navigation */}

            <Nav className="left-nav">

              <Nav.Link href="/">
               <small><strong>Home</strong></small> 
              </Nav.Link>

              <Nav.Link href="/about">
               <small><strong>About Us</strong></small> 
              </Nav.Link>

              <Nav.Link href="/departments">
                <small><strong>Departments</strong></small>
              </Nav.Link>

            </Nav>


            {/* Logo */}

            <Navbar.Brand href="/" className="logo">

              <img 
                src={logoimg} 
                alt="Hospital Logo" 
              />

            </Navbar.Brand>


            {/* Desktop Right Navigation */}

            <Nav className="right-nav">

              <Nav.Link href="/services">
               <small><strong>Services</strong></small>
              </Nav.Link>

              <Nav.Link href="/media">
                <small><strong>Media & Events</strong></small>
              </Nav.Link>

              <Nav.Link href="/contact">
               <small><strong>Contact</strong></small>
              </Nav.Link>

            </Nav>


            {/* Mobile Menu Button */}

            <button 
              className="menu-btn"
              onClick={handleShow}
            >

              <i className="bi bi-list"></i>

            </button>


          </Navbar>

        </Container>

      </header>



      {/* Mobile Offcanvas */}

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


            <Nav.Link 
              href="/about"
              onClick={handleClose}
            >
              About Us
            </Nav.Link>


            <Nav.Link 
              href="/departments"
              onClick={handleClose}
            >
              Departments
            </Nav.Link>


            <Nav.Link 
              href="/services"
              onClick={handleClose}
            >
              Services
            </Nav.Link>


            <Nav.Link 
              href="/media"
              onClick={handleClose}
            >
              Media & Events
            </Nav.Link>


            <Nav.Link 
              href="/contact"
              onClick={handleClose}
            >
              Contact
            </Nav.Link>


          </Nav>



          <button className="appointment-btn">
            Book Appointment
          </button>


        </Offcanvas.Body>


      </Offcanvas>

    </>
  );
};


export default Header;