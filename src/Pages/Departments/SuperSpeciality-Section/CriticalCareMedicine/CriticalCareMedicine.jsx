import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./CriticalCareMedicine.css";
import CriticalCareHero from "../../../../assets/Images/CriticalCareMedicine/CriticalCareHero.jpg";
import criticalCareAbout from "../../../../assets/Images/CriticalCareMedicine/criticalCareAbout.jpg";
import drSuhasP from "../../../../assets/Images/CriticalCareMedicine/drSuhasP.jpeg";
import drLakshmiR from "../../../../assets/Images/CriticalCareMedicine/drLakshmiR.jpeg";
import drSayoojKS from "../../../../assets/Images/CriticalCareMedicine/drSayoojKS.jpeg";
import drMohammedAsharfKT from "../../../../assets/Images/CriticalCareMedicine/drMohammedAsharfKT.jpeg";
import drKarthikRavichandran from "../../../../assets/Images/CriticalCareMedicine/drKarthikRavichandran.jpeg";
import drNarasimhaluOmdasBhandari from "../../../../assets/Images/CriticalCareMedicine/drNarasimhaluOmdasBhandari.jpeg";
import drAriffJ from "../../../../assets/Images/CriticalCareMedicine/drAriffJ.jpeg";
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';

const monitoringFacilities = [
    "24×7 availability of trained intensivists",
    "State of the art level 6 ICU",
    "Advanced hemodynamic monitoring systems",
    "Advanced respiratory support systems including advanced ventilatory modes",
];

const specialtyCoverage = [
    "POCUS bedside ultrasound and ECHO",
    "Bedside dialysis",
    "Neurology, gastroenterology, nephrology and cardiac critical care",
    "Trauma, burns, surgical critical care and covid/post-covid care",
    "Specialized toxicology (poisoning and snake bite)",
];

const quickHighlights = [
    "24×7 Trained Intensivists",
    "Level 6 ICU",
    "Bedside Dialysis",
    "Toxicology Care",
];

const doctors = [
    {
        img: drSuhasP,
        name: "Dr. Suhas P",
        qualification: "MD, DM",
        designation: "Senior Consultant",
    },
    {
        img: drLakshmiR,
        name: "Dr. Lakshmi R",
        qualification: "MD, DM",
        designation: "Consultant",
    },
    {
        img: drSayoojKS,
        name: "Dr. Sayooj K S",
        qualification: "MD, IDCCM",
        designation: "Senior Resident",
    },
    {
        img: drMohammedAsharfKT,
        name: "Dr. Mohammed Asharf K T",
        qualification: "",
        designation: "Critical Care Specialist",
    },
    {
        img: drKarthikRavichandran,
        name: "Dr. Karthik Ravichandran",
        qualification: "",
        designation: "Critical Care Specialist",
    },
    {
        img: drNarasimhaluOmdasBhandari,
        name: "Dr. Narasimhalu Omdas Bhandari",
        qualification: "",
        designation: "Critical Care Specialist",
    },
    {
        img: drAriffJ,
        name: "Dr. Ariff J",
        qualification: "",
        designation: "Critical Care Specialist",
    },
];

const CriticalCareMedicine = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${CriticalCareHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/speciality-departments">
                                Superspeciality Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Critical Care Medicine</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-heartbeat me-2"></i>
                            Department
                        </span>

                        <h1>Critical Care Medicine</h1>
                        <p>
                            A highly specialized unit of dedicated intensivists and doctors
                            trained in advanced life support, providing round-the-clock
                            monitoring and intervention for our most critical patients.
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
                                <h3>24×7 Intensivists</h3>
                                <p>Trained specialists on call around the clock</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-procedures"></i>
                                </div>
                                <h3>Level 6 ICU</h3>
                                <p>State-of-the-art critical care infrastructure</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-heartbeat"></i>
                                </div>
                                <h3>Advanced Monitoring</h3>
                                <p>Hemodynamic monitoring & respiratory support</p>
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
                                <img src={criticalCareAbout} alt="Critical Care Medicine" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Uncompromising Critical Care</h2>
                                <p>
                                    Our Critical Care Unit stands as a testament to our
                                    hospital's unwavering commitment to providing the highest
                                    level of medical care. Our specialists are highly trained
                                    in advanced life support techniques and are dedicated to
                                    providing round-the-clock monitoring and intervention.
                                </p>

                                <div className="gm-about-highlight">
                                    <p>
                                        We foster a collaborative environment, working closely
                                        with all medical disciplines within the hospital to
                                        deliver seamless and comprehensive care.
                                    </p>
                                </div>

                                <p>
                                    By choosing our Critical Care Unit, you can rest assured
                                    that your loved ones are in the hands of the most skilled
                                    and experienced professionals, making us the premier
                                    choice for critical care in the region.
                                </p>

                                <div className="gm-highlights">
                                    {quickHighlights.map((item, idx) => (
                                        <div className="gm-highlight-item" key={idx}>
                                            <i className="fa fa-check-circle"></i>
                                            <span>{item}</span>
                                        </div>
                                    ))}
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
                        <h2>Critical Care Facilities</h2>
                        <p>
                            Comprehensive life-support infrastructure and specialist
                            coverage for every kind of critical illness.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="gm-list-card">
                                <h4>Advanced Monitoring & Life Support</h4>
                                <p>
                                    Continuous, high-precision monitoring backed by trained
                                    intensivists available around the clock.
                                </p>
                                <ul className="gm-check-list">
                                    {monitoringFacilities.map((item, idx) => (
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
                                <h4>Comprehensive Critical Care Coverage</h4>
                                <p>
                                    Capable of managing complex, multi-disciplinary critical
                                    cases across every specialty.
                                </p>
                                <ul className="gm-check-list">
                                    {specialtyCoverage.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fa fa-arrow-circle-right"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center g-5 mt-4">
                        <Col lg={6}>
                            <h3 className="gm-facilities-heading">
                                Why Choose Our Critical Care Unit
                            </h3>
                            <p className="gm-facilities-text">
                                Our unwavering dedication to patient well-being and our
                                commitment to excellence make us the premier choice for
                                critical care in the region. Every case is managed through
                                close collaboration across medical disciplines, ensuring
                                seamless, comprehensive care for our patients.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <ul className="gm-check-list gm-check-list-compact">
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    <span>Multi-disciplinary, collaborative care model</span>
                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    <span>Skilled and experienced critical care professionals</span>
                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    <span>Round-the-clock monitoring and rapid intervention</span>
                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    <span>Specialized toxicology and snake bite management</span>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= SPECIALISTS ================= */}
            <section className="gm-specialists">
                <Container>
                    <div className="gm-section-heading">
                        <span>Meet Our Team</span>
                        <h2>Our Critical Care Medicine Specialists</h2>
                        <p>
                            Experienced intensivists dedicated to delivering the highest
                            standard of round-the-clock critical care.
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
                                            {doc.designation}
                                        </span>
                                        <h3>{doc.name}</h3>
                                        {doc.qualification && (
                                            <div className="gm-doctor-qualification">
                                                {doc.qualification}
                                            </div>
                                        )}
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
                                <h2>Need Critical Care Support?</h2>
                                <p>
                                    Our experienced critical care team is available around
                                    the clock to provide the highest level of life-saving
                                    care for you and your loved ones.
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
                                        24×7 Trained Intensivists on Call
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        State-of-the-Art Level 6 ICU
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Multi-Disciplinary Critical Care Coverage
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

export default CriticalCareMedicine;