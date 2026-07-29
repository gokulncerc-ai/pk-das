import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./OBG.css";
import OBGHero from "../../../assets/Images/obg/OBGHero.jpg";
import obgAbout from "../../../assets/Images/obg/obgAbout.jpg";
import obgdoc1 from "../../../assets/Images/obg/obgdoc1.webp";
import obgdoc2 from "../../../assets/Images/obg/obgdoc2.webp";
import obgdoc3 from "../../../assets/Images/obg/obgdoc3.webp";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const services = [
    { icon: "fa-heartbeat", title: "High-Risk Pregnancy Management Clinic" },
    { icon: "fa-female", title: "Gynecological Laparoscopic Surgeries" },
    { icon: "fa-clinic-medical", title: "Day Care Facilities" },
    { icon: "fa-syringe", title: "Endometrial Sampling (Pipelle Biopsy & D&C)" },
    { icon: "fa-heart", title: "Electronic Fetal Monitoring" },
    { icon: "fa-baby-carriage", title: "Family Planning Clinic" },
    { icon: "fa-user-md", title: "Diagnostic Laparoscopy & Hysteroscopy" },
    { icon: "fa-notes-medical", title: "Infertility Workup & Treatment" },
    { icon: "fa-microscope", title: "Cancer Detection (Pap Smear & Biopsy)" },
    { icon: "fa-child", title: "Adolescent Clinic (PCOD & Menstrual Care)" },
    { icon: "fa-procedures", title: "Advanced Gynecological Surgeries" },
];

const doctors = [
    { img: obgdoc1, name: "Dr. Valson H" },
    { img: obgdoc2, name: "Dr. Thulasi P" },
    { img: obgdoc3, name: "Dr. Rahul K" },
];

const OBG = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${OBGHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>OBG Services</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-female me-2"></i>
                            Department
                        </span>

                        <h1>Obstetrics &amp; Gynecology</h1>
                        <p>
                            Round-the-clock care from experienced doctors and nursing
                            staff, managing routine and high-risk cases with precision
                            and compassion.
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
                                <h3>24×7 Care</h3>
                                <p>Round-the-clock obstetric and gynecological services</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-heartbeat"></i>
                                </div>
                                <h3>High-Risk Expertise</h3>
                                <p>Precise management of complex pregnancy cases</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Advanced Laparoscopy</h3>
                                <p>Laparoscopy, hysteroscopy & minimally invasive care</p>
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
                                <img src={obgAbout} alt="Obstetrics & Gynecology" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>A Pillar of Excellence in Women's Health</h2>
                                <p>
                                    Our Obstetrics and Gynecology department stands as a
                                    pillar of excellence, offering round-the-clock care
                                    provided by experienced and expert doctors and nursing
                                    staff. Our team is dedicated to managing both routine and
                                    high-risk cases with precision, collaborating closely
                                    with the Department of Pediatrics when necessary. In
                                    Gynecology, we specialize in handling challenging
                                    conditions such as Endometriosis, while also providing
                                    comprehensive infertility work-ups and advanced
                                    treatments including Laparoscopy and Hysteroscopy.
                                </p>
                                <p>
                                    Our range of services encompasses yearly check-ups,
                                    pre-natal care, and a variety of advanced gynecological
                                    surgeries, including laparoscopic procedures such as
                                    ovarian cystectomy, myomectomy, total laparoscopic
                                    hysterectomy (TLH), and laparoscopically assisted
                                    vaginal hysterectomy. Rest assured, we are proud to
                                    offer the best specialists in the field, ensuring that
                                    every woman receives personalized and top-tier care.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>High-Risk Pregnancy Care</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Laparoscopic Surgery</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Infertility Treatment</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Family Planning Clinic</span>
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
                            Comprehensive obstetric and gynecological care spanning
                            pregnancy management, surgery, infertility, and preventive
                            women's health.
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
                        <h2>Our Obstetrics &amp; Gynecology Specialists</h2>
                        <p>
                            Experienced specialists committed to personalized, top-tier
                            care for every stage of a woman's health journey.
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
                                            OBS &amp; GYNAEC Specialist
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
                                <h2>Need Obstetrics &amp; Gynecology Care?</h2>
                                <p>
                                    Our experienced OBG team is here to support you with
                                    personalized, round-the-clock care through every stage
                                    of pregnancy and women's health.
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
                                        24×7 High-Risk Pregnancy Management
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Advanced Laparoscopic & Hysteroscopic Surgery
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Infertility Workup, Treatment & Family Planning
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

export default OBG;