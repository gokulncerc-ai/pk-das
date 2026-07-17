import React, { useState } from 'react'
import "./TheTrustees.css"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Container, Row, Col, Badge } from "react-bootstrap";
// ---------Image importing------------
import wideangle from "../../assets/Images/wideangle.webp"

const TheTrustees = () => {
     const keralaInstitutions = [
        {
            id: 1,
            name: "Nehru College of Engineering and Research Centre",
            shortName: "NCERC",
            type: "Engineering",
            approval:
                "NAAC A Grade • AICTE Approved • APJ Abdul Kalam Technological University",
            location: "Thiruvilwamala, Thrissur, Kerala",
            icon: "bi bi-mortarboard-fill",
            featured: false,
        },

        {
            id: 2,
            name: "Jawaharlal College of Engineering and Technology",
            shortName: "JCET",
            type: "Engineering",
            approval:
                "NAAC A+ • AICTE Approved • APJ Abdul Kalam Technological University",
            location: "Lakkidi, Palakkad, Kerala",
            icon: "bi bi-mortarboard-fill",
            featured: false,
        },

        {
            id: 3,
            name: "Nehru College of Pharmacy",
            shortName: "NCP",
            type: "Pharmacy",
            approval:
                "NAAC Accredited • Pharmacy Council of India • KUHS",
            location: "Thiruvilwamala, Thrissur, Kerala",
            icon: "bi bi-capsule-pill",
            featured: false,
        },

        {
            id: 4,
            name: "Jawaharlal Aviation Institute",
            shortName: "JAI",
            type: "Aviation",
            approval:
                "Approved by DGCA",
            location: "Lakkidi, Palakkad, Kerala",
            icon: "bi bi-airplane-fill",
            featured: false,
        },

        {
            id: 5,
            name: "Nehru Academy of Law",
            shortName: "NAL",
            type: "Law",
            approval:
                "Bar Council of India • University of Calicut",
            location: "Lakkidi, Palakkad, Kerala",
            icon: "bi bi-bank2",
            featured: false,
        },

        {
            id: 6,
            name: "Nehru College of Architecture",
            shortName: "NCA",
            type: "Architecture",
            approval:
                "Council of Architecture • University of Calicut",
            location: "Lakkidi, Palakkad, Kerala",
            icon: "bi bi-building",
            featured: false,
        },

        {
            id: 7,
            name: "PK Das Liberal College of Arts and Science",
            shortName: "PKDLCAS",
            type: "Arts & Science",
            approval:
                "University of Calicut",
            location: "Lakkidi, Palakkad, Kerala",
            icon: "bi bi-book-fill",
            featured: false,
        },

        {
            id: 8,
            name: "PK Das College of Nursing",
            shortName: "PKDCN",
            type: "Nursing",
            approval:
                "NAAC Accredited • INC • KNMC • KUHS",
            location: "Vaniyamkulam, Ottapalam, Kerala",
            icon: "bi bi-heart-pulse-fill",
            featured: false,
        },

        {
            id: 9,
            name: "PK Das Institute of Medical Sciences",
            shortName: "PKDIMS",
            type: "Medical",
            approval:
                "NMC Approved • KUHS",
            location: "Vaniyamkulam, Ottapalam, Kerala",
            icon: "bi bi-hospital-fill",
            featured: true,
        },
    ];

     const tamilNaduInstitutions = [
        {
            id: 1,
            name: "Nehru College of Aeronautics and Applied Sciences",
            shortName: "NCAAS",
            type: "Aeronautics",
            approval: "",
            location: "Kuniamuthur, Coimbatore, Tamil Nadu",
            icon: "bi bi-airplane-fill",
            featured: false,
        },

        {
            id: 2,
            name: "Nehru Institute of Engineering & Technology",
            shortName: "NIET",
            type: "Engineering",
            approval: "",
            location: "T. M. Palayam, Coimbatore, Tamil Nadu",
            icon: "bi bi-mortarboard-fill",
            featured: false,
        },

        {
            id: 3,
            name: "Nehru Institute of Technology",
            shortName: "NIT",
            type: "Engineering",
            approval: "",
            location: "Thirumalayampalayam, Coimbatore, Tamil Nadu",
            icon: "bi bi-mortarboard-fill",
            featured: false,
        },

        {
            id: 4,
            name: "Nehru Arts and Science College",
            shortName: "NASC",
            type: "Arts & Science",
            approval: "",
            location: "Thirumalayampalayam, Coimbatore, Tamil Nadu",
            icon: "bi bi-book-fill",
            featured: false,
        },

        {
            id: 5,
            name: "Nehru College of Management",
            shortName: "NCM",
            type: "Management",
            approval: "",
            location: "Nehru Gardens, Coimbatore, Tamil Nadu",
            icon: "bi bi-briefcase-fill",
            featured: false,
        },

        {
            id: 6,
            name: "Nehru Institute of IT and Management",
            shortName: "NIITM",
            type: "Information Technology",
            approval: "",
            location: "T. M. Palayam, Coimbatore, Tamil Nadu",
            icon: "bi bi-pc-display-horizontal",
            featured: false,
        },

        {
            id: 7,
            name: "Nehru Institute of Design",
            shortName: "NID",
            type: "Design",
            approval: "",
            location: "Kuniamuthur, Coimbatore, Tamil Nadu",
            icon: "bi bi-palette-fill",
            featured: false,
        },

        {
            id: 8,
            name: "Nehru College of Nursing and Research Institute",
            shortName: "NCNRI",
            type: "Nursing",
            approval: "",
            location: "T. M. Palayam, Coimbatore, Tamil Nadu",
            icon: "bi bi-heart-pulse-fill",
            featured: false,
        },

        {
            id: 9,
            name: "Nehru Institute of Health Sciences",
            shortName: "NIHS",
            type: "Health Sciences",
            approval: "",
            location: "T. M. Palayam, Coimbatore, Tamil Nadu",
            icon: "bi bi-hospital-fill",
            featured: false,
        },

        {
            id: 10,
            name: "Nehru College of Physiotherapy",
            shortName: "NCPT",
            type: "Physiotherapy",
            approval: "",
            location: "T. M. Palayam, Coimbatore, Tamil Nadu",
            icon: "bi bi-person-standing",
            featured: false,
        },

        {
            id: 11,
            name: "Nehru International School",
            shortName: "NIS",
            type: "School",
            approval: "",
            location: "Kaliyapuram, Coimbatore, Tamil Nadu",
            icon: "bi bi-book-half",
            featured: false,
        },

        {
            id: 12,
            name: "Nehru Kids Academy",
            shortName: "NKA",
            type: "Kids Academy",
            approval: "",
            location: "Coimbatore, Tamil Nadu",
            icon: "bi bi-balloon-heart-fill",
            featured: false,
        },

        {
            id: 13,
            name: "Nehru School of Architecture",
            shortName: "NSA",
            type: "Architecture",
            approval: "",
            location: "Kuniamuthur, Coimbatore, Tamil Nadu",
            icon: "bi bi-building",
            featured: false,
        },
    ];

    const [activeState, setActiveState] = useState("kerala");

    const institutions =
        activeState === "kerala"
            ? keralaInstitutions
            : tamilNaduInstitutions;

    return (
        <>
            {/* ---------Header---------- */}
            {/* <div><Header /></div> */}
            {/* ==========================================================
                            TRUST HERO
      ========================================================== */}

            <section className="trust-hero">

                <div className="trust-hero-overlay"></div>

                <Container>

                    <Row className="justify-content-center">

                        <Col xl={10} lg={11}>

                            <div className="trust-hero-content">

                                <Badge className="trust-badge">
                                    Since 1968 • Nehru College of Educational &
                                    Charitable Trust
                                </Badge>

                                <h1>
                                    Building a Legacy of
                                    <span> Educational Excellence </span>
                                    & Compassionate Healthcare
                                </h1>

                                <p>
                                    P K Das Institute of Medical Sciences is a prestigious
                                    healthcare initiative of the Nehru College of Educational &
                                    Charitable Trust, continuing a remarkable journey of
                                    excellence in education, innovation and patient-centered
                                    healthcare for over five decades.
                                </p>

                                {/* <div className="trust-hero-buttons">

                                    <a
                                        href="#about-trust"
                                        className="trust-primary-btn"
                                    >
                                        Explore Our Legacy

                                        <i className="bi bi-arrow-right ms-2"></i>

                                    </a>

                                </div> */}

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/* ==========================================================
                        TRUST HIGHLIGHTS
      ========================================================== */}

            <section className="trust-highlights">

                <Container>

                    <Row className="g-4">

                        <Col lg={4} md={6}>

                            <div className="trust-highlight-card">

                                <div className="highlight-icon">

                                    <i className="bi bi-calendar2-check-fill"></i>

                                </div>

                                <h3>1968</h3>

                                <span>Established</span>

                                <p>
                                    Over five decades of excellence in education,
                                    research and community service.
                                </p>

                            </div>

                        </Col>

                        <Col lg={4} md={6}>

                            <div className="trust-highlight-card">

                                <div className="highlight-icon">

                                    <i className="bi bi-buildings-fill"></i>

                                </div>

                                <h3>10+</h3>

                                <span>Institutions</span>

                                <p>
                                    Prestigious educational institutions across
                                    Kerala and Tamil Nadu.
                                </p>

                            </div>

                        </Col>

                        <Col lg={4} md={12}>

                            <div className="trust-highlight-card">

                                <div className="highlight-icon">

                                    <i className="bi bi-hospital-fill"></i>

                                </div>

                                <h3>350</h3>

                                <span>Bed Super Specialty Hospital</span>

                                <p>
                                    Delivering world-class healthcare with
                                    compassion and advanced medical expertise.
                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/* ==========================================================
                          ABOUT THE TRUST
      ========================================================== */}

            <section
                className="about-trust-section"
                id="about-trust"
            >
                <Container>

                    <Row className="align-items-center g-5">

                        {/* ================= LEFT CONTENT ================= */}

                        <Col lg={6}>

                            <div className="section-heading">

                                <span className="section-subtitle">
                                    THE TRUST
                                </span>

                                <h2>
                                    Nehru College of Educational &
                                    Charitable Trust
                                </h2>

                                <p className="section-description">
                                    P K Das Institute of Medical Sciences is a healthcare
                                    initiative by the Nehru College of Educational &
                                    Charitable Trust.
                                </p>

                            </div>

                            <div className="trust-content">

                                <p>
                                    Established in <strong>1968</strong> under the visionary
                                    leadership of <strong>Late Sri. P K Das</strong>, the
                                    Nehru College of Educational & Charitable Trust has been
                                    dedicated to creating world-class educational institutions
                                    that nurture knowledge, innovation and excellence.
                                </p>

                                <p>
                                    From engineering and architecture to pharmacy, nursing,
                                    aviation and medical sciences, the Trust has consistently
                                    developed institutions that have become benchmarks in
                                    higher education across South India.
                                </p>

                                <p>
                                    With a strong commitment towards quality education,
                                    holistic development and compassionate healthcare,
                                    the Trust continues to transform lives while contributing
                                    to society through education, research and medical
                                    excellence.
                                </p>

                            </div>

                            {/* Feature Points */}

                            <Row className="g-4 trust-features">

                                <Col sm={6}>

                                    <div className="feature-box">

                                        <div className="feature-icon">
                                            <i className="bi bi-award-fill"></i>
                                        </div>

                                        <div>

                                            <h5>50+ Years</h5>

                                            <p>Legacy of Excellence</p>

                                        </div>

                                    </div>

                                </Col>

                                <Col sm={6}>

                                    <div className="feature-box">

                                        <div className="feature-icon">
                                            <i className="bi bi-mortarboard-fill"></i>
                                        </div>

                                        <div>

                                            <h5>10+ Institutions</h5>

                                            <p>Across South India</p>

                                        </div>

                                    </div>

                                </Col>

                                <Col sm={6}>

                                    <div className="feature-box">

                                        <div className="feature-icon">
                                            <i className="bi bi-heart-pulse-fill"></i>
                                        </div>

                                        <div>

                                            <h5>Healthcare</h5>

                                            <p>Patient-Centric Care</p>

                                        </div>

                                    </div>

                                </Col>

                                <Col sm={6}>

                                    <div className="feature-box">

                                        <div className="feature-icon">
                                            <i className="bi bi-people-fill"></i>
                                        </div>

                                        <div>

                                            <h5>Community</h5>

                                            <p>Serving Society Since 1968</p>

                                        </div>

                                    </div>

                                </Col>

                            </Row>

                        </Col>

                        {/* ================= RIGHT IMAGE ================= */}

                        <Col lg={6}>

                            <div className="trust-image-wrapper">

                                <div className="image-bg-circle image-circle-one"></div>

                                <div className="image-bg-circle image-circle-two"></div>

                                <img
                                    src={wideangle}
                                    alt="Nehru College Educational Trust"
                                    className="img-fluid trust-main-image"
                                />

                                {/* Floating Card */}

                                <div className="trust-floating-card">

                                    <div className="floating-card-icon">

                                        <i className="bi bi-patch-check-fill"></i>

                                    </div>

                                    <h3>1968</h3>

                                    <span>Established</span>

                                    <p>
                                        Over five decades of educational
                                        excellence and healthcare leadership.
                                    </p>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            <section className="institution-section">

                <Container>

                    {/* ===============================
                    SECTION TITLE
                ================================ */}

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="institution-heading">

                                <span className="section-subtitle">

                                    OUR EDUCATIONAL INSTITUTIONS

                                </span>

                                <h2>

                                    Building Future Leaders Across
                                    <span> Kerala & Tamil Nadu</span>

                                </h2>

                                <p>

                                    The Nehru College of Educational &
                                    Charitable Trust has established
                                    world-class institutions across Kerala
                                    and Tamil Nadu, empowering thousands of
                                    students through quality education,
                                    innovation and excellence.

                                </p>

                            </div>

                        </Col>

                    </Row>

                    {/* ===============================
                    TOGGLE BUTTONS
                ================================ */}

                    <Row>

                        <Col lg={12}>

                            <div className="institution-toggle">

                                <button
                                    className={
                                        activeState === "kerala"
                                            ? "toggle-btn active"
                                            : "toggle-btn"
                                    }
                                    onClick={() => setActiveState("kerala")}
                                >

                                    <i className="bi bi-geo-alt-fill"></i>

                                    Kerala

                                </button>

                                <button
                                    className={
                                        activeState === "tamil"
                                            ? "toggle-btn active"
                                            : "toggle-btn"
                                    }
                                    onClick={() => setActiveState("tamil")}
                                >

                                    <i className="bi bi-geo-alt-fill"></i>

                                    Tamil Nadu

                                </button>

                            </div>

                        </Col>

                    </Row>

                    {/* ===============================
                    INSTITUTION GRID
                ================================ */}

                    <Row className="g-4 institution-grid">
                        {
                            institutions.map((institution) => (

                                <Col
                                    xl={4}
                                    lg={6}
                                    md={6}
                                    key={institution.id}
                                >

                                    <div
                                        className={
                                            institution.featured
                                                ? "institution-card featured-card"
                                                : "institution-card"
                                        }
                                    >

                                        {
                                            institution.featured && (

                                                <div className="featured-badge">

                                                    Featured

                                                </div>

                                            )
                                        }

                                        {/* ===========================
                                        ICON
                                    =========================== */}

                                        <div className="institution-icon">

                                            <i className={institution.icon}></i>

                                        </div>

                                        {/* ===========================
                                        CONTENT
                                    =========================== */}

                                        <div className="institution-content">

                                            <span className="institution-type">

                                                {institution.type}

                                            </span>

                                            <h3>

                                                {institution.name}

                                            </h3>

                                            {
                                                institution.approval && (

                                                    <p className="institution-approval">

                                                        {institution.approval}

                                                    </p>

                                                )
                                            }

                                            <div className="institution-location">

                                                <i className="bi bi-geo-alt-fill"></i>

                                                <span>

                                                    {institution.location}

                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </Col>

                            ))
                        }

                    </Row>

                </Container>

            </section>



            {/* ---------Footer--------- */}
            {/* < div > <Footer /></div > */}

        </>
    )
}

export default TheTrustees
