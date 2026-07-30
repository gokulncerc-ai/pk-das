import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./Radiology.css";
import RadiologyHero from "../../../assets/Images/RadiologyHero.jpg";
import radiologyAbout from "../../../assets/Images/radiologyAbout.avif";
import radiodoc1 from "../../../assets/Images/radiodoc1.webp";
import radiodoc2 from "../../../assets/Images/radiodoc2.webp";
import radiodoc3 from "../../../assets/Images/radiodoc3.webp";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const serviceGroups = [
    {
        icon: "fa-x-ray",
        title: "Digital X-ray – 600MA",
        items: [],
    },
    {
        icon: "fa-wave-square",
        title: "USG & Colour Doppler",
        items: [],
    },
    {
        icon: "fa-circle-notch",
        title: "CT – 64 Slice",
        items: [
            "CT Angiogram",
            "Brain, Abdomen, Thorax",
            "HRCT Chest",
            "CT Urogram",
            "Fistulogram",
            "Whole Spine",
        ],
    },
    {
        icon: "fa-magnet",
        title: "MRI – 1.5T",
        items: [
            "Brain including TOF 4ASL",
            "Perfusion studies & DTI",
            "Spectroscopy",
            "Whole Spine",
            "Abdomen & Pelvis",
            "MRCP",
            "MSK – Shoulder, Knee, Elbow, Wrist",
            "Fistulogram",
            "Breast & Prostate Dynamic Control Studies",
        ],
    },
    {
        icon: "fa-syringe",
        title: "Interventional Radiology",
        items: [
            "Biopsies – USG & CT Guided",
            "Percutaneous Drainage Procedures – USG & CT Guided",
            "Embolisation Procedure – Fibroid, Bronchial, Vascular Malformation",
            "Thrombolysis",
            "Angioplasty & Stenting",
            "Varicose Vein Management",
            "Sclerotherapy",
            "Stroke Management",
        ],
    },
];

const doctors = [
    { img: radiodoc1, name: "Dr. Rajani" },
    { img: radiodoc2, name: "Dr. Vignesh" },
    { img: radiodoc3, name: "Dr. Jithin K Unni" },
];

const Radiology = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${RadiologyHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Radiology</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-x-ray me-2"></i>
                            Department
                        </span>

                        <h1>Radio Diagnosis &amp; Imaging Services</h1>
                        <p>
                            A beacon of excellence, showcasing the latest advancements in
                            medical technology to provide top-tier diagnostic and
                            interventional care for our patients.
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
                                    <i className="fa fa-x-ray"></i>
                                </div>
                                <h3>Modern Equipment</h3>
                                <p>Advanced radio-diagnostic technology for accuracy</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-syringe"></i>
                                </div>
                                <h3>Interventional Radiology</h3>
                                <p>Minimally invasive, image-guided procedures</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Expert Specialists</h3>
                                <p>Renowned for expertise, compassion & dedication</p>
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
                                <img src={radiologyAbout} alt="Radiology" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Excellence in Radio Diagnosis &amp; Imaging</h2>
                                <p>
                                    At our hospital, the Radio Diagnosis &amp; Imaging Services
                                    stand out as a beacon of excellence, showcasing the latest
                                    advancements in medical technology to provide top-tier
                                    care for our patients. With a commitment to exceptional
                                    quality and patient-centric care, we have introduced the
                                    most modern Radio-Diagnostic Equipment to enhance
                                    diagnostic accuracy and treatment efficacy.
                                </p>
                                <p>
                                    Our dedication to being the best extends to our
                                    Interventional Radiology (IR) services, a specialized
                                    field that focuses on minimally invasive, image-guided
                                    procedures. Our skilled specialists perform these
                                    procedures through tiny (&lt; 3mm) incisions, so patients
                                    experience little to no pain during the procedures.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Digital X-ray &amp; USG</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>64-Slice CT Scan</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>1.5T MRI</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Interventional Radiology</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= SERVICES OFFERED ================= */}
            <section className="gm-modalities">
                <Container>
                    <div className="gm-section-heading">
                        <span>What We Offer</span>
                        <h2>Services Offered</h2>
                        <p>
                            A complete suite of imaging modalities and interventional
                            procedures under one roof.
                        </p>
                    </div>

                    <Row className="g-4">
                        {serviceGroups.map((group, idx) => (
                            <Col lg={6} key={idx}>
                                <div className="gm-service-group">
                                    <div className="gm-service-group-header">
                                        <div className="gm-service-group-icon">
                                            <i className={`fa ${group.icon}`}></i>
                                        </div>
                                        <h4>{group.title}</h4>
                                    </div>
                                    {group.items.length > 0 && (
                                        <ul>
                                            {group.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
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
                        <h2>Our Radiology Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to accurate
                            diagnosis and effective treatment.
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
                                            Radiology Specialist
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
                                <h2>Need Radiology Consultation?</h2>
                                <p>
                                    Our experienced radiology team is here to provide accurate
                                    diagnosis and advanced interventional care with the
                                    latest imaging technology.
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
                                        64-Slice CT &amp; 1.5T MRI Imaging
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Minimally Invasive Interventional Procedures
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Experienced &amp; Compassionate Specialists
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

export default Radiology;