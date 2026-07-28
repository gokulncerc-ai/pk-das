import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./Psychiatry.css";
import PsychiatryHero from "../../../assets/Images/PsychiatryHero.avif";
import psychiatryAbout from "../../../assets/Images/psychiatryAbout.jpg";
import psychdoc1 from "../../../assets/Images/psychdoc1.avif";
import psychdoc2 from "../../../assets/Images/psychdoc2.avif";
import psychdoc3 from "../../../assets/Images/psychdoc3.avif";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const servicesRenderedLeft = [
    "Adult Psychiatry",
    "Geriatric Psychiatry",
    "Child & Adolescent Psychiatry",
];

const servicesRenderedRight = [
    "De-addiction Services",
    "M-ECT",
    "Ketamine Therapy",
];

const otherServicesLeft = [
    "Premarital Counseling",
    "Couple Therapy",
    "Family Therapy",
    "Cognitive Behavioral Therapy",
];

const otherServicesRight = [
    "Dialectical Behavioral Therapy",
    "Sensate Focus Therapy",
    "Psychometric Assessment",
    "Behavioral Therapy (Psychotherapy)",
];

const detailBlocks = [
    {
        title: "Adult Psychiatry",
        text: "At our hospital, we specialize in geriatric psychiatry, addressing the unique behavioural challenges that often accompany aging, particularly in conjunction with other medical conditions. With a focus on enhancing the mental well-being of our elderly patients, our dedicated team of specialized doctors and specialists is adept at managing and treating the complexities of geriatric psychiatric disorders.",
    },
    {
        title: "De-Addiction Services",
        text: "We offer comprehensive de-addiction services aimed at combating dependencies on psychoactive substances and drugs. Additionally, we provide specialized assistance in overcoming behavioural addictions, such as those related to gaming and internet usage.",
    },
    {
        title: "Ketamine Therapy",
        text: "We proudly offer Ketamine Therapy, a cutting-edge pharmacological intervention designed to rapidly alleviate treatment-resistant depression. Our specialized doctors and experts are at the forefront of this innovative treatment approach.",
    },
    {
        title: "M-ECT Services",
        text: "We offer M-ECT services, a safe and ethical procedure conducted under general anaesthesia in accordance with the Mental Health Act. Our team ensures the highest standards of care throughout the treatment process.",
    },
    {
        title: "Child & Adolescent Psychiatry",
        text: "Our expertise encompasses the diagnosis and treatment of psychiatric issues affecting the pediatric population, addressing common childhood challenges and providing guidance on recognizing warning signs.",
    },
    {
        title: "Geriatric Psychiatry",
        text: "Behavioural problems of old age in association with other medical disorders, managed with a focus on enhancing the mental well-being of elderly patients.",
    },
];

const doctors = [
    { img: psychdoc1, name: "Dr. Linus Francis" },
    { img: psychdoc2, name: "Dr. Vinuprasad V G" },
    { img: psychdoc3, name: "Dr. Meera Ramanath" },
];

const Psychiatry = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${PsychiatryHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Psychiatry</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-brain me-2"></i>
                            Department
                        </span>

                        <h1>Psychiatry &amp; Behavioral Sciences</h1>
                        <p>
                            We offer unparalleled expertise in psychiatry and behavioral
                            sciences, providing a wide range of comprehensive health
                            services tailored to meet the diverse needs of our patients.
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
                                <h3>Outpatient &amp; Inpatient</h3>
                                <p>Consultations, inpatient care, and interventional therapies</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-comments"></i>
                                </div>
                                <h3>Counseling Sessions</h3>
                                <p>Personalized treatment approaches for every patient</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-heartbeat"></i>
                                </div>
                                <h3>Specialized Care</h3>
                                <p>Dedicated team of specialized doctors and specialists</p>
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
                                <img src={psychiatryAbout} alt="Psychiatry and Behavioral Sciences" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Psychiatry and Behavioral Sciences</h2>
                                <p>
                                    At our hospital, we offer unparalleled expertise in
                                    psychiatry and behavioral sciences, providing a wide range
                                    of comprehensive health services tailored to meet the
                                    diverse needs of our patients. Whether it's outpatient
                                    consultations, inpatient care, interventional therapies, or
                                    counseling sessions, our dedicated team of specialized
                                    doctors and specialists ensures that each individual
                                    receives the highest standard of care.
                                </p>
                                <p>
                                    With our unwavering commitment to excellence and a focus
                                    on personalized treatment approaches, we strive to be the
                                    premier destination for mental health care, delivering
                                    optimal outcomes and support to every patient we serve.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Adult &amp; Geriatric Psychiatry</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Child &amp; Adolescent Care</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>De-Addiction Services</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>M-ECT &amp; Ketamine Therapy</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= SERVICES RENDERED ================= */}
            <section className="gm-services-list">
                <Container>
                    <div className="gm-section-heading">
                        <span>What We Offer</span>
                        <h2>Services Rendered</h2>
                        <p>
                            A complete range of psychiatric services covering every stage
                            of life and every level of care.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col md={6}>
                            <div className="gm-list-card">
                                <ul>
                                    {servicesRenderedLeft.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fa fa-arrow-circle-right"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="gm-list-card">
                                <ul>
                                    {servicesRenderedRight.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fa fa-arrow-circle-right"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= DETAILED SERVICE WRITE-UPS ================= */}
            <section className="gm-details">
                <Container>
                    <Row className="g-4">
                        {detailBlocks.map((block, idx) => (
                            <Col md={6} key={idx}>
                                <div className="gm-detail-card">
                                    <h4>{block.title}</h4>
                                    <hr />
                                    <p>{block.text}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ================= OTHER SERVICES ================= */}
            <section className="gm-services-list" style={{ paddingTop: "0" }}>
                <Container>
                    <div className="gm-section-heading">
                        <span>Additional Support</span>
                        <h2>Other Services</h2>
                    </div>

                    <Row className="g-4">
                        <Col md={6}>
                            <div className="gm-list-card">
                                <ul>
                                    {otherServicesLeft.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fa fa-arrow-circle-right"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="gm-list-card">
                                <ul>
                                    {otherServicesRight.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fa fa-arrow-circle-right"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= SPECIALISTS ================= */}
            <section className="gm-specialists">
                <Container>
                    <div className="gm-section-heading">
                        <span>Meet Our Team</span>
                        <h2>Our Psychiatry Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to your mental
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
                                            Psychiatry Specialist
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
                                <h2>Need Psychiatric Consultation?</h2>
                                <p>
                                    Our experienced psychiatry team is here to support you with
                                    compassionate, personalized care at every stage of your
                                    mental health journey.
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
                                        Comprehensive Outpatient &amp; Inpatient Care
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        De-Addiction, M-ECT &amp; Ketamine Therapy
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Personalized Counseling &amp; Family Therapy
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

export default Psychiatry;