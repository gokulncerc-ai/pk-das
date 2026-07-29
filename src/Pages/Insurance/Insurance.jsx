import React from 'react';
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import "./Insurance.css";
import gudhealth from "../../assets/Images/insurance/gudhealth.jpg";
import appolo from "../../assets/Images/insurance/appolo.jpg";
import chola from "../../assets/Images/insurance/chola.jpg";
import fhpl from "../../assets/Images/insurance/fhpl.jpg";
import hdfc from "../../assets/Images/insurance/hdfc.jpg";
import mediassist from "../../assets/Images/insurance/mediassist.jpg";
import religare from "../../assets/Images/insurance/religare.jpg";
import star from "../../assets/Images/insurance/star.jpg";
import vidal from "../../assets/Images/insurance/vidal.jpg";
import medicare from "../../assets/Images/insurance/medicare.jpg";
import raksha from "../../assets/Images/insurance/raksha.jpg";
import ericson from "../../assets/Images/insurance/ericson.jpg";
import universal from "../../assets/Images/insurance/universal.jpg";
import tpa from "../../assets/Images/insurance/tpa.jpg";
import heritage from "../../assets/Images/insurance/heritage.jpg";
import karunya from "../../assets/Images/insurance/karunya.jpg";
import esi from "../../assets/Images/insurance/esi.jpg";
import echs from "../../assets/Images/insurance/echs.jpg";
import kotak from "../../assets/Images/insurance/kotak.jpg";
import lic from "../../assets/Images/insurance/lic.jpg";
import adithya from "../../assets/Images/insurance/adithya.jpg";
import max from "../../assets/Images/insurance/max.jpg";
import ttk from "../../assets/Images/insurance/ttk.jpg";
import Header from '../../Components/Header/Header';

const partners = [
    { name: "Good Health Plan Limited", img: gudhealth },
    { name: "Apollomunich", img: appolo },
    { name: "Cholamandalam (Chola MS)", img: chola },
    { name: "Family Health Plan Ltd", img: fhpl },
    { name: "HDFC-ergo", img: hdfc },
    { name: "Medi Assist Insurance TPA Private", img: mediassist },
    { name: "Religare Health Insurance", img: religare },
    { name: "Starhealth Insurance", img: star },
    { name: "Vidhal Health TPA", img: vidal },
    { name: "Medicare Insurance TPA", img: medicare },
    { name: "Raksha Health Insurance TPA Pvt. Ltd", img: raksha },
    { name: "Ericson Insurance TPA Pvt. Ltd.", img: ericson },
    { name: "Universal Sompo Health Insurance TPA", img: universal },
    { name: "Health Insurance TPA", img: tpa },
    { name: "Heritage Health TPA Pvt. Ltd", img: heritage },
    { name: "Karunya Benevolent Fund", img: karunya },
    { name: "Employee State Insurance (ESI)", img: esi },
    { name: "Ex-Servicemen Contributory Health Scheme (ECHS)", img: echs },
    { name: "Kotak Health Care", img: kotak },
    { name: "Life Insurance Corporation of India", img: lic },
    { name: "Aditya Birla Insurance", img: adithya },
    { name: "MAX Health Insurance", img: max },
    { name: "TTK Health Care", img: ttk },
    { name: "S.Railway CTSE (Cashless Treatment Scheme in Emergency)", img: null },
    {
        name: "Health & Family Welfare Department - Medical Reimbursement to Kerala State Government Employees",
        img: null,
    },
    { name: "Health Checkups & Pre Medical Checkups", img: null },
];

const Insurance = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section className="ins-hero">
                <Container>
                    <div className="ins-hero-content">
                        <Breadcrumb className="ins-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Insurance</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="ins-badge">
                            <i className="fa fa-shield-alt me-2"></i>
                            Insurance Companies
                        </span>

                        <h1>Insurance</h1>
                        <p>
                            Secure your peace of mind with our comprehensive hospital
                            insurance network — your health, our priority.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ================= PARTNERS ================= */}
            <section className="ins-partners">
                <Container>
                    <div className="ins-panel">
                        <div className="ins-section-heading">
                            <span>Our Network</span>
                            <h2>Empanelled Insurance Providers</h2>
                            <p>
                                We work with a wide network of insurance companies and
                                third-party administrators to make cashless treatment and
                                claims as simple as possible for our patients.
                            </p>
                        </div>

                        <Row className="g-4">
                            {partners.map((partner, idx) => (
                                <Col lg={4} md={6} key={idx}>
                                    <div className="ins-partner-card">
                                        <div className="ins-partner-logo">
                                            {partner.img ? (
                                                <img src={partner.img} alt={partner.name} />
                                            ) : (
                                                <span className="ins-partner-logo-placeholder">
                                                    <i className="fa fa-shield-alt"></i>
                                                </span>
                                            )}
                                        </div>
                                        <div className="ins-partner-desc">
                                            <b>{partner.name}</b>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>

            {/* ================= CTA ================= */}
            <section className="ins-cta">
                <Container>
                    <div className="ins-cta-box">
                        <div className="ins-cta-text">
                            <h2>Have a Question About Your Coverage?</h2>
                            <p>
                                Our insurance desk can help you verify your policy, check
                                cashless eligibility, and guide you through the claims
                                process.
                            </p>
                        </div>
                        <div className="ins-cta-buttons">
                            <a href="/contact" className="ins-primary-btn">
                                Contact Insurance Desk
                            </a>
                            <a href="/contact" className="ins-outline-btn">
                                Ask a Question
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Insurance;