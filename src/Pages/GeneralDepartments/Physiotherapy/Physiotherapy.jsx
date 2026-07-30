import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./Physiotherapy.css";
import PhysiotherapyHero from "../../../assets/Images/PhysiotherapyHero.jpg";
import physiotherapyAbout from "../../../assets/Images/physiotherapyAbout.avif";
import physiodoc1 from "../../../assets/Images/physiodoc1.webp";
import physiodoc2 from "../../../assets/Images/physiodoc2.webp";
import physiodoc3 from "../../../assets/Images/physiodoc3.webp";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const services = [
    { icon: "fa-bone", title: "Musculoskeletal/Orthopaedic Physiotherapy & Rehab" },
    { icon: "fa-brain", title: "Neuro & Ortho Rehabilitation" },
    { icon: "fa-heartbeat", title: "Cardiorespiratory Rehabilitation" },
    { icon: "fa-procedures", title: "Critical Care Physiotherapy" },
    { icon: "fa-running", title: "Sports and Fitness Physio" },
    { icon: "fa-baby", title: "Pediatrics and Neonatal Physio" },
    { icon: "fa-user-md", title: "Geriatric Physio & Rehab" },
    { icon: "fa-female", title: "Gynecological Physiotherapy" },
    { icon: "fa-lungs", title: "Chest Physiotherapy" },
    { icon: "fa-cut", title: "Plastic Surgery Rehabilitation" },
    { icon: "fa-shield-virus", title: "Post Covid-19 Rehabilitation" },
];

const doctors = [
    { img: physiodoc1, name: "Shafeeq" },
    { img: physiodoc2, name: "Supriya" },
    { img: physiodoc3, name: "Archana" },
];

const Physiotherapy = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${PhysiotherapyHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Physiotherapy</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-walking me-2"></i>
                            Department
                        </span>

                        <h1>Physiotherapy</h1>
                        <p>
                            A cornerstone of our commitment to holistic healthcare,
                            harnessing the power of physical approaches to treat, prevent,
                            and manage a wide spectrum of health conditions.
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
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Skilled Specialists</h3>
                                <p>Organized under various core physiotherapy specialties</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-hand-holding-medical"></i>
                                </div>
                                <h3>Personalized Care</h3>
                                <p>Tailored treatment plans for every patient's needs</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-dumbbell"></i>
                                </div>
                                <h3>Proven Techniques</h3>
                                <p>Manual therapy, exercise & advanced modalities</p>
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
                                <img src={physiotherapyAbout} alt="Physiotherapy" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>A Cornerstone of Holistic Healthcare</h2>
                                <p>
                                    At our hospital, the Physiotherapy Department stands as a
                                    cornerstone of our commitment to holistic healthcare. We
                                    firmly believe in the power of physical approaches to not
                                    only treat but also prevent and manage a wide spectrum of
                                    health conditions. Our approach is comprehensive,
                                    addressing the unique needs of each patient while
                                    considering variations in health conditions and individual
                                    circumstances.
                                </p>
                                <p>
                                    We take pride in our proactive approach to physiotherapy,
                                    emphasizing early intervention and personalized treatment
                                    plans. Through tried and tested methods, we aim to restore
                                    movement, function, and overall quality of life for our
                                    patients. From manual therapy and exercise prescription to
                                    cutting-edge modalities and technologies, we utilize a
                                    diverse range of techniques to achieve optimal outcomes.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Musculoskeletal Rehab</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Neuro &amp; Cardio Rehab</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Sports &amp; Fitness Physio</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Pediatric &amp; Geriatric Care</span>
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
                            A comprehensive range of physiotherapy specialties tailored to
                            every stage of life and every type of recovery.
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
                        <h2>Our Physiotherapy Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to your recovery
                            and long-term mobility.
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
                                            Physiotherapy Specialist
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
                                <h2>Need Physiotherapy Consultation?</h2>
                                <p>
                                    Our experienced physiotherapy team is here to help you
                                    restore movement, function, and overall quality of life
                                    through personalized care.
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
                                        Rehabilitation Across All Core Specialties
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Early Intervention &amp; Personalized Plans
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Manual Therapy &amp; Advanced Modalities
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

export default Physiotherapy;