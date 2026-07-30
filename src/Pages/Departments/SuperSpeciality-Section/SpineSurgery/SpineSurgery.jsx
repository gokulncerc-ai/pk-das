import React from 'react'
import './SpineSurgery.css'
// ----------images-----------
import spine1 from "../../../../assets/Images/spine1.webp";
import spine2 from "../../../../assets/Images/spine2.webp";
import spine3 from "../../../../assets/Images/spine3.webp";
import spine4 from "../../../../assets/Images/spine4.webp";
import generaldoctor1 from "../../../../assets/Images/generaldoc1.webp";
import generaldoctor2 from "../../../../assets/Images/generaldoc2.webp";

import {
    Container,
    Row,
    Col,
    Breadcrumb
} from "react-bootstrap";

const SpineSurgery = () => {
    return (
        <>
            {/*=================================
        SPINE HERO
=================================*/}

            <section
                className="spine-hero"
                style={{
                    backgroundImage: `url(${spine1})`
                }}
            >

                <div className="spine-overlay"></div>

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={10}>

                            <div className="spine-hero-content">

                                <Breadcrumb className="spine-breadcrumb">

                                    <Breadcrumb.Item href="/">

                                        Home

                                    </Breadcrumb.Item>

                                    <Breadcrumb.Item href="/departments">

                                        Departments

                                    </Breadcrumb.Item>

                                    <Breadcrumb.Item active>

                                        Spine Surgery

                                    </Breadcrumb.Item>

                                </Breadcrumb>

                                <span className="spine-badge">

                                    Advanced Spine Surgery

                                </span>

                                <h1>

                                    Advanced Spine Surgery Care With Precision & Expertise

                                </h1>

                                <p>

                                    PK DAS Hospital offers comprehensive diagnosis,
                                    minimally invasive spine procedures and advanced
                                    surgical treatment for disorders affecting the neck,
                                    back and spinal column. Our multidisciplinary spine
                                    team focuses on restoring mobility, relieving pain
                                    and helping patients return to an active lifestyle.

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/*=================================
        QUICK INFORMATION
=================================*/}

            <section className="spine-quick-info">

                <Container>

                    <Row className="g-4">

                        <Col lg={3} md={6}>

                            <div className="spine-info-card">

                                <div className="spine-info-icon">

                                    <i className="bi bi-hospital-fill"></i>

                                </div>

                                <h3>

                                    Advanced

                                </h3>

                                <p>

                                    Spine Surgery Centre

                                </p>

                            </div>

                        </Col>

                        <Col lg={3} md={6}>

                            <div className="spine-info-card">

                                <div className="spine-info-icon">

                                    <i className="bi bi-person-check-fill"></i>

                                </div>

                                <h3>

                                    Expert

                                </h3>

                                <p>

                                    Spine Surgeons

                                </p>

                            </div>

                        </Col>

                        <Col lg={3} md={6}>

                            <div className="spine-info-card">

                                <div className="spine-info-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>

                                <h3>

                                    Modern

                                </h3>

                                <p>

                                    Minimally Invasive Procedures

                                </p>

                            </div>

                        </Col>

                        <Col lg={3} md={6}>

                            <div className="spine-info-card">

                                <div className="spine-info-icon">

                                    <i className="bi bi-shield-check"></i>

                                </div>

                                <h3>

                                    Complete

                                </h3>

                                <p>

                                    Spine Rehabilitation

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/*=================================
        ABOUT SPINE SURGERY
=================================*/}

            <section className="spine-about">

                <Container>

                    <Row className="align-items-center">

                        {/*==========================
                    LEFT IMAGE
            ==========================*/}

                        <Col lg={6}>

                            <div className="spine-about-image">

                                <img
                                    src={spine2}
                                    alt="Advanced Spine Surgery"
                                    className="img-fluid"
                                />

                            </div>

                        </Col>



                        {/*==========================
                    RIGHT CONTENT
            ==========================*/}

                        <Col lg={6}>

                            <div className="spine-about-content">

                                <span className="spine-section-tag">

                                    About Department

                                </span>

                                <h2>

                                    Advanced Spine Care For A Pain-Free & Active Life

                                </h2>

                                <p>

                                    The Spine Surgery Department at PK DAS Hospital provides
                                    comprehensive diagnosis, treatment and rehabilitation
                                    for disorders affecting the spine, neck and back. Our
                                    team combines modern surgical techniques with
                                    patient-focused care to deliver safe, effective and
                                    long-lasting outcomes.

                                </p>

                                <p>

                                    From minimally invasive spine procedures to complex
                                    deformity correction and trauma management, our
                                    specialists use advanced technology and evidence-based
                                    treatment protocols to restore mobility, reduce pain
                                    and improve quality of life.

                                </p>



                                <div className="spine-highlights">

                                    <div className="spine-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Minimally Invasive Spine Surgery

                                        </span>

                                    </div>



                                    <div className="spine-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Endoscopic & Microscopic Procedures

                                        </span>

                                    </div>



                                    <div className="spine-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Spine Trauma Management

                                        </span>

                                    </div>



                                    <div className="spine-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Spine Deformity Correction

                                        </span>

                                    </div>



                                    <div className="spine-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Pain Management Procedures

                                        </span>

                                    </div>



                                    <div className="spine-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Rehabilitation & Physiotherapy

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

            <section className="spine-features">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="spine-section-heading">

                                <span>

                                    Why Choose Us

                                </span>

                                <h2>

                                    Excellence In Advanced Spine Care

                                </h2>

                                <p>

                                    Our Spine Surgery Department combines advanced surgical
                                    expertise, modern technology and comprehensive
                                    rehabilitation to deliver safe, effective and
                                    patient-focused treatment for spinal disorders.

                                </p>

                            </div>

                        </Col>

                    </Row>



                    <Row className="g-4 mt-2">

                        {/*==============================
                    FEATURE 1
            ==============================*/}

                        <Col lg={4} md={6}>

                            <div className="spine-feature-card">

                                <div className="spine-feature-icon">

                                    <i className="bi bi-hospital-fill"></i>

                                </div>

                                <h4>

                                    Advanced Surgical Technology

                                </h4>

                                <p>

                                    Modern operation theatres equipped for microscopic,
                                    endoscopic and minimally invasive spine procedures
                                    that improve surgical precision and recovery.

                                </p>

                            </div>

                        </Col>



                        {/*==============================
                    FEATURE 2
            ==============================*/}

                        <Col lg={4} md={6}>

                            <div className="spine-feature-card">

                                <div className="spine-feature-icon">

                                    <i className="bi bi-person-heart"></i>

                                </div>

                                <h4>

                                    Experienced Spine Specialists

                                </h4>

                                <p>

                                    Our dedicated spine surgeons provide comprehensive
                                    diagnosis, personalized treatment planning and
                                    advanced surgical care for complex spinal conditions.

                                </p>

                            </div>

                        </Col>



                        {/*==============================
                    FEATURE 3
            ==============================*/}

                        <Col lg={4} md={6}>

                            <div className="spine-feature-card">

                                <div className="spine-feature-icon">

                                    <i className="bi bi-universal-access-circle"></i>

                                </div>

                                <h4>

                                    Faster Recovery & Rehabilitation

                                </h4>

                                <p>

                                    Comprehensive rehabilitation programmes and
                                    physiotherapy services help patients regain
                                    strength, mobility and confidence after surgery.

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/*=================================
        SPINE SURGERY SERVICES
=================================*/}

            <section className="spine-advantages">

                <Container>

                    <Row className="align-items-center g-5">

                        {/*==============================
                    LEFT IMAGE
            ==============================*/}

                        <Col lg={5}>

                            <div className="spine-advantages-image">

                                <img
                                    src={spine3}
                                    alt="Advanced Spine Surgery"
                                    className="img-fluid"
                                />

                            </div>

                        </Col>



                        {/*==============================
                    RIGHT CONTENT
            ==============================*/}

                        <Col lg={7}>

                            <div className="spine-advantages-content">

                                <span className="spine-section-tag">

                                    Spine Surgery Services

                                </span>

                                <h2>

                                    Advanced Surgical Solutions For Complex Spine Disorders

                                </h2>

                                <p>

                                    Our Spine Surgery Department offers comprehensive
                                    treatment for spinal disorders using advanced
                                    surgical techniques, minimally invasive procedures,
                                    modern imaging and multidisciplinary rehabilitation.
                                    Every treatment plan is tailored to restore mobility,
                                    reduce pain and improve long-term quality of life.

                                </p>



                                <Row className="g-3 mt-3">

                                    <Col md={6}>

                                        <div className="spine-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Nerve Root Block & Pain Management

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="spine-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Spine Deformity Correction

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="spine-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Decompression & Fusion Surgeries

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="spine-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Endoscopic Spine Surgery

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="spine-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Cervical Spine Procedures (ACDF)

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="spine-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Spine Trauma & Tumor Management

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="spine-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Percutaneous Screw Fixation

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="spine-advantage-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Hand Surgery & Osteoporosis Care

                                            </span>

                                        </div>

                                    </Col>

                                </Row>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/*=================================
        CONDITIONS WE TREAT
=================================*/}

            <section className="spine-conditions">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="spine-section-heading">

                                <span>

                                    Conditions We Treat

                                </span>

                                <h2>

                                    Specialized Care For Complex Spine Disorders

                                </h2>

                                <p>

                                    Our Spine Surgery Department provides comprehensive
                                    diagnosis and treatment for a wide range of spinal
                                    disorders affecting the neck, back and spinal column,
                                    helping patients regain mobility and live pain-free.

                                </p>

                            </div>

                        </Col>

                    </Row>



                    <Row className="g-4">

                        {/*==============================
                    CONDITION 1
            ==============================*/}

                        <Col lg={3} md={6}>

                            <div className="spine-service-card">

                                <div className="spine-service-icon">

                                    <i className="bi bi-person-standing"></i>

                                </div>

                                <h4>

                                    Disc Bulge

                                </h4>

                                <p>

                                    Advanced treatment for cervical, thoracic and lumbar
                                    disc disorders causing pain and nerve compression.

                                </p>

                            </div>

                        </Col>



                        {/*==============================
                    CONDITION 2
            ==============================*/}

                        <Col lg={3} md={6}>

                            <div className="spine-service-card">

                                <div className="spine-service-icon">

                                    <i className="bi bi-diagram-3-fill"></i>

                                </div>

                                <h4>

                                    Spinal Deformities

                                </h4>

                                <p>

                                    Specialized management for scoliosis, kyphosis and
                                    other structural spinal abnormalities.

                                </p>

                            </div>

                        </Col>



                        {/*==============================
                    CONDITION 3
            ==============================*/}

                        <Col lg={3} md={6}>

                            <div className="spine-service-card">

                                <div className="spine-service-icon">

                                    <i className="bi bi-shield-plus"></i>

                                </div>

                                <h4>

                                    Spinal Stenosis

                                </h4>

                                <p>

                                    Expert care for spinal canal narrowing and
                                    spondylolisthesis causing nerve compression.

                                </p>

                            </div>

                        </Col>



                        {/*==============================
                    CONDITION 4
            ==============================*/}

                        <Col lg={3} md={6}>

                            <div className="spine-service-card">

                                <div className="spine-service-icon">

                                    <i className="bi bi-person-heart"></i>

                                </div>

                                <h4>

                                    Cervical Spondylosis

                                </h4>

                                <p>

                                    Diagnosis and treatment for age-related cervical
                                    spine degeneration and chronic neck pain.

                                </p>

                            </div>

                        </Col>



                        {/*==============================
                    CONDITION 5
            ==============================*/}

                        <Col lg={3} md={6}>

                            <div className="spine-service-card">

                                <div className="spine-service-icon">

                                    <i className="bi bi-bandaid-fill"></i>

                                </div>

                                <h4>

                                    Spine Trauma

                                </h4>

                                <p>

                                    Immediate surgical care for fractures and traumatic
                                    spinal injuries caused by accidents.

                                </p>

                            </div>

                        </Col>



                        {/*==============================
                    CONDITION 6
            ==============================*/}

                        <Col lg={3} md={6}>

                            <div className="spine-service-card">

                                <div className="spine-service-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>

                                <h4>

                                    Osteoporosis

                                </h4>

                                <p>

                                    Specialized treatment for osteoporosis-related
                                    vertebral fractures and spinal instability.

                                </p>

                            </div>

                        </Col>



                        {/*==============================
                    CONDITION 7
            ==============================*/}

                        <Col lg={3} md={6}>

                            <div className="spine-service-card">

                                <div className="spine-service-icon">

                                    <i className="bi bi-virus"></i>

                                </div>

                                <h4>

                                    Infections & Tumors

                                </h4>

                                <p>

                                    Comprehensive evaluation and treatment for spinal
                                    infections and both benign and malignant tumors.

                                </p>

                            </div>

                        </Col>



                        {/*==============================
                    CONDITION 8
            ==============================*/}

                        <Col lg={3} md={6}>

                            <div className="spine-service-card">

                                <div className="spine-service-icon">

                                    <i className="bi bi-lightning-charge-fill"></i>

                                </div>

                                <h4>

                                    Chronic Back Pain

                                </h4>

                                <p>

                                    Effective treatment for persistent neck pain,
                                    sciatica and chronic lower back conditions.

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/*=================================
        SYMPTOMS THAT REQUIRE
        SPINE CONSULTATION
=================================*/}

            <section className="spine-consultation">

                <Container>

                    <Row className="align-items-center g-5">

                        {/*==============================
                    LEFT CONTENT
            ==============================*/}

                        <Col lg={6}>

                            <div className="spine-consultation-content">

                                <span className="spine-section-tag">

                                    When To Consult

                                </span>

                                <h2>

                                    Symptoms That Should Never Be Ignored

                                </h2>

                                <p>

                                    Persistent spine-related symptoms can significantly
                                    affect your daily activities and quality of life.
                                    Early diagnosis and timely intervention help prevent
                                    further complications while improving recovery and
                                    long-term mobility.

                                </p>

                                <p>

                                    If you experience any of the following symptoms,
                                    consult our Spine Surgery specialists for a detailed
                                    evaluation and personalized treatment plan.

                                </p>



                                <div className="spine-consultation-list">

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Persistent Neck Or Back Pain

                                    </div>



                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Numbness Or Tingling In Arms & Legs

                                    </div>



                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Difficulty Walking Or Balance Problems

                                    </div>



                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Weakness In Arms Or Legs

                                    </div>



                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Radiating Pain (Sciatica)

                                    </div>



                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Spine Injury After Accident Or Fall

                                    </div>



                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Loss Of Bladder Or Bowel Control

                                    </div>

                                </div>

                            </div>

                        </Col>



                        {/*==============================
                    RIGHT IMAGE
            ==============================*/}

                        <Col lg={6}>

                            <div className="spine-consultation-image">

                                <img
                                    src={spine2}
                                    alt="Spine Consultation"
                                    className="img-fluid"
                                />

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/*=================================
            OUR SPECIALISTS
=================================*/}

            <section className="spine-specialists">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="spine-section-heading">

                                <span>

                                    Meet Our Experts

                                </span>

                                <h2>

                                    Our Spine Surgery Specialists

                                </h2>

                                <p>

                                    Our experienced spine surgeons provide advanced
                                    diagnosis, minimally invasive procedures and
                                    comprehensive surgical care to help patients
                                    regain mobility and live pain-free.

                                </p>

                            </div>

                        </Col>

                    </Row>



                    <Row className="g-4 justify-content-center mt-3">

                        {/*=================================
                    DOCTOR 1
            =================================*/}

                        <Col lg={5} md={6}>

                            <div className="spine-doctor-card">

                                <div className="spine-doctor-image">

                                    <img
                                        src={generaldoctor1}
                                        alt="Dr. G M Shafeeq"
                                        className="img-fluid"
                                    />

                                    <span className="spine-experience">

                                        Spine Surgery & Endoscopy

                                    </span>

                                </div>



                                <div className="spine-doctor-content">

                                    <span className="spine-doctor-designation">

                                        Consultant Spine Surgeon

                                    </span>

                                    <h3>

                                        Dr. G M Shafeeq

                                    </h3>

                                    <h6>

                                        MBBS, D.Ortho, DNB

                                    </h6>

                                    <p>

                                        Experienced spine surgeon specializing in
                                        minimally invasive spine surgery, endoscopic
                                        procedures, trauma management and complex
                                        spinal disorders.

                                    </p>



                                    <div className="spine-doctor-buttons">

                                        <button className="spine-primary-btn">

                                            <i className="bi bi-calendar-check me-2"></i>

                                            Book Appointment

                                        </button>



                                        <button className="spine-outline-btn">

                                            View Profile

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </Col>



                        {/*=================================
                    DOCTOR 2
            =================================*/}

                        <Col lg={5} md={6}>

                            <div className="spine-doctor-card">

                                <div className="spine-doctor-image">

                                    <img
                                        src={generaldoctor2}
                                        alt="Dr. Pranay Kumar"
                                        className="img-fluid"
                                    />

                                    <span className="spine-experience">

                                        Orthopaedic Spine Surgery

                                    </span>

                                </div>



                                <div className="spine-doctor-content">

                                    <span className="spine-doctor-designation">

                                        Consultant Orthopaedic Spine Surgeon

                                    </span>

                                    <h3>

                                        Dr. Pranay Kumar

                                    </h3>

                                    <h6>

                                        MBBS, MS

                                    </h6>

                                    <p>

                                        Dedicated orthopaedic spine surgeon providing
                                        comprehensive care for degenerative spine
                                        disorders, spinal trauma and minimally invasive
                                        surgical procedures.

                                    </p>



                                    <div className="spine-doctor-buttons">

                                        <button className="spine-primary-btn">

                                            <i className="bi bi-calendar-check me-2"></i>

                                            Book Appointment

                                        </button>



                                        <button className="spine-outline-btn">

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

            <section className="spine-cta">

                <Container>

                    <Row className="align-items-center">

                        {/*==============================
                    LEFT CONTENT
            ==============================*/}

                        <Col lg={7}>

                            <div className="spine-cta-content">

                                <span className="spine-section-tag">

                                    We're Here For You

                                </span>

                                <h2>

                                    Need Expert Spine Care?

                                </h2>

                                <p>

                                    Whether you're experiencing chronic back pain,
                                    neck pain, spinal injury or require advanced
                                    surgical treatment, our Spine Surgery specialists
                                    are here to provide comprehensive diagnosis,
                                    personalized treatment and compassionate care.
                                    Schedule your consultation today and take the
                                    first step towards a pain-free life.

                                </p>

                                <div className="spine-cta-buttons">

                                    <button className="spine-primary-btn">

                                        <i className="bi bi-calendar-check me-2"></i>

                                        Book Appointment

                                    </button>

                                    <button className="spine-outline-btn">

                                        <i className="bi bi-telephone me-2"></i>

                                        +91 12345 67890

                                    </button>

                                </div>

                            </div>

                        </Col>



                        {/*==============================
                    RIGHT GLASS CARD
            ==============================*/}

                        <Col lg={5}>

                            <div className="spine-cta-box">

                                <div className="spine-cta-icon">

                                    <i className="bi bi-person-standing"></i>

                                </div>

                                <h3>

                                    Advanced Spine Surgery & Rehabilitation

                                </h3>

                                <p>

                                    Our multidisciplinary Spine Surgery team combines
                                    advanced technology, minimally invasive surgical
                                    techniques and comprehensive rehabilitation to
                                    restore mobility, relieve pain and improve your
                                    quality of life.

                                </p>

                                <div className="spine-cta-features">

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Advanced Spine Surgery

                                    </div>

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Minimally Invasive Procedures

                                    </div>

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Rehabilitation & Physiotherapy

                                    </div>

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Experienced Spine Specialists

                                    </div>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>


        </>
    )
}

export default SpineSurgery