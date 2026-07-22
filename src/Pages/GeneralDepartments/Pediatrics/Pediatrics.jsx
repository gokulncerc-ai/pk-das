import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./Pediatrics.css";
import PediatricsHero from "../../../assets/Images/PediatricsHero.avif";
import pediatricsAbout from "../../../assets/Images/pediatricsAbout.avif";
import pediadoc1 from "../../../assets/Images/pediadoc1.webp";
import pediadoc2 from "../../../assets/Images/pediadoc2.webp";
import pediadoc3 from "../../../assets/Images/pediadoc3.webp";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const services = [
    {
        icon: "fa-child",
        title: "Well Baby Clinic",
        description: "Routine check-ups to track growth and development.",
    },
    {
        icon: "fa-syringe",
        title: "Immunization Clinic",
        description: "All additional vaccines available on a daily basis.",
    },
    {
        icon: "fa-heartbeat",
        title: "High Risk Clinic",
        description: "Specialized monitoring and care for high-risk infants.",
    },
    {
        icon: "fa-bed",
        title: "NICU",
        description: "New Born Intensive Care Unit for critical newborn care.",
    },
    {
        icon: "fa-hospital-o",
        title: "OP & IP Services",
        description: "Comprehensive outpatient and inpatient care services.",
    },
    {
        icon: "fa-user-md",
        title: "Pediatric Urology",
        description: "Endoscopy and reconstructive surgery for children.",
    },
    {
        icon: "fa-stethoscope",
        title: "Upper G.I. Endoscopy",
        description: "Advanced endoscopic procedures designed for children.",
    },
    {
        icon: "fa-smile-o",
        title: "Pediatric Dental",
        description: "Dedicated dental care tailored for young patients.",
    },
    {
        icon: "fa-dna",
        title: "Pediatric Genetics",
        description: "Genetic and antenatal counseling for families.",
    },
    {
        icon: "fa-wheelchair",
        title: "Pediatric Orthopedics",
        description: "Specialized orthopedic care for children and infants.",
    },
];

const doctors = [
    { img: pediadoc1, name: "Dr. Vidhya Shankari" },
    { img: pediadoc2, name: "Dr. Deepa S N" },
    { img: pediadoc3, name: "Dr. Varsha VP" },
];

const Pediatrics = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${PediatricsHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Pediatrics</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-child me-2"></i>
                            Department
                        </span>

                        <h1>Pediatrics</h1>
                        <p>
                            With state-of-the-art facilities, dedicated medical
                            professionals, and a patient-centred approach, we strive to
                            be the premier destination for pediatric care.
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
                                    <i className="fa fa-bed"></i>
                                </div>
                                <h3>PICU / NICU</h3>
                                <p>Fully equipped with life support facilities</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-syringe"></i>
                                </div>
                                <h3>Immunization</h3>
                                <p>All vaccines available daily</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Expert Pediatricians</h3>
                                <p>Skilled general and specialist pediatricians</p>
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
                                <img src={pediatricsAbout} alt="Pediatrics" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Committed to Pediatric Excellence</h2>

                                <div className="gm-about-highlight">
                                    <p>
                                        Our hospital stands as a testament to our unwavering
                                        commitment to pediatric excellence, ensuring the health
                                        and well-being of our youngest patients today and for
                                        generations to come.
                                    </p>
                                </div>

                                <p>
                                    We recognize the paramount importance of pediatric care in
                                    shaping the health and well-being of our youngest
                                    patients. The Pediatrics section boasts cutting-edge
                                    modern equipment, complemented by a fully equipped PICU
                                    featuring ventilation facilities overseen by Pediatric
                                    Care Intensives and proficient general Pediatricians.
                                </p>
                                <p>
                                    With the exception of complex congenital heart disease
                                    surgery and bone marrow transplants, our facility is
                                    equipped with both advanced technology and skilled
                                    personnel to manage all major diseases effectively. The
                                    PICU/NICU area is well-prepared for life support, with
                                    ultramodern equipment and infrastructure that rival those
                                    of other leading hospitals.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Well Baby Clinic</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>NICU & PICU Care</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Pediatric Urology & Surgery</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Genetic & Antenatal Counseling</span>
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
                        <h2>Services Offered</h2>
                        <p>
                            A complete range of pediatric services delivered with
                            expertise and compassion.
                        </p>
                    </div>

                    <Row className="g-4">
                        {services.map((service, idx) => (
                            <Col md={4} sm={6} key={idx}>
                                <div className="gm-feature-card">
                                    <div className="gm-feature-icon">
                                        <i className={`fa ${service.icon}`}></i>
                                    </div>
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
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
                        <h2>Our Pediatrics Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to your child's
                            health and well-being.
                        </p>
                    </div>

                    <Row className="g-4">
                        {doctors.map((doc, idx) => (
                            <Col md={4} key={idx}>
                                <div className="gm-doctor-card">
                                    <div className="gm-doctor-image">
                                        <img src={doc.img} alt={doc.name} />
                                        <span className="gm-experience">Specialist</span>
                                    </div>
                                    <div className="gm-doctor-content">
                                        <span className="gm-doctor-designation">
                                            Pediatrics Specialist
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
                                <h2>Need Pediatric Consultation?</h2>
                                <p>
                                    Our dedicated pediatric team is here to guide you and
                                    your child through every stage of care, from routine
                                    check-ups to critical care.
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
                                        Fully Equipped NICU & PICU
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Expert General & Specialist Pediatricians
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Comprehensive Newborn to Child Care
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

export default Pediatrics;