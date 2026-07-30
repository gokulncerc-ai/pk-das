import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./FertilityClinic.css";
import FertilityClinicHero from "../../../assets/Images/FertilityClinic/FertilityClinicHero.jpg";
import fertilityClinicAbout from "../../../assets/Images/FertilityClinic/fertilityClinicAbout.jpg";
import fertilitydoc1 from "../../../assets/Images/FertilityClinic/fertilitydoc1.webp";
import fertilitydoc2 from "../../../assets/Images/FertilityClinic/fertilitydoc2.avif";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const services = [
    { icon: "fa-chart-line", title: "Complete Fertility Workup & Treatment" },
    { icon: "fa-user-friends", title: "Single Day Evaluation of Male & Female Factors" },
    { icon: "fa-procedures", title: "Diagnostic & Operative Laparo-Hysteroscopy" },
    { icon: "fa-syringe", title: "Intra Uterine Insemination" },
    { icon: "fa-vial", title: "In-Vitro Fertilization (IVF)" },
    { icon: "fa-microscope", title: "ICSI, TESA & PESA for Male Infertility" },
    { icon: "fa-snowflake", title: "Sperm & Embryo Freezing" },
];

const doctors = [
    {
        img: fertilitydoc1,
        name: "Dr. Metthew Wood",
        designation: "Senior Doctor at PKDIMS",
    },
    {
        img: fertilitydoc2,
        name: "Dr. Roy Coleman",
        designation: "Fertility Clinic [IVF] Specialist",
    },
];

const FertilityClinic = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${FertilityClinicHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Fertility Clinic Services</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-baby me-2"></i>
                            Department
                        </span>

                        <h1>Fertility Clinic [IVF]</h1>
                        <p>
                            One of the leading IVF centres in Kerala, delivering
                            cutting-edge scientific and medical expertise with
                            unparalleled care, confidentiality, and affordability.
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
                                    <i className="fa fa-chart-line"></i>
                                </div>
                                <h3>High Success Rates</h3>
                                <p>On par with national and international standards</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Expert Specialists</h3>
                                <p>Highly specialized and experienced fertility team</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-hand-holding-heart"></i>
                                </div>
                                <h3>Compassionate Care</h3>
                                <p>Personalized attention throughout your journey</p>
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
                                <img src={fertilityClinicAbout} alt="Fertility Clinic [IVF]" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>A Leading IVF Centre in Kerala</h2>
                                <p>
                                    Our Fertility clinic is one of the leading IVF Centres in
                                    Kerala with a high success rate. Our clinic takes pride in
                                    delivering cutting-edge scientific and medical expertise,
                                    coupled with unparalleled care, confidentiality, and
                                    affordability. Our team of highly specialized and
                                    experienced fertility specialists is dedicated to
                                    providing personalized attention and compassionate
                                    support throughout your journey to parenthood.
                                </p>
                                <p>
                                    With a steadfast adherence to ethical practices and a
                                    patient-centric approach, we prioritize your physical and
                                    mental well-being, striving to make your dreams of
                                    building a family a reality. Our state-of-the-art
                                    facilities, advanced technology, and innovative
                                    treatments ensure that you receive the best possible care.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>In-Vitro Fertilization</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Intra Uterine Insemination</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Male Infertility Treatment</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Sperm & Embryo Freezing</span>
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
                        <span>Highlights</span>
                        <h2>Services Offered</h2>
                        <p>
                            A complete range of fertility evaluation and treatment
                            options, backed by advanced technology and experienced
                            specialists.
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
                        <h2>Our Fertility Clinic [IVF] Specialists</h2>
                        <p>
                            Dedicated specialists guiding you with expertise and
                            compassion on your journey to parenthood.
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
                                            {doc.designation}
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
                                <h2>Ready to Begin Your Fertility Journey?</h2>
                                <p>
                                    Our experienced fertility team is here to guide you with
                                    personalized, compassionate care every step of the way
                                    towards building your family.
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
                                        High Success Rate IVF Treatments
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Single Day Male & Female Fertility Evaluation
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Confidential, Patient-Centric Care
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

export default FertilityClinic;