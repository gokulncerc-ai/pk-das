import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./NeuroSurgery.css";
import NeuroSurgeryHero from "../../../../assets/Images/NeuroSurgeryHero.jpg";
import neuroSurgeryAbout from "../../../../assets/Images/neuroSurgeryAbout.avif";
import neurodoc1 from "../../../../assets/Images/neurodoc1.jpg";
import neurodoc2 from "../../../../assets/Images/neurodoc2.jpg";
import neurodoc3 from "../../../../assets/Images/neurodoc3.jpg";
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';

const serviceGroups = [
    {
        title: "Trauma Surgeries",
        items: [
            "EDH / SDH / ICH",
            "Hematoma of brain",
            "Cranioplasty",
            "Head & spine trauma (accidents - road, fall from height, workplace accidents)",
        ],
    },
    {
        title: "Spine Surgeries",
        items: [
            "Minimally invasive spine surgery - Endoscopic and endoscope assisted surgery",
            "Fixation of spine",
            "Laminectomy / CVJ Anomalies",
            "Stroke and hemorrhage/bleeding in the brain and spine",
            "Tumors of the brain, spine",
            "Back pain, neck pain, disc prolapse and other spinal related diseases",
            "Vascular diseases such as aneurysms and vascular malformations",
            "Interventional neurological procedures which includes removal of clot and coiling of aneurysms",
            "Instrumentation of the spine and the cranio-vertebral junction",
            "Diseases of the pituitary gland",
            "Congenital diseases of the brain and spine and other illnesses affecting children",
        ],
    },
    {
        title: "Oncosurgeries",
        items: ["Brain Tumor Surgeries"],
    },
    {
        title: "Pediatric Surgeries",
        items: ["Shunt / Congenital Defect Surgeries"],
    },
    {
        title: "Other Surgeries",
        items: ["Vascular Surgeries", "Stroke Surgeries"],
    },
];

const infrastructureLeft = [
    "MRI",
    "CT",
    "E.E.G",
    "Well equipped Neuro Surgery ICU with well equipped staff",
    "Laminar Flow Neurosurgical OT",
    "Nerve Conduction Study",
];

const infrastructureRight = [
    "Latest Neuro Microscope",
    "Drill System",
    "Neuro Instruments",
    "Ventilator",
    "Multi-face Monitor",
    "24 x 7 Casualty and Trauma Care",
];

const icuFacilities = [
    "24 x 7 Casualty and Trauma Care",
    "A dedicated 24 hour Neuro Surgical Intensive Care Unit (ICU), with ventilators and multichannel invasive monitors for all beds",
    "E.E.G",
    "Provides comprehensive care for postoperative and acutely ill patients",
    "Modular Operation Suites provided with Laminar Airflow",
    "Room and ward facility available",
    "Drill and Neuro Instruments",
    "Latest Neuro Microscope",
];

const doctors = [
    {
        img: neurodoc1,
        name: "Dr. Biju C. Jose",
        designation: "Neuro Surgery Specialist",
        qualification: "",
    },
    {
        img: neurodoc2,
        name: "Dr. Sree Vally",
        designation: "Neuro Surgery Specialist",
        qualification: "",
    },
    {
        img: neurodoc3,
        name: "Dr. Arun Narayanan",
        designation: "Neuro Surgeon",
        qualification: "MS, DNB, MCh, DrNB",
    },
];

