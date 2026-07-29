import React from 'react';
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Health-Checkups.css";
import checkup1 from "../../assets/Images/health-checkup/1s.jpg";
import checkup2 from "../../assets/Images/health-checkup/2s.jpg";
import checkup3 from "../../assets/Images/health-checkup/3s.jpg";
import checkup4 from "../../assets/Images/health-checkup/4s.jpg";
import checkup5 from "../../assets/Images/health-checkup/5s.jpg";
import checkup6 from "../../assets/Images/health-checkup/6s.jpg";
import Header from '../../Components/Header/Header';

const packages = [
    { img: checkup1, title: "Executive Health Check", link: "/executive-health-check" },
    { img: checkup2, title: "Comprehensive Heart Check", link: "/comprehencive-heart-check" },
    { img: checkup3, title: "Comprehensive Diabetic Check", link: "/comprehensive-diabetic-check" },
    { img: checkup4, title: "Well Women Check Up", link: "/well-women-check-up" },
    { img: checkup5, title: "Full Body Check", link: "/full-body-check" },
    { img: checkup6, title: "Know Your Heart Health Check", link: "/know-your-heart-health-check" },
];

const HealthCheckups = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section className="hc-hero">
                <Container>
                    <div className="hc-hero-content">
                        <Breadcrumb className="hc-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Health Checkup</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="hc-badge">
                            <i className="fa fa-heartbeat me-2"></i>
                            Preventive Care
                        </span>

                        <h1>Health Checkup Packages</h1>
                        <p>
                            We've introduced comprehensive health checkup programs
                            designed to diagnose conditions at their earliest stage,
                            helping you stay a step ahead of your health.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ================= PACKAGES ================= */}
            <section className="hc-packages">
                <Container>
                    <Row className="g-4">
                        {packages.map((pkg, idx) => (
                            <Col lg={4} md={6} key={idx}>
                                <Link to={pkg.link} className="hc-package-card">
                                    <div className="hc-package-thumb">
                                        <img src={pkg.img} alt={pkg.title} />
                                        <div className="hc-package-overlay"></div>
                                        <span className="hc-package-number">
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div className="hc-package-body">
                                        <h3>{pkg.title}</h3>
                                        <span className="hc-package-arrow">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ================= CTA ================= */}
            <section className="hc-cta">
                <Container>
                    <div className="hc-cta-box">
                        <div className="hc-cta-text">
                            <h2>Not Sure Which Package Is Right for You?</h2>
                            <p>
                                Our team can help you choose the right health checkup
                                package based on your age, lifestyle, and health history.
                            </p>
                        </div>
                        <div className="hc-cta-buttons">
                            <a href="/contact" className="hc-primary-btn">
                                Book a Checkup
                            </a>
                            <a href="/contact" className="hc-outline-btn">
                                Talk to Us
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default HealthCheckups;