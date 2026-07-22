import React from 'react'
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./GeneralMedicine.css"
import GeneralMedHero from "../../../assets/Images/GeneralMedHero.jpg";
import generaldoc1 from "../../../assets/Images/generaldoc1.webp"
import generaldoc2 from "../../../assets/Images/generaldoc2.webp"
import advancedmed from "../../../assets/Images/advancedmed.webp"
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const GeneralMedicine = () => {
    return (
        <>
            <div><Header /></div>
            <section
                className="gm-hero"
                style={{
                    backgroundImage: `url(${GeneralMedHero})`
                }}
            >

                <div className="gm-overlay"></div>

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={10}>

                            <div className="gm-hero-content">

                                <Breadcrumb className="gm-breadcrumb">

                                    <Breadcrumb.Item href="/">

                                        Home

                                    </Breadcrumb.Item>

                                    <Breadcrumb.Item href="/departments">

                                        Departments

                                    </Breadcrumb.Item>

                                    <Breadcrumb.Item active>

                                        General Medicine

                                    </Breadcrumb.Item>

                                </Breadcrumb>

                                <span className="gm-badge">

                                    Internal Medicine Department

                                </span>

                                <h1>

                                    General Medicine

                                </h1>

                                <p>

                                    Delivering comprehensive adult healthcare through
                                    experienced physicians, advanced diagnostics,
                                    evidence-based treatments, and compassionate care
                                    tailored to every patient.

                                </p>

                                <div className="gm-hero-buttons">

                                    <Button className="gm-primary-btn">

                                        <i className="bi bi-calendar-check me-2"></i>

                                        Book Appointment

                                    </Button>

                                    <Button className="gm-secondary-btn">

                                        <i className="bi bi-telephone me-2"></i>

                                        Contact Department

                                    </Button>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/*=================================
                QUICK INFORMATION CARDS
            =================================*/}

            <section className="gm-quick-info">

                <Container>

                    <Row className="g-4">
                        <Col lg={3} md={6}>

                            <div className="gm-info-card">

                                <div className="gm-info-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>

                                <h3>

                                    24×7

                                </h3>

                                <p>

                                    Emergency & Medical Care

                                </p>

                            </div>

                        </Col>

                        <Col lg={3} md={6}>

                            <div className="gm-info-card">

                                <div className="gm-info-icon">

                                    <i className="bi bi-person-check-fill"></i>

                                </div>

                                <h3>

                                    Senior

                                </h3>

                                <p>

                                    Expert Consultants

                                </p>

                            </div>

                        </Col>

                        <Col lg={3} md={6}>

                            <div className="gm-info-card">

                                <div className="gm-info-icon">

                                    <i className="bi bi-hospital-fill"></i>

                                </div>

                                <h3>

                                    Modern

                                </h3>

                                <p>

                                    Diagnostic Facilities

                                </p>

                            </div>

                        </Col>

                        <Col lg={3} md={6}>

                            <div className="gm-info-card">

                                <div className="gm-info-icon">

                                    <i className="bi bi-shield-check"></i>

                                </div>

                                <h3>

                                    Holistic

                                </h3>

                                <p>

                                    Comprehensive Healthcare

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/*=================================
                    ABOUT SECTION
            =================================*/}

            <section className="gm-about">

                <Container>

                    <Row className="align-items-center">

                        <Col lg={6}>

                            <div className="gm-about-image">

                                <img
                                    src={GeneralMedHero}
                                    alt="General Medicine"
                                    className="img-fluid"
                                />

                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className="gm-about-content">

                                <span className="gm-section-tag">

                                    About Department

                                </span>

                                <h2>

                                    Excellence in General Medicine & Internal Healthcare

                                </h2>

                                <p>

                                    The Department of General Medicine consists of
                                    highly experienced senior consultants trained at
                                    leading medical institutions across India. Our
                                    department provides comprehensive diagnosis,
                                    treatment and preventive healthcare for a wide
                                    range of adult medical conditions.

                                </p>

                                <p>

                                    Equipped with modern diagnostic facilities,
                                    advanced infrastructure and a multidisciplinary
                                    approach, we ensure personalized treatment plans
                                    and holistic patient care for every individual.

                                </p>

                                <div className="gm-highlights">
                                    <div className="gm-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Comprehensive Adult Healthcare

                                        </span>

                                    </div>

                                    <div className="gm-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Advanced Diagnostic Services

                                        </span>

                                    </div>

                                    <div className="gm-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Management of Chronic Diseases

                                        </span>

                                    </div>

                                    <div className="gm-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Multi-System Disease Management

                                        </span>

                                    </div>

                                    <div className="gm-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Preventive Health Screening

                                        </span>

                                    </div>

                                    <div className="gm-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Personalized Treatment Plans

                                        </span>

                                    </div>

                                </div>
                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/*=================================
                WHY CHOOSE OUR DEPARTMENT
            =================================*/}

            <section className="gm-features">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="gm-section-heading">

                                <span>

                                    Why Choose Us

                                </span>

                                <h2>

                                    Delivering Excellence in Internal Medicine

                                </h2>

                                <p>

                                    Our General Medicine department combines clinical
                                    expertise, advanced technology and compassionate
                                    patient care to deliver the highest standards of
                                    healthcare.

                                </p>

                            </div>

                        </Col>

                    </Row>

                    <Row className="g-4 mt-2">

                        <Col lg={4} md={6}>

                            <div className="gm-feature-card">

                                <div className="gm-feature-icon">

                                    <i className="bi bi-hospital-fill"></i>

                                </div>

                                <h4>

                                    Modern Infrastructure

                                </h4>

                                <p>

                                    State-of-the-art facilities equipped with
                                    advanced medical technology and diagnostics.

                                </p>

                            </div>

                        </Col>

                        <Col lg={4} md={6}>

                            <div className="gm-feature-card">

                                <div className="gm-feature-icon">

                                    <i className="bi bi-person-heart"></i>

                                </div>

                                <h4>

                                    Expert Physicians

                                </h4>

                                <p>

                                    Experienced consultants providing
                                    evidence-based and patient-centred care.

                                </p>

                            </div>

                        </Col>

                        <Col lg={4} md={6}>

                            <div className="gm-feature-card">

                                <div className="gm-feature-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>

                                <h4>

                                    Holistic Treatment

                                </h4>

                                <p>

                                    Comprehensive diagnosis, treatment,
                                    prevention and long-term disease management.

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/*=================================
                    OUR ADVANTAGES
            =================================*/}

            < section className="gm-advantages" >

                <Container>

                    <Row className="align-items-center g-5">

                        {/*==========================
                                LEFT IMAGE
                        ===========================*/}

                        <Col lg={5}>

                            <div className="gm-advantages-image">

                                <img
                                    src={advancedmed}
                                    alt="General Medicine"
                                    className="img-fluid"
                                />

                            </div>

                        </Col>

                        {/*==========================
                                RIGHT CONTENT
                        ===========================*/}

                        <Col lg={7}>

                            <div className="gm-advantages-content">

                                <span className="gm-section-tag">

                                    Our Advantages

                                </span>

                                <h2>

                                    Advanced Medical Care for Every Stage of Life

                                </h2>

                                <p>

                                    Our Department of General Medicine specializes in
                                    diagnosing and treating a broad spectrum of acute,
                                    chronic, infectious and environmental diseases.
                                    Backed by experienced physicians, advanced
                                    diagnostic technology and a multidisciplinary
                                    approach, we ensure comprehensive medical care
                                    for every patient.

                                </p>

                                <div className="row g-3 mt-3">
                                    <div className="col-md-6">

                                        <div className="gm-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Typhoid Fever

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="gm-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Tuberculosis

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="gm-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                HIV Care

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="gm-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Dengue Fever

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="gm-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                H1N1 Treatment

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="gm-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Septicaemia & Shock

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="gm-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Snake Bite Management

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="gm-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Dog & Scorpion Bites

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="gm-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Poisoning & Toxic Exposure

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="gm-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Radiation & Electrical Injuries

                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                        </Col>

                    </Row>

                </Container>

            </section >

            {/*=================================
                OUR SPECIALISTS
            =================================*/}

            <section className="gm-specialists">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="gm-section-heading">

                                <span>

                                    Meet Our Experts

                                </span>

                                <h2>

                                    Our General Medicine Specialists

                                </h2>

                                <p>

                                    Our team of experienced physicians is committed to
                                    providing compassionate, evidence-based healthcare
                                    with a patient-first approach. Every consultation
                                    focuses on accurate diagnosis, personalized
                                    treatment and long-term wellness.

                                </p>

                            </div>

                        </Col>

                    </Row>

                    <Row className="g-4 justify-content-center mt-3">

                        {/*=================================
                                Doctor 1
                        =================================*/}

                        <Col lg={5} md={6}>

                            <div className="gm-doctor-card">

                                <div className="gm-doctor-image">

                                    <img
                                        src={generaldoc1}
                                        alt="Dr Vinod V S"
                                        className="img-fluid"
                                    />

                                    <span className="gm-experience">

                                        20+ Years Experience

                                    </span>

                                </div>

                                <div className="gm-doctor-content">

                                    <span className="gm-doctor-designation">

                                        General Medicine Specialist

                                    </span>

                                    <h3>

                                        Dr. Vinod V S

                                    </h3>

                                    <p>

                                        Senior Consultant in Internal Medicine with
                                        extensive expertise in managing acute,
                                        chronic and infectious diseases.

                                    </p>

                                    <div className="gm-doctor-buttons">

                                        <button className="gm-primary-btn">

                                            <i className="bi bi-calendar-check me-2"></i>

                                            Book Appointment

                                        </button>

                                        <button className="gm-outline-btn">

                                            View Profile

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </Col>

                        {/*=================================
                                Doctor 2
                        =================================*/}

                        <Col lg={5} md={6}>

                            <div className="gm-doctor-card">

                                <div className="gm-doctor-image">

                                    <img
                                        src={generaldoc2}
                                        alt="Dr Riyas C"
                                        className="img-fluid"
                                    />

                                    <span className="gm-experience">

                                        Consultant

                                    </span>

                                </div>

                                <div className="gm-doctor-content">

                                    <span className="gm-doctor-designation">

                                        General Medicine Specialist

                                    </span>

                                    <h3>

                                        Dr. Riyas C

                                    </h3>

                                    <p>

                                        Dedicated physician providing comprehensive
                                        diagnosis, preventive healthcare and
                                        personalized treatment for adult patients.

                                    </p>

                                    <div className="gm-doctor-buttons">

                                        <button className="gm-primary-btn">

                                            <i className="bi bi-calendar-check me-2"></i>

                                            Book Appointment

                                        </button>

                                        <button className="gm-outline-btn">

                                            View Profile

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/*=================================
                MEDICAL ASSISTANCE CTA
            =================================*/}

            <section className="gm-cta">

                <Container>

                    <Row className="align-items-center">

                        {/*==============================
                                LEFT CONTENT
                        ==============================*/}

                        <Col lg={7}>

                            <div className="gm-cta-content">

                                <span className="gm-section-tag">

                                    We're Here For You

                                </span>

                                <h2>

                                    Need Medical Assistance?

                                </h2>

                                <p>

                                    Our General Medicine specialists are available to
                                    provide expert consultation, accurate diagnosis,
                                    preventive healthcare and personalized treatment.
                                    Book your appointment today and experience
                                    compassionate care from our experienced physicians.

                                </p>

                                <div className="gm-cta-buttons">

                                    <button className="gm-primary-btn">

                                        <i className="bi bi-calendar-check me-2"></i>

                                        Book Appointment

                                    </button>

                                    <button className="gm-outline-btn">

                                        <i className="bi bi-telephone me-2"></i>

                                        +91 12345 67890

                                    </button>

                                </div>

                            </div>

                        </Col>

                        {/*==============================
                                RIGHT ICONS
                        ==============================*/}

                        <Col lg={5}>

                            <div className="gm-cta-box">

                                <div className="gm-cta-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>

                                <h3>

                                    24×7 Emergency Support

                                </h3>

                                <p>

                                    Our emergency care team and physicians are
                                    available round-the-clock to provide immediate
                                    medical assistance whenever you need it.

                                </p>

                                <div className="gm-cta-features">

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Emergency Consultation

                                    </div>

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Critical Care Support

                                    </div>

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Expert Medical Team

                                    </div>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            <div><Footer /></div>

        </>


    )
}

export default GeneralMedicine
