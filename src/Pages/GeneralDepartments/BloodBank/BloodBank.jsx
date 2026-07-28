import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./BloodBank.css";
import BloodBankHero from "../../../assets/Images/BloodBankHero.jpg";
import bloodBankAbout from "../../../assets/Images/bloodBankAbout.avif";
import blooddoc1 from "../../../assets/Images/blooddoc1.webp";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const services = [
    { icon: "fa-clock", title: "Round the Clock Services" },
    { icon: "fa-tint", title: "Whole Blood Collection Facility" },
    { icon: "fa-couch", title: "Donor Monitoring & Comfort Couches" },
    { icon: "fa-vial", title: "Platelet Concentrate Preparation" },
    { icon: "fa-flask", title: "Fresh Frozen Plasma & Cryoprecipitate" },
    { icon: "fa-microscope", title: "ELISA Testing to Prevent TTD" },
    { icon: "fa-warehouse", title: "Storage Capacity of 250 Units" },
];

const doctors = [
    { img: blooddoc1, name: "Dr. Aswani Ramji" },
];

const BloodBank = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${BloodBankHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Blood Bank</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-tint me-2"></i>
                            Department
                        </span>

                        <h1>Blood Bank Services</h1>
                        <p>
                            A dedicated team of blood bank technicians working around the
                            clock, committed to patient safety and the highest standards
                            of purity, potency, and safety in every unit we provide.
                        </p>

                        <div className="gm-hero-buttons">
                            <Button className="gm-primary-btn">Book Appointment</Button>
                            <Button className="gm-secondary-btn">Contact Us</Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ================= QUICK INFO ================= */}
            <section className="gm-quick-info">
                <Container>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-clock"></i>
                                </div>
                                <h3>24/7 Availability</h3>
                                <p>Round the clock services from dedicated technicians</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-microscope"></i>
                                </div>
                                <h3>Rigorous Testing</h3>
                                <p>Every unit tested by ELISA method for maximum safety</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-warehouse"></i>
                                </div>
                                <h3>250 Unit Capacity</h3>
                                <p>State-of-the-art facility for large-scale blood storage</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= ABOUT ================= */}
            <section className="gm-about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="gm-about-image">
                                <img src={bloodBankAbout} alt="Blood Bank" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Committed to Safety & Quality</h2>
                                <p>
                                    At our hospital, the Blood Bank operates tirelessly with a
                                    dedicated team of blood bank technicians who work around
                                    the clock. These specialists are adept at identifying the
                                    specific blood and blood component needs of our patients
                                    with precision and care.
                                </p>
                                <p>
                                    What sets our Blood Bank apart is our unwavering commitment
                                    to patient safety and quality. Our state-of-the-art
                                    facilities and meticulous adherence to international
                                    standards ensure that every unit of blood and blood
                                    components we provide meets the highest standards of
                                    purity, potency, and safety.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Round the Clock Services</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Whole Blood Collection</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Rigorous ELISA Testing</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>250 Units Storage Capacity</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= SERVICES OFFERED ================= */}
            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>What We Offer</span>
                        <h2>Blood Bank Highlights</h2>
                        <p>
                            Comprehensive blood banking services delivered with precision,
                            care, and strict adherence to international safety standards.
                        </p>
                    </div>

                    <Row className="g-4">
                        {services.map((item, idx) => (
                            <Col md={3} sm={6} key={idx}>
                                <div className="gm-feature-card">
                                    <div className="gm-feature-icon">
                                        <i className={`fa ${item.icon}`}></i>
                                    </div>
                                    <h4>{item.title}</h4>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ================= SPECIALISTS ================= */}
            <section className="gm-specialists">
                <Container>
                    <div className="gm-section-heading">
                        <span>Meet Our Team</span>
                        <h2>Our Blood Bank Specialist</h2>
                        <p>
                            Experienced and dedicated specialists ensuring safe, timely, and
                            reliable blood banking services for every patient.
                        </p>
                    </div>

                    <Row className="g-4 justify-content-center">
                        {doctors.map((doc, idx) => (
                            <Col md={4} key={idx}>
                                <div className="gm-doctor-card">
                                    <div className="gm-doctor-image">
                                        <img src={doc.img} alt={doc.name} />
                                        <span className="gm-experience">Specialist</span>
                                    </div>
                                    <div className="gm-doctor-content">
                                        <span className="gm-doctor-designation">
                                            Blood Bank Specialist
                                        </span>
                                        <h3>{doc.name}</h3>
                                        <div className="gm-doctor-buttons">
                                            <Button className="gm-primary-btn">Book Now</Button>
                                            <Button className="gm-outline-btn">View Profile</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ================= CTA ================= */}
            <section className="gm-cta">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <div className="gm-cta-content">
                                <span className="gm-section-tag">Get Started</span>
                                <h2>Need Blood Bank Services?</h2>
                                <p>
                                    Our experienced blood bank team is here to ensure safe,
                                    timely, and reliable access to blood and blood components
                                    whenever you need them.
                                </p>
                                <div className="gm-cta-buttons">
                                    <Button className="gm-primary-btn">Book Appointment</Button>
                                    <Button className="gm-outline-btn">Contact Us</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-cta-box">
                                <div className="gm-cta-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <h3>Let's Help You!</h3>
                                <p>
                                    PK DAS Institute of Medical Sciences, Vaniamkulam,
                                    Ottapalam
                                </p>
                                <div className="gm-cta-features">
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Round the Clock Blood Bank Services
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Strict Adherence to International Standards
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Safe Storage for Up to 250 Units
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    );
};

export default BloodBank;