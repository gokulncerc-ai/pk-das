import React from 'react'
import "./Oncology.css"
// ------------------------Images------------------------
import Oncology1 from "../../../../assets/Images/oncology1.avif";
import Oncology2 from "../../../../assets/Images/oncology2.avif";
import generaldoctor1 from "../../../../assets/Images/generaldoc1.webp";
import generaldoctor2 from "../../../../assets/Images/generaldoc2.webp";


// ------------------React Boostrap--------------
import {
    Container,
    Row,
    Col,
    Breadcrumb
} from "react-bootstrap";


const Oncology = () => {
    return (
        <>
            {/*=================================
                    HERO SECTION
            =================================*/}

            <section
                className="oncology-hero"
                style={{
                    backgroundImage: `url(${Oncology1})`
                }}
            >

                <div className="oncology-overlay"></div>

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={10}>

                            <div className="oncology-hero-content">

                                <Breadcrumb className="oncology-breadcrumb">

                                    <Breadcrumb.Item href="/">
                                        Home
                                    </Breadcrumb.Item>

                                    <Breadcrumb.Item href="/departments">
                                        Departments
                                    </Breadcrumb.Item>

                                    <Breadcrumb.Item active>
                                        Oncology
                                    </Breadcrumb.Item>

                                </Breadcrumb>

                                <span className="oncology-badge">

                                    Centre for Cancer Care Excellence

                                </span>

                                <h1>

                                    Comprehensive Cancer Care With Advanced
                                    Technology, Precision & Compassion

                                </h1>

                                {/* <p>

                                    At PK Das Institute of Medical Sciences,
                                    our Oncology Department combines
                                    advanced technology, experienced
                                    specialists and compassionate care to
                                    deliver world-class cancer diagnosis,
                                    treatment and recovery support. Every
                                    patient receives a personalized treatment
                                    plan through our multidisciplinary
                                    tumour board approach.

                                </p> */}

                                {/*

                                <div className="oncology-hero-buttons">

                                    <button className="oncology-primary-btn">

                                        <i className="bi bi-calendar-check me-2"></i>

                                        Book Appointment

                                    </button>

                                    <button className="oncology-secondary-btn">

                                        <i className="bi bi-telephone me-2"></i>

                                        Contact Department

                                    </button>

                                </div>

                                */}

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>



            {/*=================================
                QUICK INFORMATION
            =================================*/}

            <section className="oncology-quick-info">

                <Container>

                    <Row className="g-4">

                        <Col lg={3} md={6}>

                            <div className="oncology-info-card">

                                <div className="oncology-info-icon">

                                    <i className="bi bi-shield-plus"></i>

                                </div>

                                <h3>

                                    Early

                                </h3>

                                <p>

                                    Cancer Detection & Prevention

                                </p>

                            </div>

                        </Col>



                        <Col lg={3} md={6}>

                            <div className="oncology-info-card">

                                <div className="oncology-info-icon">

                                    <i className="bi bi-diagram-3-fill"></i>

                                </div>

                                <h3>

                                    Expert

                                </h3>

                                <p>

                                    Multidisciplinary Tumour Board

                                </p>

                            </div>

                        </Col>



                        <Col lg={3} md={6}>

                            <div className="oncology-info-card">

                                <div className="oncology-info-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>

                                <h3>

                                    Advanced

                                </h3>

                                <p>

                                    Medical & Surgical Oncology

                                </p>

                            </div>

                        </Col>



                        <Col lg={3} md={6}>

                            <div className="oncology-info-card">

                                <div className="oncology-info-icon">

                                    <i className="bi bi-hospital-fill"></i>

                                </div>

                                <h3>

                                    Complete

                                </h3>

                                <p>

                                    Pain & Palliative Care

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/*=================================
            ABOUT SECTION
=================================*/}

            <section className="oncology-about">

                <Container>

                    <Row className="align-items-center">

                        <Col lg={6}>

                            <div className="oncology-about-image">

                                <img
                                    src={Oncology2}
                                    alt="PK Das Centre for Cancer Care"
                                    className="img-fluid"
                                />

                            </div>

                        </Col>



                        <Col lg={6}>

                            <div className="oncology-about-content">

                                <span className="oncology-section-tag">

                                    About Department

                                </span>

                                <h2>

                                    Comprehensive Cancer Care Through Innovation,
                                    Expertise & Compassion

                                </h2>

                                <p>

                                    At PK Das Institute of Medical Sciences, our Centre for
                                    Cancer Care has been established to provide comprehensive,
                                    evidence-based oncology services supported by advanced
                                    technology and multidisciplinary expertise. From early
                                    diagnosis to advanced treatment and rehabilitation, we
                                    focus on delivering personalized care that prioritizes
                                    every patient's physical and emotional well-being.

                                </p>

                                <p>

                                    Our dedicated team of medical, surgical and radiation
                                    oncologists collaborates through a multidisciplinary
                                    tumour board to design individualized treatment plans.
                                    Combining modern medical advancements with compassionate
                                    care, we remain committed to helping patients achieve the
                                    best possible outcomes throughout every stage of their
                                    cancer journey.

                                </p>



                                <div className="oncology-highlights">

                                    <div className="oncology-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Centre for Cancer Prevention

                                        </span>

                                    </div>



                                    <div className="oncology-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Early Cancer Detection

                                        </span>

                                    </div>



                                    <div className="oncology-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Multidisciplinary Tumour Board

                                        </span>

                                    </div>



                                    <div className="oncology-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Personalized Cancer Treatment

                                        </span>

                                    </div>



                                    <div className="oncology-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Advanced Diagnostic Technology

                                        </span>

                                    </div>



                                    <div className="oncology-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Compassionate Patient Support

                                        </span>

                                    </div>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/*=================================
        WHY CHOOSE OUR ONCOLOGY DEPARTMENT
=================================*/}

            <section className="oncology-features">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="oncology-section-heading">

                                <span>

                                    Why Choose Us

                                </span>

                                <h2>

                                    Excellence In Comprehensive Cancer Care

                                </h2>

                                <p>

                                    Our Oncology Department combines advanced technology,
                                    experienced specialists and evidence-based treatment
                                    protocols to deliver personalized cancer care with
                                    compassion, precision and hope.

                                </p>

                            </div>

                        </Col>

                    </Row>



                    <Row className="g-4 mt-2">

                        <Col lg={4} md={6}>

                            <div className="oncology-feature-card">

                                <div className="oncology-feature-icon">

                                    <i className="bi bi-shield-check"></i>

                                </div>

                                <h4>

                                    Early Detection & Prevention

                                </h4>

                                <p>

                                    Dedicated cancer screening programmes, preventive
                                    oncology clinics and early diagnosis help improve
                                    treatment outcomes and long-term survival.

                                </p>

                            </div>

                        </Col>



                        <Col lg={4} md={6}>

                            <div className="oncology-feature-card">

                                <div className="oncology-feature-icon">

                                    <i className="bi bi-people-fill"></i>

                                </div>

                                <h4>

                                    Multidisciplinary Tumour Board

                                </h4>

                                <p>

                                    Every patient benefits from collaborative treatment
                                    planning by experienced medical, surgical and radiation
                                    oncology specialists.

                                </p>

                            </div>

                        </Col>



                        <Col lg={4} md={6}>

                            <div className="oncology-feature-card">

                                <div className="oncology-feature-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>

                                <h4>

                                    Personalized Cancer Treatment

                                </h4>

                                <p>

                                    Individualized care plans combining chemotherapy,
                                    immunotherapy, targeted therapy, surgery and
                                    rehabilitation for better patient outcomes.

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/*=================================
        CENTRE OF EXCELLENCE
=================================*/}

            <section className="oncology-services">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="oncology-section-heading">

                                <span>

                                    Centre of Excellence

                                </span>

                                <h2>

                                    Comprehensive Oncology Services Under One Roof

                                </h2>

                                <p>

                                    Our Centre for Cancer Care provides comprehensive,
                                    multidisciplinary oncology services ranging from
                                    prevention and screening to advanced treatment,
                                    rehabilitation and supportive care, ensuring every
                                    patient receives personalized treatment throughout
                                    their cancer journey.

                                </p>

                            </div>

                        </Col>

                    </Row>



                    <Row className="g-4">

                        {/* Card 1 */}

                        <Col lg={3} md={6}>

                            <div className="oncology-service-card">

                                <div className="oncology-service-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>

                                <h4>

                                    Medical Oncology

                                </h4>

                                <p>

                                    Comprehensive chemotherapy, immunotherapy and targeted
                                    therapies tailored to every patient's condition.

                                </p>

                            </div>

                        </Col>



                        {/* Card 2 */}

                        <Col lg={3} md={6}>

                            <div className="oncology-service-card">

                                <div className="oncology-service-icon">

                                    <i className="bi bi-hospital-fill"></i>

                                </div>

                                <h4>

                                    Surgical Oncology

                                </h4>

                                <p>

                                    Advanced oncological surgeries using modern techniques
                                    for improved precision and faster recovery.

                                </p>

                            </div>

                        </Col>



                        {/* Card 3 */}

                        <Col lg={3} md={6}>

                            <div className="oncology-service-card">

                                <div className="oncology-service-icon">

                                    <i className="bi bi-broadcast"></i>

                                </div>

                                <h4>

                                    Radiation Oncology

                                </h4>

                                <p>

                                    High-precision radiation therapy designed to treat
                                    cancer while protecting surrounding healthy tissues.

                                </p>

                            </div>

                        </Col>



                        {/* Card 4 */}

                        <Col lg={3} md={6}>

                            <div className="oncology-service-card">

                                <div className="oncology-service-icon">

                                    <i className="bi bi-shield-check"></i>

                                </div>

                                <h4>

                                    Cancer Prevention

                                </h4>

                                <p>

                                    Preventive oncology programmes with early detection,
                                    screening and personalized risk assessment.

                                </p>

                            </div>

                        </Col>



                        {/* Card 5 */}

                        <Col lg={3} md={6}>

                            <div className="oncology-service-card">

                                <div className="oncology-service-icon">

                                    <i className="bi bi-capsule-pill"></i>

                                </div>

                                <h4>

                                    Chemotherapy

                                </h4>

                                <p>

                                    Day care and inpatient chemotherapy administered by
                                    experienced oncology professionals.

                                </p>

                            </div>

                        </Col>



                        {/* Card 6 */}

                        <Col lg={3} md={6}>

                            <div className="oncology-service-card">

                                <div className="oncology-service-icon">

                                    <i className="bi bi-bullseye"></i>

                                </div>

                                <h4>

                                    Targeted Therapy

                                </h4>

                                <p>

                                    Precision treatments focused on cancer-specific
                                    molecular targets for improved outcomes.

                                </p>

                            </div>

                        </Col>



                        {/* Card 7 */}

                        <Col lg={3} md={6}>

                            <div className="oncology-service-card">

                                <div className="oncology-service-icon">

                                    <i className="bi bi-stars"></i>

                                </div>

                                <h4>

                                    Immunotherapy

                                </h4>

                                <p>

                                    Advanced immunotherapy treatments that strengthen the
                                    body's immune system to fight cancer effectively.

                                </p>

                            </div>

                        </Col>



                        {/* Card 8 */}

                        <Col lg={3} md={6}>

                            <div className="oncology-service-card">

                                <div className="oncology-service-icon">

                                    <i className="bi bi-heart"></i>

                                </div>

                                <h4>

                                    Palliative Care

                                </h4>

                                <p>

                                    Compassionate pain management and supportive care
                                    focused on improving quality of life for patients.

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/*=================================
        ADVANCED ONCOLOGY TREATMENTS
=================================*/}

            <section className="oncology-treatments">

                <Container>

                    <Row className="align-items-center g-5">

                        {/*=================================
                    LEFT IMAGE
            =================================*/}

                        <Col lg={5}>

                            <div className="oncology-treatments-image">

                                <img
                                    src={Oncology2}
                                    alt="Advanced Oncology Treatment"
                                    className="img-fluid"
                                />

                            </div>

                        </Col>



                        {/*=================================
                    RIGHT CONTENT
            =================================*/}

                        <Col lg={7}>

                            <div className="oncology-treatments-content">

                                <span className="oncology-section-tag">

                                    Advanced Treatments

                                </span>

                                <h2>

                                    Personalized Oncology Treatments Using Advanced Medical Technology

                                </h2>

                                <p>

                                    Our Centre for Cancer Care offers comprehensive treatment
                                    options supported by experienced oncologists,
                                    multidisciplinary expertise and modern medical
                                    technology. Every treatment plan is personalized to
                                    provide the highest standard of cancer care.

                                </p>



                                <Row className="g-3 mt-3">

                                    <Col md={6}>

                                        <div className="oncology-treatment-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Medical Oncology & Haematology

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="oncology-treatment-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Day Care & IP Chemotherapy

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="oncology-treatment-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Immunotherapy

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="oncology-treatment-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Targeted Therapy

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="oncology-treatment-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Breast Oncoplasty

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="oncology-treatment-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Laparoscopic GI Cancer Surgery

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="oncology-treatment-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                HPB, Uro & Gynaecological Oncology

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="oncology-treatment-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Head & Neck Cancer Surgery

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="oncology-treatment-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Bone & Soft Tissue Sarcoma Care

                                            </span>

                                        </div>

                                    </Col>



                                    <Col md={6}>

                                        <div className="oncology-treatment-card">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Video Assisted Thoracic Surgery

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
    CANCER PREVENTION & SCREENING
