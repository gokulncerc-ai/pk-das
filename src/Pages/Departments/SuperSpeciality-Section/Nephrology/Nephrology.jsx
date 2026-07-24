import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./Nephrology.css";
import NephrologyHero from "../../../../assets/Images/NephrologyHero.jpg";
import nephrologyAbout from "../../../../assets/Images/nephrologyAbout.avif";
import nephrodoc1 from "../../../../assets/Images/nephrodoc1.jpg";
import nephrodoc2 from "../../../../assets/Images/nephrodoc2.jpg";
import nephrodoc3 from "../../../../assets/Images/nephrodoc3.jpg";
import nephrodoc4 from "../../../../assets/Images/nephrodoc4.jpg";
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';

const servicesLeft = [
    "Acute as well as chronic hemodialysis",
    "Provision for ICU dialysis",
    "Continuous Ambulatory Peritoneal Dialysis (CAPD) and Permacath insertion",
    "USG guided Renal biopsy",
    "Pre transplant workup and Post transplant follow up",
    "Providing adequate and optimized dialysis care to end stage kidney disease patients is our priority",
    "Daily outpatient consultancy services",
    "Comprehensive nephrology care including diabetes and hypertension management",
];

const servicesRight = [
    "Plasmapheresis",
    "USG guided dialysis catheter insertion including permacath insertion",
    "USG guided kidney biopsy",
    "Continuous medical education program for doctors, staff and patients",
    "Advanced dialysis machines",
    "Well trained nursing staff and dialysis technicians",
    "Isolated dialysis facility",
    "Regular OPD for hemodialysis",
    "Structured and optimized care of our dialysis patients is our main priority",
];

const facilities = [
    "Advanced Dialysis machines",
    "Well trained nursing staff and dialysis technicians",
    "Isolated Dialysis facility",
    "Regular education programme for patients, staff and doctors",
    "Regular OPD for Hemodialysis",
    "Bedside Hemodialysis facilities and peritoneal dialysis facilities",
    "Continuous Ambulatory Peritoneal Dialysis / Permacath Insertion",
    "Continuous Arteriovenous Hemofiltration (CAVH)",
];

const doctors = [
    {
        img: nephrodoc1,
        name: "Dr. Jayaraj P.M",
        qualification: "MD, DM, MNAMS",
    },
    {
        img: nephrodoc2,
        name: "Dr. Amrutha Prabhakaran",
        qualification: "MD, DM, DrNB, MRCP (UK)",
    },
    {
        img: nephrodoc3,
        name: "Dr. Gopika Gopal S",
        qualification: "MD, DNB, DM",
    },
    {
        img: nephrodoc4,
        name: "Dr. Kavitha K",
        qualification: "MD, DNB, DrNB",
    },
];

const Nephrology = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${NephrologyHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/speciality-departments">
                                Speciality Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Nephrology</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-tint me-2"></i>
                            Department
                        </span>

                        <h1>Nephrology Services</h1>
                        <p>
                            Our hospital comprises an expert team of Nephrology doctors
                            who bring decades of experience in diagnosing, treating and
                            managing acute and chronic kidney disease.
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
                                    <i className="fa fa-tint"></i>
                                </div>
                                <h3>Dialysis Centre</h3>
                                <p>Fresenius 4008 S dialysis machines</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-heartbeat"></i>
                                </div>
                                <h3>Transplant Care</h3>
                                <p>Pre & post transplant follow-up</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Expert Nephrologists</h3>
                                <p>Skilled and experienced specialist team</p>
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
                                <img src={nephrologyAbout} alt="Nephrology Department" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Comprehensive Kidney Care</h2>

                                <div className="gm-about-highlight">
                                    <p>
                                        Nephrology is a department that deals with the
                                        diagnosis, treatment and management of acute and
                                        chronic kidney problems and diseases, along with
                                        associated issues like high blood pressure, fluid
                                        retention, and electrolyte and mineral imbalances.
                                    </p>
                                </div>

                                <p>
                                    Our nephrologists are also in charge of kidney dialysis
                                    treatment, kidney transplants, and their follow-up care.
                                    We have a well-equipped Dialysis Centre with Fresenius
                                    4008 S machines, supported by well trained staff and
                                    dialysis technicians.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Hemodialysis & CAPD</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Renal Biopsy</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Transplant Workup</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Plasmapheresis</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= SERVICES RENDERED ================= */}
            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>What We Offer</span>
                        <h2>Services Rendered</h2>
                        <p>
                            A complete range of nephrology and dialysis services
                            delivered with expertise and compassion.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="gm-list-card">
                                <ul className="gm-check-list">
                                    {servicesLeft.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fa fa-arrow-circle-right"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-list-card">
                                <ul className="gm-check-list">
                                    {servicesRight.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fa fa-arrow-circle-right"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= FACILITIES ================= */}
            <section className="gm-about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <span className="gm-section-tag">Infrastructure</span>
                            <h2 className="gm-facilities-heading">Our Facilities</h2>
                            <p className="gm-facilities-text">
                                Our Dialysis Centre is designed to provide safe,
                                structured, and optimized care for every patient, backed
                                by advanced equipment and a dedicated clinical team.
                            </p>
                        </Col>
                        <Col lg={7}>
                            <div className="gm-list-card">
                                <Row className="g-3">
                                    <Col sm={6}>
                                        <ul className="gm-check-list gm-check-list-compact">
                                            {facilities.slice(0, 4).map((item, idx) => (
                                                <li key={idx}>
                                                    <i className="fa fa-arrow-circle-right"></i>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                    <Col sm={6}>
                                        <ul className="gm-check-list gm-check-list-compact">
                                            {facilities.slice(4).map((item, idx) => (
                                                <li key={idx}>
                                                    <i className="fa fa-arrow-circle-right"></i>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                </Row>
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
                        <h2>Our Nephrology Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to your kidney
                            health and well-being.
                        </p>
                    </div>

                    <Row className="g-4">
                        {doctors.map((doc, idx) => (
                            <Col lg={3} md={6} key={idx}>
                                <div className="gm-doctor-card">
                                    <div className="gm-doctor-image">
                                        <img src={doc.img} alt={doc.name} />
                                        <span className="gm-experience">Specialist</span>
                                    </div>
                                    <div className="gm-doctor-content">
                                        <span className="gm-doctor-designation">
                                            Nephrology Specialist
                                        </span>
                                        <h3>{doc.name}</h3>
                                        <p className="gm-doctor-qualification">
                                            {doc.qualification}
                                        </p>
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
                                <h2>Need a Nephrology Consultation?</h2>
                                <p>
                                    Our dedicated nephrology team is here to guide you
                                    through every stage of kidney care, from routine
                                    consultations to dialysis and transplant follow-up.
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
                                        Advanced Dialysis Machines
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Isolated Dialysis Facility
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Pre & Post Transplant Care
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Nephrology;