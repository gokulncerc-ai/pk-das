import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./UROLOGY.css";
import UrologyHero from "../../../../assets/Images/UrologyHero.jpg";
import urologyAbout from "../../../../assets/Images/urologyAbout.avif";
import urologydoc1 from "../../../../assets/Images/urologydoc1.webp";
import Header from '../../../../Components/Header/Header';

const treatments = [
    {
        icon: "fa-search",
        title: "Endourology",
        text: "Almost all the endourological procedures are undertaken regularly.",
    },
    {
        icon: "fa-flask",
        title: "Urolithiasis (Urinary Stones)",
        text: "Advanced methods for stone removal like minimally invasive stone surgery, including ureteroscopy and PCNL, are undertaken on a daily basis.",
    },
    {
        icon: "fa-male",
        title: "Prostate",
        text: "Transurethral resection (TURP) is the standard of care.",
    },
    {
        icon: "fa-compress",
        title: "Urethral Stricture",
        text: "Videoscopic internal urethrotomy and other advanced procedures.",
    },
    {
        icon: "fa-ribbon",
        title: "Uro-Oncology",
        text: "Specialized treatment for all urological cancers affecting the urogenital tract, including tumours of the kidneys, bladder, prostate, testes, and penis, with state-of-the-art surgical techniques for pelvic and retroperitoneal malignancies, transurethral surgery for bladder tumours, and penile conservation techniques for penile cancers.",
    },
    {
        icon: "fa-cut",
        title: "Nephron Sparing Surgery / Partial Nephrectomy",
        text: "For patients with renal cancers, only the diseased portion of the kidney is removed while the normal, functioning part is preserved - especially beneficial for patients with diabetes and hypertension who already have compromised renal status.",
    },
    {
        icon: "fa-child",
        title: "Pediatric Urology",
        text: "Surgical correction for congenital abnormalities of the genitourinary system like PUJ anomaly, Vesicoureteric Reflux, Posterior Urethral Valve, and reconstructive surgery for hypospadias, cryptorchidism and other genital abnormalities in children.",
    },
    {
        icon: "fa-wrench",
        title: "Reconstructive Urology",
        text: "Major reconstructive procedures for urethral stricture disease, ureteric injury, ureteric stricture, congenital malformations and other conditions.",
    },
];

const servicesLeft = [
    "Radical Nephroureterectomy",
    "Partial Nephrectomy",
    "Pyeloplasty",
    "Anatrophic Nephrolithotomy",
    "Lap Nephrectomy",
    "URS (Uretero-Renoscopy)",
    "Urethroplasty",
    "Reimplantation",
    "TURBT (Transurethral Resection of Bladder Tumor)",
];

const servicesRight = [
    "TURP (Transurethral Resection of Prostate)",
    "Radical Cystectomy",
    "Partial Cystectomy",
    "Laser Stone Ablation",
    "Anterior Colporrhaphy",
    "Appendicovesicostomy, Continent Urinary Diversion",
    "Penile Preserving Surgery for Malignancy, Hypospadias Repair",
    "Endoscopic Valve Fulguration, Hernioplasty",
];

