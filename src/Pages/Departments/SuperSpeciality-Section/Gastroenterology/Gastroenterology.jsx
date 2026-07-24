import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./Gastroenterology.css";
import GastroenterologyHero from "../../../../assets/Images/GastroenterologyHero.jpg";
import gastroAbout from "../../../../assets/Images/gastroAbout.avif";
import gastrodoc1 from "../../../../assets/Images/gastrodoc1.webp";
import gastrodoc2 from "../../../../assets/Images/gastrodoc2.jpg";
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';

const diagnosticProcedures = [
    "Oesophago Gastro Duodenoscopy with Biopsy and RUT",
    "Colonoscopy and Sigmoidoscopy with Biopsy",
    "Capsule Endoscopy",
    "Side Viewing Endoscopy",
];

const therapeuticProcedures = [
    "ERCP (Endoscopic Retrograde Cholangio Pancreatography)",
    "Polypectomy",
    "Foreign Body Removal",
    "CRE - Controlled Radial Expansion",
    "Balloon Dilatation (Luminal and Biliary)",
    "Bougie Dilatation (Savary Gilliard)",
    "SEMS - Self Expanding Metallic Stenting (Luminal and Biliary)",
    "PEG - Percutaneous Endoscopic Gastrostomy",
    "ARMA (Anti Reflux Mucosal Ablation) and other ablative procedures",
    "Hemorrhoidal Banding",
    "TACE",
    "TIPS",
    "BRTO / PARTO",
];

const hemostaticProcedures = [
    "EVBL - Endoscopic Variceal Band Ligation",
    "Sclerotherapy",
    "Glue Injection",
    "APC - Argon Plasma Coagulation",
    "Hemospray",
    "Spray Coagulation",
    "Hemoclipping",
];

const doctors = [
    {
        img: gastrodoc1,
        name: "Dr. Satheesh A Vasudevan",
        qualification: "MD, DAA, DrNB, MNAMS",
        designation: "Senior Consultant",
    },
    {
        img: gastrodoc2,
        name: "Dr. Aboobaker Ahmad",
        qualification: "MBBS, MD, DrNB",
        designation: "Assistant Professor",
    },
];

const Gastroenterology = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${GastroenterologyHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/speciality-departments">
                                Speciality Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Gastroenterology</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-stethoscope me-2"></i>
                            Department
                        </span>

                        <h1>Gastroenterology Services</h1>
                        <p>
                            At PK Das Institute of Medical Sciences, our Gastroenterology
                            department offers comprehensive, cutting-edge care through
                            both outpatient and inpatient facilities, staffed by esteemed
                            gastroenterologists and a dedicated care team.
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
                                    <i className="fa fa-search"></i>
                                </div>
                                <h3>Advanced Endoscopy</h3>
                                <p>State-of-the-art diagnostic endoscopic services</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-medkit"></i>
                                </div>
                                <h3>Therapeutic Care</h3>
                                <p>Wide range of interventional GI procedures</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Expert Gastroenterologists</h3>
                                <p>Skilled hepatology & GI specialist team</p>
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
                                <img src={gastroAbout} alt="Gastroenterology Department" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Advanced Digestive & Liver Care</h2>

                                <div className="gm-about-highlight">
                                    <p>
                                        Gastroenterology, a medical specialty focused on the
                                        digestive system and its disorders, has witnessed
                                        significant advancements over the past two decades,
                                        leading to subspecialties such as hepatology,
                                        pancreatology, and therapeutic endoscopy.
                                    </p>
                                </div>

                                <p>
                                    At PKDIMS, we embrace a multidisciplinary approach to
                                    prevent, diagnose, and treat gastrointestinal, liver,
                                    and pancreatic disorders, including cancer, ensuring
                                    advanced care at an affordable cost.
                                </p>
                                <p>
                                    With a dedicated team of doctors and staff, we provide
                                    a caring and comfortable environment, delivering
                                    exceptional healthcare services in a friendly and
                                    professional manner. Our state-of-the-art endoscopic
                                    services and innovative disease management approach
                                    further underscore our commitment to excellence.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Advanced Endoscopy Suite</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Hepatology Care</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Therapeutic Procedures</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Affordable, Patient-Centred Care</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= DIAGNOSTIC & THERAPEUTIC PROCEDURES ================= */}
            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>Centre for Gastroenterology and Hepatic Disorders</span>
                        <h2>Diagnostic & Therapeutic Procedures</h2>
                        <p>
                            A comprehensive range of diagnostic, therapeutic and
                            hemostatic endoscopic procedures for digestive, liver and
                            pancreatic care.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col lg={4}>
                            <div className="gm-list-card">
                                <h4>1. Diagnostic Procedures</h4>
                                <ul className="gm-check-list">
                                    {diagnosticProcedures.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fa fa-arrow-circle-right"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="gm-list-card">
                                <h4>2. Therapeutic Procedures</h4>
                                <ul className="gm-check-list">
                                    {therapeuticProcedures.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fa fa-arrow-circle-right"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="gm-list-card">
                                <h4>3. Hemostatic Procedures</h4>
                                <ul className="gm-check-list">
                                    {hemostaticProcedures.map((item, idx) => (
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

            {/* ================= SPECIALISTS ================= */}
            <section className="gm-specialists">
                <Container>
                    <div className="gm-section-heading">
                        <span>Meet Our Team</span>
                        <h2>Our Gastroenterology Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to your
                            digestive and liver health.
                        </p>
                    </div>

                    <Row className="g-4 justify-content-center">
                        {doctors.map((doc, idx) => (
                            <Col md={6} lg={5} key={idx}>
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
                                <h2>Need a Gastroenterology Consultation?</h2>
                                <p>
                                    Our dedicated gastroenterology team is here to guide
                                    you through every stage of digestive and liver care,
                                    from diagnosis to advanced endoscopic treatment.
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
                                        Advanced Diagnostic & Therapeutic Endoscopy
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Comprehensive Hepatology & Pancreatology Care
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Affordable, Patient-Centred Treatment
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

export default Gastroenterology;