import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./Pulmonology.css";
import PulmonologyHero from "../../../assets/Images/PulmonologyHero.jpg";
import pulmonologyAbout from "../../../assets/Images/pulmonologyAbout.avif";
import pulmodoc1 from "../../../assets/Images/pulmodoc1.webp";
import pulmodoc2 from "../../../assets/Images/pulmodoc2.avif";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const services = [
    { icon: "fa-lungs", title: "Asthma/COPD/Allergy Clinic" },
    { icon: "fa-stethoscope", title: "ILD Clinic" },
    { icon: "fa-ban", title: "Smoking Cessation Clinic" },
    { icon: "fa-bed", title: "Sleep Clinic" },
    { icon: "fa-notes-medical", title: "TB Clinic" },
    { icon: "fa-microscope", title: "Bronchoscopy" },
    { icon: "fa-wind", title: "Pulmonary Function Test" },
    { icon: "fa-eye", title: "Fiberoptic Bronchoscopy" },
    { icon: "fa-syringe", title: "Tube Thoracostomy" },
    { icon: "fa-vial", title: "Diagnostic and Therapeutic Thoracentesis" },
    { icon: "fa-x-ray", title: "CT-guided Lung Biopsy" },
    { icon: "fa-dna", title: "Transbronchial Lung Biopsy" },
    { icon: "fa-moon", title: "Polysomnography" },
    { icon: "fa-medkit", title: "Pleural & Intercostal Tube Insertions" },
    { icon: "fa-search-plus", title: "Thoracoscopy" },
    { icon: "fa-heartbeat", title: "Pulmonary Rehabilitation" },
];

const doctors = [
    { img: pulmodoc1, name: "Dr. Shameer Babu" },
    { img: pulmodoc2, name: "Dr. Karthik" },
];

const Pulmonology = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${PulmonologyHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Pulmonology</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-lungs me-2"></i>
                            Department
                        </span>

                        <h1>Pulmonology</h1>
                        <p>
                            Widely recognized for providing the highest standard of care
                            and expertise in diagnosing and treating conditions affecting
                            the respiratory system, across all age groups.
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
                                    <i className="fa fa-lungs"></i>
                                </div>
                                <h3>Respiratory Care</h3>
                                <p>From the nose to the lungs and respiratory muscles</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-notes-medical"></i>
                                </div>
                                <h3>Comprehensive Programs</h3>
                                <p>Asthma, COPD, ILD, TB, lung cancer & more</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Expert Specialists</h3>
                                <p>Leaders in the field with patient-centered care</p>
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
                                <img src={pulmonologyAbout} alt="Pulmonology" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Excellence in Respiratory Care</h2>

                                <div className="gm-about-highlight">
                                    <p>
                                        Our Department of Pulmonology is widely recognized for
                                        providing the highest standard of care and expertise in
                                        diagnosing and treating conditions affecting the
                                        respiratory system, playing a pivotal role in the
                                        prevention, early detection, diagnosis, and treatment of
                                        pulmonary diseases across all age groups.
                                    </p>
                                </div>

                                <p>
                                    Pulmonology encompasses the diagnosis and treatment of
                                    conditions affecting the respiratory system, which includes
                                    the various components from the nose to the lungs and
                                    respiratory muscles. Specializing in disorders of the
                                    lungs, airways, and respiratory muscles, our comprehensive
                                    pulmonary medicine programs address a wide range of
                                    conditions such as asthma, chronic obstructive pulmonary
                                    disease, sleep-disordered breathing, interstitial lung
                                    disease, cystic fibrosis, occupational lung diseases,
                                    pulmonary rehabilitation, tuberculosis, lung cancers, and a
                                    dedicated smoking cessation program.
                                </p>
                                <p>
                                    What truly sets us apart is the expertise and dedication of
                                    our specialists, who are not only leaders in the field but
                                    also compassionate caregivers committed to improving the
                                    lives of those they serve.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Asthma &amp; COPD Care</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Sleep Disorder Clinic</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Bronchoscopy &amp; Biopsy</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Pulmonary Rehabilitation</span>
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
                            A complete range of diagnostic and therapeutic pulmonology
                            services under one roof.
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
                        <h2>Our Pulmonology Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to your
                            respiratory health and recovery.
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
                                            Pulmonology Specialist
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
                                <h2>Need Pulmonology Consultation?</h2>
                                <p>
                                    Our experienced pulmonology team is here to help you
                                    breathe easier with expert diagnosis, treatment, and
                                    rehabilitation.
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
                                        Comprehensive Diagnostic &amp; Therapeutic Care
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Advanced Bronchoscopy &amp; Biopsy Procedures
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Dedicated Smoking Cessation Program
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

export default Pulmonology;