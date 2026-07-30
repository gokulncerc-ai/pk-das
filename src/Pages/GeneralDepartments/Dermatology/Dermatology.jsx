import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./Dermatology.css";
import DermatologyHero from "../../../assets/Images/DermatologyHero.jpg";
import dermatologyAbout from "../../../assets/Images/dermatologyAbout.webp";
import dermadoc1 from "../../../assets/Images/dermadoc1.avif";
import dermadoc2 from "../../../assets/Images/dermadoc2.avif";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const facilities = [
    { icon: "fa-stethoscope", title: "Clinical Dermatology" },
    { icon: "fa-user-md", title: "Acne Scar Treatment" },
    { icon: "fa-magic", title: "Hair Re-growth Treatment" },
    { icon: "fa-tint", title: "PRP Treatment" },
    { icon: "fa-syringe", title: "PRP with Micro Needling" },
    { icon: "fa-flask", title: "Chemical Peels" },
    { icon: "fa-sun-o", title: "Phototherapy" },
    { icon: "fa-eye", title: "Vitiligo Surgery" },
    { icon: "fa-hand-paper-o", title: "Nail Treatment" },
    { icon: "fa-circle-o", title: "Skin Tag, Warts, Mole, DPN Treatment" },
    { icon: "fa-female", title: "Melasma Treatment" },
    { icon: "fa-scissors", title: "Alopecia Treatment" },
    { icon: "fa-bolt", title: "Electro Surgery" },
    { icon: "fa-bandage-o", title: "Scar Revision" },
    { icon: "fa-wifi", title: "Radio Frequency" },
    { icon: "fa-battery-half", title: "Iontophoresis" },
    { icon: "fa-heartbeat", title: "Vampire Face Lift" },
    { icon: "fa-medkit", title: "Botox Treatment" },
    { icon: "fa-leaf", title: "Skin Rejuvenation" },
    { icon: "fa-shoe-prints", title: "Corns & Callosity Treatment" },
    { icon: "fa-vial", title: "Autologous Serum Therapy" },
];

const doctors = [
    { img: dermadoc1, name: "Dr. Snigdha" },
    { img: dermadoc2, name: "Dr. Neena" },
];

const Dermatology = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${DermatologyHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Dermatology</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-user-md me-2"></i>
                            Department
                        </span>

                        <h1>Dermatology</h1>
                        <p>
                            Dedicated to the diagnosis, treatment, and management of a wide
                            range of skin diseases and related conditions, extending
                            expertise to the care of hair, nails, and mucous membranes.
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
                                    <i className="fa fa-stethoscope"></i>
                                </div>
                                <h3>Clinical Care</h3>
                                <p>Comprehensive care for all types of skin conditions</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-magic"></i>
                                </div>
                                <h3>Advanced Treatments</h3>
                                <p>Latest advancements in dermatological technology</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-users"></i>
                                </div>
                                <h3>Care for All Ages</h3>
                                <p>Dedicated sections for every age group and condition</p>
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
                                <img src={dermatologyAbout} alt="Dermatology" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>A Cornerstone of Excellence in Skin Care</h2>

                                <div className="gm-about-highlight">
                                    <p>
                                        The Department of Dermatology stands as a cornerstone of
                                        excellence, dedicated to the diagnosis, treatment, and
                                        management of a wide array of skin diseases and related
                                        conditions.
                                    </p>
                                </div>

                                <p>
                                    Dermatology, a vital branch of medical science, encompasses
                                    not only the identification and treatment of skin ailments
                                    but also extends its expertise to the care of hair, nails,
                                    and mucous membranes, including those of the mouth and
                                    genitals.
                                </p>
                                <p>
                                    Within the Department of Dermatology at PK Das Institute of
                                    Medical Sciences, dedicated sections cater to different
                                    types of dermatitis and skin diseases, ensuring
                                    comprehensive care for patients of all ages. We take pride
                                    in offering a full spectrum of clinical services, utilizing
                                    the latest advancements in dermatological treatments.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Clinical Dermatology</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Advanced Laser & PRP Care</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Hair & Nail Treatments</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Cosmetic Dermatology</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= FACILITIES ================= */}
            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>What We Offer</span>
                        <h2>Facilities Available</h2>
                        <p>
                            A comprehensive range of dermatological facilities and
                            treatments backed by experienced specialists.
                        </p>
                    </div>

                    <Row className="g-4">
                        {facilities.map((item, idx) => (
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
                        <h2>Our Dermatology Specialists</h2>
                        <p>
                            Committed to delivering personalized and effective care to
                            every patient.
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
                                            Dermatology Specialist
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
                                <h2>Need Dermatology Consultation?</h2>
                                <p>
                                    Our experienced dermatology team is here to help you with
                                    personalized skin, hair, and nail care backed by the
                                    latest treatment technology.
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
                                        Full Spectrum of Clinical Dermatology Services
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Advanced Laser, PRP & Cosmetic Treatments
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Care for Patients of All Ages
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

export default Dermatology;