const NeuroSurgery = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${NeuroSurgeryHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/speciality-departments">
                                Speciality Departments
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Neuro Surgery</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-user-md me-2"></i>
                            Department
                        </span>

                        <h1>Neuro Surgery Services</h1>
                        <p>
                            A comprehensive and dedicated team of cerebrovascular
                            specialists including Neurosurgeons, Neuro-radiologists and
                            Neurologists, working together to deliver the best outcomes
                            for our patients.
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
                                    <i className="fa fa-ambulance"></i>
                                </div>
                                <h3>24x7 Trauma Care</h3>
                                <p>Round-the-clock casualty & trauma unit</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-bed"></i>
                                </div>
                                <h3>Neuro ICU</h3>
                                <p>Dedicated 24-hour intensive care unit</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Expert Neurosurgeons</h3>
                                <p>Skilled cerebrovascular specialist team</p>
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
                                <img src={neuroSurgeryAbout} alt="Neuro Surgery Department" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Comprehensive Neuro Surgical Care</h2>

                                <div className="gm-about-highlight">
                                    <p>
                                        Our hospital has a comprehensive and dedicated team
                                        of cerebrovascular specialists including
                                        Neurosurgeons, Neuro-radiologists and Neurologists.
                                        We also have a dedicated physiotherapy department
                                        for patient rehabilitation.
                                    </p>
                                </div>

                                <p>
                                    The team of skilled and dedicated doctors and staff of
                                    our emergency unit, neuro surgeons and anesthesiologists
                                    join hands to provide the best results for our patients.
                                </p>
                                <p>
                                    Our surgical microscope system provides quality and
                                    reliability in every respect - optics, design,
                                    engineering, materials, components, operation,
                                    ergonomics, vascular fluorescence, safer illumination
                                    levels, ease of movement and more efficient workflows.
                                    It is a multi-purpose surgical microscope with features
                                    such as the fluorescence module and HD documentation,
                                    making it ideal for procedures in Neurosurgery, Spine,
                                    Otolaryngology, and Plastic Reconstructive surgery.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Latest Neuro Microscope</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Laminar Flow OT</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Dedicated Physiotherapy</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Round-the-Clock ICU</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= SERVICES WE PROVIDE ================= */}
            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>What We Offer</span>
                        <h2>The Services We Provide</h2>
                        <p>
                            Advanced surgical and non-surgical treatments across trauma,
                            spine, oncology and pediatric neuro care.
                        </p>
                    </div>

                    <Row className="g-4">
                        {serviceGroups.map((group, idx) => (
                            <Col lg={6} key={idx}>
                                <div className="gm-list-card">
                                    <h4>{group.title}</h4>
                                    <ul className="gm-check-list">
                                        {group.items.map((item, i) => (
                                            <li key={i}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ================= FACILITIES: INFRASTRUCTURE ================= */}
            <section className="gm-about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <span className="gm-section-tag">Facilities Provided</span>
                            <h2 className="gm-facilities-heading">Infrastructure</h2>
                            <p className="gm-facilities-text">
                                Our Neuro Surgery department is backed by advanced
                                imaging, diagnostic and surgical infrastructure designed
                                for precision and patient safety.
                            </p>
                        </Col>
                        <Col lg={7}>
                            <div className="gm-list-card">
                                <Row className="g-3">
                                    <Col sm={6}>
                                        <ul className="gm-check-list gm-check-list-compact">
                                            {infrastructureLeft.map((item, idx) => (
                                                <li key={idx}>
                                                    <i className="fa fa-arrow-circle-right"></i>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                    <Col sm={6}>
                                        <ul className="gm-check-list gm-check-list-compact">
                                            {infrastructureRight.map((item, idx) => (
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

            {/* ================= FACILITIES: ICU ================= */}
            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>Critical Care</span>
                        <h2>Neuro Surgical ICU</h2>
                        <p>
                            A dedicated intensive care unit built for round-the-clock
                            monitoring and recovery support.
                        </p>
                    </div>

                    <Row className="g-4 justify-content-center">
                        <Col lg={10}>
                            <div className="gm-list-card">
                                <Row className="g-3">
                                    <Col md={6}>
                                        <ul className="gm-check-list">
                                            {icuFacilities.slice(0, 4).map((item, idx) => (
                                                <li key={idx}>
                                                    <i className="fa fa-arrow-circle-right"></i>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className="gm-check-list">
                                            {icuFacilities.slice(4).map((item, idx) => (
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
                        <h2>Our Neuro Surgery Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to your
                            neurological health and well-being.
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
                                            <p className="gm-doctor-qualification">
                                                {doc.qualification}
                                            </p>
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
                                <h2>Need a Neuro Surgery Consultation?</h2>
                                <p>
                                    Our dedicated neuro surgery team is here to guide you
                                    through every stage of care, from emergency trauma
                                    response to advanced surgical treatment and recovery.
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
                                        24x7 Casualty & Trauma Care
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Laminar Flow Neurosurgical OT
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Dedicated Neuro Surgery ICU
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

export default NeuroSurgery;