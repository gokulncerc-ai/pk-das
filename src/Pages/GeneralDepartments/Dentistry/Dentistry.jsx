import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./Dentistry.css";
import DentistryHero from "../../../assets/Images/DentistryHero.jpg";
import dentistryAbout from "../../../assets/Images/dentistryAbout.avif";
import dentaldoc1 from "../../../assets/Images/dentaldoc1.webp";
import dentaldoc2 from "../../../assets/Images/dentaldoc2.webp";
import dentaldoc3 from "../../../assets/Images/dentaldoc3.avif";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

/*
    Items prefixed with "– " render as an indented sub-item
    (no arrow icon, muted, smaller) instead of a top-level bullet.
*/
const sections = [
    {
        title: "Oral Maxillofacial Surgery",
        left: [
            "24x7 Facial Trauma Case",
            "Tooth Removal",
            "– Extraction",
            "– Impaction",
            "Management of Oral Lesions",
        ],
        right: [
            "Facial Cosmetic Surgeries",
            "Cleft Cases - II Degree Case",
            "Interdisciplinary Orthognathic Surgery",
            "Biopsy of Oral Lesions",
        ],
    },
    {
        title: "Paedodontics",
        left: [
            "Full Mouth Rehabilitation under GA",
            "Uncooperative Children under GA",
            "Special Child Case",
            "Trauma Cases of Primary Dentition",
            "Crowns",
            "– Metal",
            "– Zirconia",
        ],
        right: [
            "Pulp Therapies (RCT)",
            "Aesthetic Treatment",
            "Space Management - Prosthetic Rehabilitation",
            "Growth Modulation of Jaws",
            "Habit Correction",
            "Tongue-tie Correction",
            "Preventive Management of Caries",
        ],
    },
    {
        title: "Orthodontics",
        left: [
            "All Types of Fixed Orthodontics",
            "– Ceramic Brackets",
            "– Lingual Brackets",
            "– Invisalign Brackets",
            "– Normal Metallic Brackets",
            "– Gummy Smile Correction without Surgeries (TADs)",
        ],
        right: [
            "Alignment of Severely Malpositioned Teeth",
            "Myofunctional Appliances",
            "Orthopedic Appliances",
            "Active Eruption of Clinically Missing Canine Cases",
        ],
    },
    {
        title: "Prosthodontics",
        left: [
            "Removable Dentures",
            "– Acrylic",
            "– Overdentures",
            "– Fixed Implants",
            "Removable Partial Dentures (RPD)",
            "– Acrylic",
            "– Cast PD",
            "Fixed Partial Dentures (FPD)",
            "– Crowns",
            "– Bridges",
            "– Implants",
            "Fixed Removable",
            "– Precision Attachments",
        ],
        right: [
            "Complete Dentures",
            "Smile Correction and Designing",
            "– Laminate Veneers",
            "– Digital Smile Designing (DSD)",
            "Maxillofacial Prosthesis",
            "– Eye",
            "– Ear",
            "– Nose",
            "– Finger",
            "Implants",
            "– Single",
            "– Multiple",
        ],
    },
    {
        title: "Conservative Dentistry and Endodontics",
        left: [
            "Root Canal Treatment",
            "Post and Core Restorations",
            "Tooth Jewellery",
            "Post Care",
        ],
        right: [
            "Resin Infiltration",
            "Bleaching",
            "Correction of Midline Diastema",
        ],
    },
    {
        title: "Periodontics",
        left: [
            "Oral Prophylaxis",
            "Gingivoplasty / Gingivectomy (Gummy Smile Correction)",
            "Crown Lengthening",
        ],
        right: ["Operculectomy", "Mucogingival / Flap Surgeries", "Frenectomy"],
    },
    {
        title: "Speciality Clinic",
        left: ["TMJ Pain and Management"],
        right: ["Implants"],
    },
];

const doctors = [
    { img: dentaldoc1, name: "Dr. Sujeev N" },
    { img: dentaldoc2, name: "Dr. Shamil" },
    { img: dentaldoc3, name: "Dr. Hridya K G" },
];

const renderList = (items) => (
    <ul className="gm-check-list">
        {items.map((item, idx) =>
            item.startsWith("– ") ? (
                <li key={idx} className="gm-sub-item">
                    <span>{item.replace("– ", "")}</span>
                </li>
            ) : (
                <li key={idx}>
                    <i className="fa fa-arrow-circle-right"></i>
                    <span>{item}</span>
                </li>
            )
        )}
    </ul>
);

const Dentistry = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${DentistryHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Dentistry</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-smile-o me-2"></i>
                            Department
                        </span>

                        <h1>Dentistry Services</h1>
                        <p>
                            At P K Das Hospital, we take pride in being the best in
                            dentistry, offering a comprehensive range of services
                            spearheaded by the finest specialists in the field.
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
                                    <i className="fa fa-smile-o"></i>
                                </div>
                                <h3>Full-Spectrum Care</h3>
                                <p>All dental specialities under one roof</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-child"></i>
                                </div>
                                <h3>Paedodontics</h3>
                                <p>Dedicated care for children's dental health</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Expert Specialists</h3>
                                <p>Skilled dentistry consultants & surgeons</p>
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
                                <img src={dentistryAbout} alt="Dentistry Department" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Comprehensive Dental Excellence</h2>

                                <div className="gm-about-highlight">
                                    <p>
                                        Patients can trust in our commitment to excellence,
                                        expertise, and quality care for all their dental
                                        needs, ensuring a healthy and beautiful smile for
                                        every individual who walks through our doors.
                                    </p>
                                </div>

                                <p>
                                    Dentistry plays a vital role in the prevention and
                                    treatment of oral diseases, focusing on addressing
                                    issues such as malformations of the jaws, misaligned
                                    teeth, and birth anomalies like cleft palate.
                                </p>
                                <p>
                                    P K Das Hospital offers a wide array of specialties and
                                    sub-specialties within the field of dentistry, including
                                    orthodontics, pedodontics, endodontics, periodontics,
                                    oral maxillofacial surgery, and aesthetic treatments, in
                                    addition to general practice.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Oral Maxillofacial Surgery</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Orthodontics & Prosthodontics</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Endodontics & Periodontics</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Aesthetic & Speciality Clinics</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= SERVICE SECTIONS ================= */}
            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>What We Offer</span>
                        <h2>Our Dental Specialities</h2>
                        <p>
                            A complete range of dental treatments delivered across every
                            speciality, from paediatric to reconstructive care.
                        </p>
                    </div>

                    <Row className="g-4">
                        {sections.map((section, idx) => (
                            <Col lg={12} key={idx}>
                                <div className="gm-list-card gm-list-card-wide">
                                    <h4>{section.title}</h4>
                                    <Row className="g-3">
                                        <Col sm={6}>{renderList(section.left)}</Col>
                                        <Col sm={6}>{renderList(section.right)}</Col>
                                    </Row>
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
                        <h2>Our Dentistry Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to your dental
                            health and a confident smile.
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
                                            Dentistry Specialist
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
                                <h2>Need a Dental Consultation?</h2>
                                <p>
                                    Our dedicated dentistry team is here to guide you
                                    through every stage of care, from routine check-ups to
                                    advanced reconstructive treatment.
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
                                        All Dental Specialities Under One Roof
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Dedicated Paediatric Dental Care
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Advanced Smile Design & Prosthodontics
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

export default Dentistry;