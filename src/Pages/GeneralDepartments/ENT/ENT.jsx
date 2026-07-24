import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./ENT.css";
import ENTHero from "../../../assets/Images/ENTHero.jpg";
import entAbout from "../../../assets/Images/entAbout.jpg";
import entOtorhino from "../../../assets/Images/entOtorhino.avif";
import entAudiology from "../../../assets/Images/entAudiology.jpg";
import entdoc1 from "../../../assets/Images/entdoc1.webp";
import entdoc2 from "../../../assets/Images/entdoc2.avif";
import entdoc3 from "../../../assets/Images/entdoc3.avif";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const opdFacilities = [
    "Well-furnished, comfortable waiting areas for patients",
    "Dedicated reception team to assist patients throughout consultation",
    "Four examination rooms and one demonstration room for students",
    "Additional Audiometry Room, ENG Laboratory & Speech Therapy Room",
];

const ipdFacilities = [
    "Round-the-clock service of senior consultants for inpatients",
    "Well-furnished general wards and private rooms",
    "Examination and treatment room, ward pantry, and store room",
    "Clinical demonstration room for students",
    "Well-furnished rooms for resident doctors and students",
    "Department teaching staff accommodated in separate offices",
];

const treatmentsLeft = [
    "Micro ear surgeries",
    "Myringotomy",
    "Tympanoplasty",
    "Mastoidectomy",
    "Endoscopic DCR",
    "Powered Adenoidectomy",
    "Facial Trauma Care unit",
    "Microdebrider assisted video endoscopic sinus surgery",
    "Endoscopic Cauterisation for Epistaxis",
    "Microlaryngeal Surgeries",
    "Upper Aerodigestive scopies including video laryngoscopy, flexible naso-pharyngo-laryngo bronchoscopy",
];

const treatmentsRight = [
    "Functional Endoscopic Sinus Surgery",
    "Septoplasty",
    "Tonsillectomy and adenoidectomy with coblation",
    "Thyroidectomy",
    "Parotid and submandibular gland surgeries",
    "Pre auricular sinus surgery",
    "Nasal bone fracture reduction",
    "Tracheostomy",
    "Rigid endoscopic foreign body removal / biopsy",
];

const audiologyLeft = [
    "Pure Tone Audiometry (PTA)",
    "Impedance Audiometry",
    "Speech Audiometry",
    "Hearing Aid Trial and Fitting (Digital Hearing Aids) / Services",
    "Special Tests (TDT, SISI)",
];

const audiologyRight = [
    "Oto Acoustic Emission (OAE)",
    "Brainstem Evoked Response Audiometry (BERA)",
    "Vestibular Evoked Myogenic Potential (VEMP)",
    "Hearing Aid Trial and Fitting (Digital Hearing Aids) / Services",
];

const speechLeft = [
    "Speech Therapy for speech and language disorders (Child and Adults)",
    "Speech & Language Assessment for Child and Adults",
    "Speech / Voice analysis",
];

const speechRight = [
    "Parental Training Program",
    "Voice Therapy",
    "Stuttering Therapy",
    "Articulation Therapy",
];

const doctors = [
    { img: entdoc1, name: "Dr. Udeesh K" },
    { img: entdoc2, name: "Dr. Baneesh A.B" },
    { img: entdoc3, name: "Dr. Hamnas V A" },
];

