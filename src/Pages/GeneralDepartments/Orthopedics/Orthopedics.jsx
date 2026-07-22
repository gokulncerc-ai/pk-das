import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./Orthopedics.css";
import OrthopedicsHero from "../../../assets/Images/Orthopedics.jpg";
import orthoAbout from "../../../assets/Images/orthoAbout.avif";
import jointReplacements from "../../../assets/Images/JointReplacements.avif";
import sportsMedicine from "../../../assets/Images/SportsMedicine.avif";
import jointDisorders from "../../../assets/Images/JointDisorders.avif";
import arthroscopy from "../../../assets/Images/Arthroscopy.avif";
import spineSurgery from "../../../assets/Images/SpineSurgery.avif";
import trauma from "../../../assets/Images/Trauma.avif";
import orthodoc1 from "../../../assets/Images/orthodoc1.avif";
import orthodoc2 from "../../../assets/Images/orthodoc2.webp";
import orthodoc3 from "../../../assets/Images/orthodoc3.avif";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const treatments = [
    {
        image: jointReplacements,
        title: "Joint Replacements",
        description:
            "Total Hip Replacement, Total Knee Replacement, Total Shoulder Replacement.",
    },
    {
        image: sportsMedicine,
        title: "Sports Medicine",
        description:
            "Sports Medicine is a sub-specialty of Orthopedic Surgery, dealing with all sports related injuries. We have an efficient team supported by state-of-the-art instruments.",
    },
    {
        image: jointDisorders,
        title: "Major Causes of Joint Disorders",
        description:
            "We are a center of excellence in the treatment of degenerative disease of bone and joints, traumatic injuries to bones and joints, and congenital and pediatric bone and joint disorders.",
    },
    {
        image: arthroscopy,
        title: "Arthroscopy",
        description:
            "ACL Reconstruction, PCL Reconstruction, Loose Body Removal, Meniscus Repair, Synovectomy, Shoulder Stabilization, Rotator Cuff Repair.",
    },
    {
        image: spineSurgery,
        title: "Spine Surgery",
        description: "Disc Surgery, Stabilization Surgery.",
    },
    {
        image: trauma,
        title: "Trauma",
        description:
            "Complex Fractures, Pelviacetabular Trauma, Ilizarov Reconstruction, Pediatric Orthopedics, Hand Surgery, Tumor Surgery, etc.",
    },
];

const doctors = [
    { img: orthodoc1, name: "Dr. Sreesobh K V" },
    { img: orthodoc2, name: "Dr. Abdul Rasheem" },
    { img: orthodoc3, name: "Dr. Mathew P" },
];

const Orthopedics = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${OrthopedicsHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Orthopedics</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-bone me-2"></i>
                            Department
                        </span>

                        <h1>Orthopedics</h1>
                        <p>
                            At P.K. Das Institute of Medical Sciences, we take pride in
                            being recognized as the best in orthopedic care, backed by
                            state-of-the-art facilities and the latest surgical
                            technology.
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
                                    <i className="fa fa-medkit"></i>
                                </div>
                                <h3>Joint Replacement</h3>
                                <p>Hip, knee & shoulder replacement surgeries</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-heartbeat"></i>
                                </div>
                                <h3>Sports Medicine</h3>
                                <p>Comprehensive care for sports injuries</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Trauma Care</h3>
                                <p>Expert management of complex fractures</p>
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
                                <img src={orthoAbout} alt="Orthopedics" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Best in Orthopedic Care</h2>
                                <p>
                                    At P.K. Das Institute of Medical Sciences, we take pride in
                                    being recognized as the best in orthopedic care. Our
                                    state-of-the-art facilities are equipped with the latest
                                    technology and equipment to provide comprehensive
                                    orthopedic services. From diagnostic imaging services to
                                    advanced surgical suites, we have everything needed to
                                    deliver exceptional care to our patients.
                                </p>
                                <p>
                                    All major orthopedic surgeries including arthroscopic
                                    procedures, joint replacement surgeries and reconstructive
                                    surgeries are available at affordable rates. Our team of
                                    orthopedic surgeons is among the most experienced and
                                    skilled in the field, renowned for their expertise in
                                    performing complex procedures with precision and care.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Joint Replacement Surgery</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Arthroscopic Procedures</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Reconstructive Surgery</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Advanced Diagnostic Imaging</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= MAJOR TREATMENTS OFFERED ================= */}
            <section className="gm-treatments">
                <Container>
                    <div className="gm-section-heading">
                        <span>What We Treat</span>
                        <h2>Major Treatments Offered</h2>
                        <p>
                            Comprehensive orthopedic treatments delivered by an
                            experienced and skilled team of surgeons.
                        </p>
                    </div>

                    {treatments.map((item, idx) => (
                        <div
                            className={`gm-treatment-row ${idx % 2 !== 0 ? "reverse" : ""}`}
                            key={idx}
                        >
                            <div className="gm-treatment-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="gm-treatment-content">
                                <div className="gm-treatment-number">
                                    {String(idx + 1).padStart(2, "0")}
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Container>
            </section>

            {/* ================= SPECIALISTS ================= */}
            <section className="gm-specialists">
                <Container>
                    <div className="gm-section-heading">
                        <span>Meet Our Team</span>
                        <h2>Our Orthopedics Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to your
                            orthopedic care and recovery.
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
                                            Orthopedics Specialist
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
                                <h2>Need Orthopedic Consultation?</h2>
                                <p>
                                    Our experienced orthopedic team is here to guide you
                                    through diagnosis, treatment and recovery with precision
                                    and care.
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
                                        Experienced Orthopedic Surgeons
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Affordable Joint Replacement Surgery
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Advanced Diagnostic & Surgical Facilities
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

export default Orthopedics;