=================================*/}

            <section className="oncology-screening">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="oncology-section-heading">

                                <span>

                                    Prevention & Early Detection

                                </span>

                                <h2>

                                    Cancer Prevention & Screening Services

                                </h2>

                                <p>

                                    Early detection plays a vital role in successful cancer
                                    treatment. Our preventive oncology services focus on
                                    identifying cancer at its earliest stage through advanced
                                    screening programmes and personalized risk assessment.

                                </p>

                            </div>

                        </Col>

                    </Row>



                    <Row className="g-4">

                        {/*=================================
                    CARD 1
            =================================*/}

                        <Col lg={4} md={6}>

                            <div className="oncology-screening-card">

                                <div className="oncology-screening-icon">

                                    <i className="bi bi-shield-check"></i>

                                </div>

                                <h4>

                                    Preventive Oncology Clinic

                                </h4>

                                <p>

                                    Comprehensive cancer risk assessment, counselling and
                                    preventive care available every Thursday from
                                    <strong> 2:00 PM – 4:00 PM.</strong>

                                </p>

                            </div>

                        </Col>



                        {/*=================================
                    CARD 2
            =================================*/}

                        <Col lg={4} md={6}>

                            <div className="oncology-screening-card">

                                <div className="oncology-screening-icon">

                                    <i className="bi bi-lungs-fill"></i>

                                </div>

                                <h4>

                                    LDCT Screening

                                </h4>

                                <p>

                                    Low-dose CT screening for early detection of lung cancer
                                    in high-risk individuals.

                                </p>

                            </div>

                        </Col>



                        {/*=================================
                    CARD 3
            =================================*/}

                        <Col lg={4} md={6}>

                            <div className="oncology-screening-card">

                                <div className="oncology-screening-icon">

                                    <i className="bi bi-search-heart"></i>

                                </div>

                                <h4>

                                    Screening Colonoscopy

                                </h4>

                                <p>

                                    Early identification and prevention of colorectal cancer
                                    through advanced endoscopic screening.

                                </p>

                            </div>

                        </Col>



                        {/*=================================
                    CARD 4
            =================================*/}

                        <Col lg={4} md={6}>

                            <div className="oncology-screening-card">

                                <div className="oncology-screening-icon">

                                    <i className="bi bi-shield-plus"></i>

                                </div>

                                <h4>

                                    HPV Vaccination

                                </h4>

                                <p>

                                    Preventive vaccination programmes to reduce the risk of
                                    HPV-related cancers.

                                </p>

                            </div>

                        </Col>



                        {/*=================================
                    CARD 5
            =================================*/}

                        <Col lg={4} md={6}>

                            <div className="oncology-screening-card">

                                <div className="oncology-screening-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>

                                <h4>

                                    PAP Smear & Co-Testing

                                </h4>

                                <p>

                                    Advanced cervical cancer screening through PAP smear
                                    and HPV co-testing for early diagnosis.

                                </p>

                            </div>

                        </Col>



                        {/*=================================
                    CARD 6
            =================================*/}

                        <Col lg={4} md={6}>

                            <div className="oncology-screening-card">

                                <div className="oncology-screening-icon">

                                    <i className="bi bi-badge-ad-fill"></i>

                                </div>

                                <h4>

                                    Digital Mammography

                                </h4>

                                <p>

                                    High-quality breast imaging for early breast cancer
                                    detection with enhanced diagnostic accuracy.

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/*=================================
        OUR ONCOLOGY SPECIALISTS
=================================*/}

            <section className="oncology-specialists">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="oncology-section-heading">

                                <span>

                                    Meet Our Experts

                                </span>

                                <h2>

                                    Our Oncology Specialists

                                </h2>

                                <p>

                                    Our experienced oncology specialists combine advanced
                                    medical expertise with compassionate care to provide
                                    personalized treatment for every patient throughout
                                    their cancer journey.

                                </p>

                            </div>

                        </Col>

                    </Row>



                    <Row className="g-4 justify-content-center mt-3">

                        {/*=================================
                    DOCTOR 1
            =================================*/}

                        <Col lg={5} md={6}>

                            <div className="oncology-doctor-card">

                                <div className="oncology-doctor-image">

                                    <img
                                        src={generaldoctor2}
                                        alt="Dr. Daniel Udayan C"
                                        className="img-fluid"
                                    />

                                    <span className="oncology-experience">

                                        Senior Consultant

                                    </span>

                                </div>



                                <div className="oncology-doctor-content">

                                    <span className="oncology-doctor-designation">

                                        Consultant Medical Oncologist

                                    </span>

                                    <h3>

                                        Dr. Daniel Udayan C

                                    </h3>

                                    <p>

                                        Expert in comprehensive cancer management,
                                        chemotherapy, immunotherapy, targeted therapy and
                                        personalized treatment planning for a wide range of
                                        malignancies.

                                    </p>



                                    <div className="oncology-doctor-tags">

                                        <span>

                                            Medical Oncology

                                        </span>

                                        <span>

                                            Haematology

                                        </span>

                                    </div>



                                    <div className="oncology-doctor-buttons">

                                        <button className="oncology-primary-btn">

                                            <i className="bi bi-calendar-check me-2"></i>

                                            Book Appointment

                                        </button>



                                        <button className="oncology-outline-btn">

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

                            <div className="oncology-doctor-card">

                                <div className="oncology-doctor-image">

                                    <img
                                        src={generaldoctor1}
                                        alt="Dr. Abdul Malik M"
                                        className="img-fluid"
                                    />

                                    <span className="oncology-experience">

                                        Consultant

                                    </span>

                                </div>



                                <div className="oncology-doctor-content">

                                    <span className="oncology-doctor-designation">

                                        Consultant Radiation Oncologist

                                    </span>

                                    <h3>

                                        Dr. Abdul Malik M

                                    </h3>

                                    <p>

                                        Specializing in precision radiation oncology with
                                        advanced treatment planning focused on improving
                                        clinical outcomes while preserving healthy tissue.

                                    </p>



                                    <div className="oncology-doctor-tags">

                                        <span>

                                            Radiation Oncology

                                        </span>

                                        <span>

                                            Cancer Care

                                        </span>

                                    </div>



                                    <div className="oncology-doctor-buttons">

                                        <button className="oncology-primary-btn">

                                            <i className="bi bi-calendar-check me-2"></i>

                                            Book Appointment

                                        </button>



                                        <button className="oncology-outline-btn">

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
        ONCOLOGY CTA