const Urology = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${UrologyHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/speciality-departments">
                                Speciality Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Urology</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-user-md me-2"></i>
                            Department
                        </span>

                        <h1>Urology Services</h1>
                        <p>
                            At P.K. Das Institute of Medical Sciences, our Urology
                            Department stands as a beacon of excellence, embracing the
                            forefront of the latest advancements in urological care with
                            state-of-the-art instruments and a dedicated specialist team.
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
                                <h3>Endourology</h3>
                                <p>Comprehensive daily endourological procedures</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-ribbon"></i>
                                </div>
                                <h3>Uro-Oncology</h3>
                                <p>Advanced surgical care for urological cancers</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Expert Urologists</h3>
                                <p>Senior consultant-led specialist team</p>
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
                                <img src={urologyAbout} alt="Urology Department" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Excellence in Urological Care</h2>

                                <div className="gm-about-highlight">
                                    <p>
                                        Our Urology Department offers a comprehensive range
                                        of cutting-edge services, boasting state-of-the-art
                                        instruments and backed by a dedicated team led by a
                                        Senior Consultant Urologist alongside skilled Senior
                                        Paramedics.
                                    </p>
                                </div>

                                <p>
                                    Our paramount focus lies in continuously refining
                                    surgical outcomes and minimizing complications by
                                    leveraging the most advanced instruments available
                                    worldwide. By prioritizing the latest technologies and
                                    treatment modalities, our goal is to ensure that our
                                    patients receive the highest level of urological care
                                    possible.
                                </p>
                                <p>
                                    With a commitment to excellence ingrained in our ethos,
                                    our hospital proudly upholds a standard of care that is
                                    unparalleled, led by the best specialized doctors who
                                    are dedicated to providing optimal care and outcomes for
                                    all our patients.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Minimally Invasive Stone Surgery</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Uro-Oncology Care</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Pediatric Urology</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Reconstructive Urology</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= MAJOR TREATMENTS OFFERED ================= */}
            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>What We Treat</span>
                        <h2>Major Treatments Offered</h2>
                        <p>
                            A complete range of urological treatments, from stone
                            management to complex reconstructive and oncology surgery.
                        </p>
                    </div>

                    <Row className="g-4">
                        {treatments.map((item, idx) => (
                            <Col md={6} lg={4} key={idx}>
                                <div className="gm-feature-card">
                                    <div className="gm-feature-icon">
                                        <i className={`fa ${item.icon}`}></i>
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ================= SERVICES WE OFFERED ================= */}
            <section className="gm-about">
                <Container>
                    <Row className="align-items-start">
                        <Col lg={5}>
                            <span className="gm-section-tag">Procedures</span>
                            <h2 className="gm-facilities-heading">Services We Offered</h2>
                            <p className="gm-facilities-text">
                                A broad surgical repertoire covering the full spectrum of
                                urological conditions, delivered with precision and
                                advanced technique.
                            </p>
                        </Col>
                        <Col lg={7}>
                            <div className="gm-list-card">
                                <Row className="g-3">
                                    <Col sm={6}>
                                        <ul className="gm-check-list gm-check-list-compact">
                                            {servicesLeft.map((item, idx) => (
                                                <li key={idx}>
                                                    <i className="fa fa-arrow-circle-right"></i>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                    <Col sm={6}>
                                        <ul className="gm-check-list gm-check-list-compact">
                                            {servicesRight.map((item, idx) => (
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

            {/* ================= SPECIALIST ================= */}
            <section className="gm-specialists">
                <Container>
                    <div className="gm-section-heading">
                        <span>Meet Our Team</span>
                        <h2>Our Urology Specialist</h2>
                        <p>
                            An experienced, dedicated specialist committed to your
                            urological health and well-being.
                        </p>
                    </div>

                    <Row className="g-4 justify-content-center">
                        <Col md={6} lg={4}>
                            <div className="gm-doctor-card">
                                <div className="gm-doctor-image">
                                    <img src={urologydoc1} alt="Dr. Rajan S P" />
                                    <span className="gm-experience">Specialist</span>
                                </div>
                                <div className="gm-doctor-content">
                                    <span className="gm-doctor-designation">
                                        Urology Specialist
                                    </span>
                                    <h3>Dr. Rajan S P</h3>
                                    <div className="gm-doctor-buttons">
                                        <Button className="gm-primary-btn">Book Now</Button>
                                        <Button className="gm-outline-btn">View Profile</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
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
                                <h2>Need a Urology Consultation?</h2>
                                <p>
                                    Our dedicated urology team is here to guide you through
                                    every stage of care, from stone management to complex
                                    reconstructive and oncological surgery.
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
                                        Minimally Invasive Stone Surgery
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Advanced Uro-Oncology Treatment
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Pediatric & Reconstructive Urology
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

export default Urology;