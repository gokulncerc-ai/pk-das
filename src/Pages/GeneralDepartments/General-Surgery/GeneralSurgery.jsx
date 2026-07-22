import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./GeneralSurgery.css";
import GeneralSurgeryHero from "../../../assets/Images/GeneralMedHero.jpg";
import surgeryAbout from "../../../assets/Images/surgery.webp";
import generaldoc1 from "../../../assets/Images/generaldoc1.webp"
import generaldoc2 from "../../../assets/Images/generaldoc2.webp"
import generaldoc3 from "../../../assets/Images/generaldoc2.webp";
import advancedmed from "../../../assets/Images/advancedmed.webp"
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const GeneralSurgery = () => {
    return (
        <>
            <Header />
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${GeneralSurgeryHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>General Surgery</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-stethoscope me-2"></i>
                            Department
                        </span>

                        <h1>General Surgery</h1>
                        <p>
                            Our surgical team consists of highly skilled and experienced
                            surgeons who are experts across a wide range of surgical
                            specialties, providing you and your loved ones with the
                            highest quality of care using the safest and most advanced
                            surgical techniques available in modern surgery.
                        </p>

                        <div className="gm-hero-buttons">
                            <Button className="gm-primary-btn">Book Appointment</Button>
                            <Button className="gm-secondary-btn">Contact Us</Button>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="gm-quick-info">
                <Container>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-hospital-o"></i>
                                </div>
                                <h3>Hi-Tech OT</h3>
                                <p>State-of-the-art operation theatres</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-flask"></i>
                                </div>
                                <h3>Laparoscopic Unit</h3>
                                <p>Full-fledged laparoscopic surgical unit</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-cutlery"></i>
                                </div>
                                <h3>Harmonic Scalpel</h3>
                                <p>Advanced precision surgical technology</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="gm-about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="gm-about-image">
                                <img src={surgeryAbout} alt="General Surgery" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Expert Surgical Care You Can Trust</h2>
                                <p>
                                    Our surgical team at PKDIMS consists of highly skilled and
                                    experienced surgeons who are experts in various surgical
                                    specialties, providing you and your loved ones with the
                                    highest quality of care with the safest and most advanced
                                    surgical techniques available in modern surgery. They have
                                    undergone extensive training and continue to stay updated
                                    on the latest advancements in surgical techniques and
                                    technology.
                                </p>
                                <p>
                                    We pride ourselves on our commitment to patient safety and
                                    satisfaction. Our surgeons take a personalized approach to
                                    each patient, carefully assessing their medical history and
                                    condition to develop a customized treatment plan that meets
                                    their individual needs.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Cosmetic Surgeries</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Trauma & RTA Surgeries</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Oral Cancer Surgeries</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Spine Surgery</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>What We Offer</span>
                        <h2>Services We Offered</h2>
                        <p>
                            A comprehensive range of surgical services delivered by
                            specialists across multiple disciplines.
                        </p>
                    </div>

                    <Row className="g-4">
                        {[
                            "Cosmetic Surgeries",
                            "Road Traffic Accident Cases Surgeries & Trauma Surgeries",
                            "Oral Cancer Surgeries",
                            "TMJ Surgeries",
                            "Tumour Surgeries",
                            "Microscopic Tumour Excision",
                            "Spine Surgery",
                            "Craniovertebral Junction Surgeries",
                            "Cervical Fixation and Discectomies",
                            "Micro Lumbar Discectomies",
                            "Spine Fixation & Spine Tumour Surgeries",
                            "Epilepsy Surgery",
                            "Breast Conservation and Reconstructive Surgeries",
                            "Anterior Temporal Lobectomies, Skull Base Surgeries & Cranioplasty",
                            "Pediatric Shunts",
                            "Keyhole Surgeries for Appendicitis, Gall Bladder Stone and Hernia",
                            "Thyroid Clinic",
                            "Management of Peripheral Vascular Disease, Varicose Vein and Diabetic Foot",
                        ].map((service, idx) => (
                            <Col md={4} sm={6} key={idx}>
                                <div className="gm-feature-card">
                                    <div className="gm-feature-icon">
                                        <i className="fa fa-medkit"></i>
                                    </div>
                                    <h4>{service}</h4>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="gm-advantages">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="gm-advantages-image">
                                <img src={surgeryAbout} alt="Surgical Procedures" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-advantages-content">
                                <span className="gm-section-tag">Our Expertise</span>
                                <h2>We Are Doing</h2>
                                <p>
                                    Our team performs a wide range of surgical procedures using
                                    the latest minimally invasive and diagnostic techniques.
                                </p>

                                <Row className="g-3">
                                    {[
                                        "Laparoscopic Surgeries",
                                        "All Types of Hernia & General Surgeries",
                                        "Diagnostic & Therapeutic Laparoscopy in Accident Cases",
                                        "Thyroid, Parotid & Varicose Vein Surgery",
                                        "Stapler Haemorrhoidectomy",
                                        "Gastroenterological Surgeries",
                                        "Cancer Surgeries incl. Head & Neck Surgery and Reconstruction",
                                    ].map((item, idx) => (
                                        <Col sm={6} key={idx}>
                                            <div className="gm-advantage-card">
                                                <i className="fa fa-arrow-circle-right"></i>
                                                <span>{item}</span>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="gm-specialists">
                <Container>
                    <div className="gm-section-heading">
                        <span>Meet Our Team</span>
                        <h2>Our General Surgery Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to your surgical
                            care and recovery.
                        </p>
                    </div>

                    <Row className="g-4">
                        {[
                            { img: generaldoc1, name: "Dr. Sudhir U K" },
                            { img: generaldoc2, name: "Dr. Reghusankar" },
                            { img: generaldoc3, name: "Dr. Joshua C.C" },
                        ].map((doc, idx) => (
                            <Col md={4} key={idx}>
                                <div className="gm-doctor-card">
                                    <div className="gm-doctor-image">
                                        <img src={doc.img} alt={doc.name} />
                                        <span className="gm-experience">Specialist</span>
                                    </div>
                                    <div className="gm-doctor-content">
                                        <span className="gm-doctor-designation">
                                            General Surgery Specialist
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

            <section className="gm-cta">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <div className="gm-cta-content">
                                <span className="gm-section-tag">Get Started</span>
                                <h2>Need Surgical Consultation?</h2>
                                <p>
                                    Our experienced surgical team is here to guide you through
                                    every step of your treatment journey, from diagnosis to
                                    recovery.
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
                                        24/7 Emergency Surgical Care
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Experienced Specialist Surgeons
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Advanced Minimally Invasive Techniques
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

export default GeneralSurgery;