=================================*/}

            <section className="oncology-cta">

                <Container>

                    <Row className="align-items-center">

                        {/*==============================
                    LEFT CONTENT
            ==============================*/}

                        <Col lg={7}>

                            <div className="oncology-cta-content">

                                <span className="oncology-section-tag">

                                    We're Here For You

                                </span>

                                <h2>

                                    Need Expert Cancer Care & Consultation?

                                </h2>

                                <p>

                                    At PK DAS Centre for Cancer Care, our multidisciplinary
                                    oncology team is committed to delivering compassionate,
                                    evidence-based treatment tailored to every patient.
                                    From early diagnosis and advanced therapies to
                                    rehabilitation and palliative care, we are with you
                                    throughout every stage of your cancer journey.

                                </p>

                                <div className="oncology-cta-buttons">

                                    <button className="oncology-primary-btn">

                                        <i className="bi bi-calendar-check me-2"></i>

                                        Book Appointment

                                    </button>

                                    <button className="oncology-outline-btn">

                                        <i className="bi bi-telephone me-2"></i>

                                        +91 12345 67890

                                    </button>

                                </div>

                            </div>

                        </Col>



                        {/*==============================
                    RIGHT GLASS BOX
            ==============================*/}

                        <Col lg={5}>

                            <div className="oncology-cta-box">

                                <div className="oncology-cta-icon">

                                    <i className="bi bi-shield-plus"></i>

                                </div>

                                <h3>

                                    Comprehensive Cancer Support

                                </h3>

                                <p>

                                    Our dedicated oncology team provides comprehensive
                                    diagnosis, advanced treatment, rehabilitation,
                                    counselling and supportive care designed to improve
                                    both clinical outcomes and quality of life.

                                </p>

                                <div className="oncology-cta-features">

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Multidisciplinary Tumour Board

                                    </div>

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Advanced Oncology Specialists

                                    </div>

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Personalized Cancer Care

                                    </div>

                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Pain & Palliative Support

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

export default Oncology