const ENT = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section
                className="gm-hero"
                style={{ backgroundImage: `url(${ENTHero})` }}
            >
                <div className="gm-overlay"></div>
                <Container>
                    <div className="gm-hero-content">
                        <Breadcrumb className="gm-breadcrumb flex-wrap">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

                            <Breadcrumb.Item href="/general-departments">
                                General Departments
                            </Breadcrumb.Item>

                            <Breadcrumb.Item active>
                                ENT
                            </Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="gm-badge">
                            <i className="fa fa-stethoscope me-2"></i>
                            Department
                        </span>

                        <h1>ENT Services</h1>
                        <p>
                            The Department of Otorhinolaryngology is equipped with the
                            latest and most advanced instruments to care for outpatients
                            and surgical patients alike.
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
                                    <i className="fa fa-ear-listen"></i>
                                </div>
                                <h3>Temporal Bone Lab</h3>
                                <p>Dedicated lab for advanced surgical training</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-headphones"></i>
                                </div>
                                <h3>Audiology Lab</h3>
                                <p>Comprehensive hearing & speech evaluation</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="gm-info-card">
                                <div className="gm-info-icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Expert Specialists</h3>
                                <p>Skilled ENT surgeons & head-neck specialists</p>
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
                                <img src={entAbout} alt="Department of Otorhinolaryngology" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About the Department</span>
                                <h2>Department of Otorhinolaryngology</h2>

                                <div className="gm-about-highlight">
                                    <p>
                                        Otorhinolaryngology is a surgical subspecialty within
                                        medicine that deals with the surgical and medical
                                        management of conditions of the head and neck. Doctors
                                        who specialize in this area are called
                                        otorhinolaryngologists, otolaryngologists, head and
                                        neck surgeons, or ENT surgeons.
                                    </p>
                                </div>

                                <p>
                                    Otorhinolaryngologists are surgeons who complete medical
                                    school and then undergo 3-6 years of post-graduate
                                    surgical training in ORL-H&N. Following residency
                                    training, some otolaryngologist-head & neck surgeons
                                    complete an advanced sub-specialty fellowship, where
                                    training can be one to two years in duration.
                                </p>
                                <p>
                                    Fellowships include head and neck surgical oncology,
                                    facial plastic surgery, rhinology and sinus surgery,
                                    neuro-otology, pediatric otolaryngology, the base of the
                                    skull, and phono surgery.
                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Temporal Bone Lab</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Video Endoscopy Unit</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Audiology & Speech Therapy</span>
                                    </div>
                                    <div className="gm-highlight-item">
                                        <i className="fa fa-check-circle"></i>
                                        <span>Advanced ENT Operation Theatre</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= FACILITIES: OPD & IPD ================= */}
            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>Our Facilities</span>
                        <h2>Outpatient & Inpatient Services</h2>
                        <p>
                            Well-equipped facilities designed for both outpatient
                            consultations and inpatient surgical care.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="gm-list-card">
                                <h4>Out Patient Department</h4>
                                <p>
                                    Outpatient facilities include well-furnished, comfortable
                                    waiting areas for patients. The reception team not only
                                    takes care of the patients till they receive the
                                    consultation but remains available for any requirements
                                    thereafter.
                                </p>
                                <ul className="gm-check-list">
                                    {opdFacilities.map((item, idx) => (
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
                                <h4>In Patient Services</h4>
                                <ul className="gm-check-list">
                                    {ipdFacilities.map((item, idx) => (
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

            {/* ================= ENT ABOUT / TECHNOLOGY ================= */}
            <section className="gm-about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="gm-about-image">
                                <img src={entOtorhino} alt="ENT Department" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">Excellence in Care</span>
                                <h2>Precision Diagnostics & Advanced Surgery</h2>
                                <p>
                                    Our diagnostic facilities are meticulously designed to
                                    ensure accuracy and efficiency, from our sophisticated
                                    ENT examination unit with individually sterile-packed
                                    instruments to our diagnostic video endoscopy unit
                                    featuring recording and demonstration capabilities.
                                </p>
                                <p>
                                    Our ENT operation theatre features Karl Storz endoscopes
                                    with HD cameras, monitors and capturing devices, Leica
                                    microscopes with demonstration capabilities, and the
                                    Medtronic microdebrider system, redefining surgical
                                    precision and innovation while prioritizing patient
                                    safety and comfort.
                                </p>
                                <p>
                                    Our team of specialized doctors and specialists are
                                    dedicated caregivers committed to improving the lives of
                                    our patients through excellence and continuous
                                    innovation.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= MAJOR TREATMENTS ================= */}
            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>What We Treat</span>
                        <h2>Major Treatments Offered</h2>
                        <p>
                            A comprehensive range of surgical and medical ENT treatments
                            performed with the latest technology.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="gm-list-card">
                                <ul className="gm-check-list">
                                    {treatmentsLeft.map((item, idx) => (
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
                                    {treatmentsRight.map((item, idx) => (
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

            {/* ================= AUDIOLOGY LAB ================= */}
            <section className="gm-about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="gm-about-image">
                                <img src={entAudiology} alt="Audiology Lab" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="gm-about-content">
                                <span className="gm-section-tag">Hearing & Speech</span>
                                <h2>Audiology Lab</h2>
                                <p>
                                    Hearing is a sense which is extremely vital for the
                                    overall well-being and strength of a person. Our
                                    Audiology department takes care of all kinds of speech
                                    and hearing problems in people of all ages.
                                </p>

                                <Row className="g-3 mt-2">
                                    <Col sm={6}>
                                        <ul className="gm-check-list gm-check-list-compact">
                                            {audiologyLeft.map((item, idx) => (
                                                <li key={idx}>
                                                    <i className="fa fa-arrow-circle-right"></i>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                    <Col sm={6}>
                                        <ul className="gm-check-list gm-check-list-compact">
                                            {audiologyRight.map((item, idx) => (
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

            {/* ================= SPEECH THERAPY ================= */}
            <section className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>Communication Care</span>
                        <h2>Speech Therapy</h2>
                        <p>
                            Personalized speech and language therapy services for
                            children and adults.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="gm-list-card">
                                <ul className="gm-check-list">
                                    {speechLeft.map((item, idx) => (
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
                                    {speechRight.map((item, idx) => (
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
                        <h2>Our ENT Specialists</h2>
                        <p>
                            Experienced, dedicated specialists committed to your ear,
                            nose & throat health.
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
                                            ENT Specialist
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
                                <h2>Need an ENT Consultation?</h2>
                                <p>
                                    Our dedicated ENT team is here to guide you through
                                    every stage of care, from routine consultations to
                                    advanced surgical treatment.
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
                                        Advanced ENT Operation Theatre
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Dedicated Audiology & Speech Therapy Lab
                                    </div>
                                    <div>
                                        <i className="fa fa-check"></i>
                                        Round-the-Clock Senior Consultant Care
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

export default ENT;