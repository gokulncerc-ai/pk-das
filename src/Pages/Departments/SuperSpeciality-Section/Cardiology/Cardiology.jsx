import React from 'react'
import "./Cardiology.css"
import cardiology1 from "../../../../assets/Images/cardiology1.webp"
import cardiology2 from "../../../../assets/Images/cardiology2.webp"
import cardiology3 from "../../../../assets/Images/cardiology3.webp"
import {
    Container,
    Row,
    Col,
    Breadcrumb,
    Button
} from "react-bootstrap";


const Cardiology = () => {

   

    return (
        <>

            <section
                className="cardiology-hero"
                style={{
                    backgroundImage: `url(${cardiology1})`
                }}
            >


                <div className="cardiology-overlay"></div>


                <Container>


                    <Row className="justify-content-center">


                        <Col lg={10}>


                            <div className="cardiology-hero-content">


                                <Breadcrumb className="cardiology-breadcrumb">


                                    <Breadcrumb.Item href="/">

                                        Home

                                    </Breadcrumb.Item>


                                    <Breadcrumb.Item href="/departments">

                                        Departments

                                    </Breadcrumb.Item>


                                    <Breadcrumb.Item active>

                                        Cardiology

                                    </Breadcrumb.Item>


                                </Breadcrumb>



                                <span className="cardiology-badge">

                                    Cardiology Department

                                </span>



                                <h1>

                                    Advanced Cardiac Care With Compassion & Excellence

                                </h1>



                                <p>

                                    Providing comprehensive heart care through advanced
                                    diagnostics, interventional cardiology, preventive
                                    cardiology and 24×7 emergency cardiac services
                                    delivered by experienced specialists.

                                </p>



                                {/* <div className="cardiology-hero-buttons">


                                    <Button className="cardiology-primary-btn">

                                        <i className="bi bi-calendar-check me-2"></i>

                                        Book Appointment

                                    </Button>



                                    <Button className="cardiology-secondary-btn">

                                        <i className="bi bi-telephone me-2"></i>

                                        Contact Department

                                    </Button>



                                </div> */}


                            </div>


                        </Col>


                    </Row>


                </Container>


            </section>





            {/*=================================
        QUICK INFORMATION CARDS
=================================*/}


            <section className="cardiology-quick-info">


                <Container>


                    <Row className="g-4">



                        <Col lg={3} md={6}>


                            <div className="cardiology-info-card">


                                <div className="cardiology-info-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>


                                <h3>

                                    24×7

                                </h3>


                                <p>

                                    Cardiac Emergency Care

                                </p>


                            </div>


                        </Col>




                        <Col lg={3} md={6}>


                            <div className="cardiology-info-card">


                                <div className="cardiology-info-icon">

                                    <i className="bi bi-person-check-fill"></i>

                                </div>


                                <h3>

                                    Expert

                                </h3>


                                <p>

                                    Cardiology Specialists

                                </p>


                            </div>


                        </Col>





                        <Col lg={3} md={6}>


                            <div className="cardiology-info-card">


                                <div className="cardiology-info-icon">

                                    <i className="bi bi-hospital-fill"></i>

                                </div>


                                <h3>

                                    Advanced

                                </h3>


                                <p>

                                    Cath Lab Facilities

                                </p>


                            </div>


                        </Col>





                        <Col lg={3} md={6}>


                            <div className="cardiology-info-card">


                                <div className="cardiology-info-icon">

                                    <i className="bi bi-shield-check"></i>

                                </div>


                                <h3>

                                    Complete

                                </h3>


                                <p>

                                    Heart Care Solutions

                                </p>


                            </div>


                        </Col>



                    </Row>


                </Container>


            </section>





            {/*=================================
            ABOUT SECTION
=================================*/}


            <section className="cardiology-about">


                <Container>


                    <Row className="align-items-center">



                        <Col lg={6}>


                            <div className="cardiology-about-image">


                                <img

                                    src={cardiology2}

                                    alt="Cardiology Department"

                                    className="img-fluid"

                                />


                            </div>


                        </Col>





                        <Col lg={6}>


                            <div className="cardiology-about-content">


                                <span className="cardiology-section-tag">

                                    About Department

                                </span>




                                <h2>

                                    Comprehensive Cardiac Care With Advanced Technology

                                </h2>



                                <p>

                                    The Department of Cardiology provides a broad range
                                    of services in the diagnosis and management of heart
                                    diseases. Our experienced cardiologists deliver
                                    advanced cardiac treatment with compassion,
                                    precision and patient-focused care.

                                </p>




                                <p>

                                    We believe that a healthy heart is achieved through
                                    a partnership between patients, families and
                                    healthcare providers. Our approach extends beyond
                                    treatment into prevention, lifestyle modification,
                                    diet guidance and long-term cardiac wellness.

                                </p>




                                <div className="cardiology-highlights">


                                    <div className="cardiology-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            24×7 Cardiac Care Services

                                        </span>

                                    </div>



                                    <div className="cardiology-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Advanced Diagnostic Facilities

                                        </span>

                                    </div>



                                    <div className="cardiology-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Modern Cath Lab Facilities

                                        </span>

                                    </div>



                                    <div className="cardiology-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Preventive Heart Care

                                        </span>

                                    </div>



                                    <div className="cardiology-highlight-item">

                                        <i className="bi bi-check-circle-fill"></i>

                                        <span>

                                            Interventional Cardiology

                                        </span>

                                    </div>



                                    <div className="cardiology-highlight-item">

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


            <section className="cardiology-features">


                <Container>



                    <Row className="justify-content-center">


                        <Col lg={8}>


                            <div className="cardiology-section-heading">


                                <span>

                                    Why Choose Us

                                </span>



                                <h2>

                                    Delivering Excellence in Cardiac Healthcare

                                </h2>



                                <p>

                                    Our Cardiology Department combines advanced
                                    technology, experienced specialists and
                                    patient-centred care to provide comprehensive
                                    solutions for prevention, diagnosis and treatment
                                    of heart diseases.

                                </p>



                            </div>


                        </Col>


                    </Row>





                    <Row className="g-4 mt-2">





                        <Col lg={4} md={6}>


                            <div className="cardiology-feature-card">


                                <div className="cardiology-feature-icon">


                                    <i className="bi bi-hospital-fill"></i>


                                </div>



                                <h4>

                                    Advanced Cardiac Infrastructure

                                </h4>



                                <p>

                                    Equipped with modern Cath Lab facilities,
                                    advanced diagnostics and technology-driven
                                    cardiac treatment solutions.

                                </p>



                            </div>


                        </Col>





                        <Col lg={4} md={6}>


                            <div className="cardiology-feature-card">


                                <div className="cardiology-feature-icon">


                                    <i className="bi bi-person-heart"></i>


                                </div>



                                <h4>

                                    Experienced Cardiologists

                                </h4>



                                <p>

                                    Our specialists provide expert diagnosis,
                                    personalized treatment plans and compassionate
                                    cardiac care.

                                </p>



                            </div>


                        </Col>





                        <Col lg={4} md={6}>


                            <div className="cardiology-feature-card">


                                <div className="cardiology-feature-icon">


                                    <i className="bi bi-heart-pulse-fill"></i>


                                </div>



                                <h4>

                                    Complete Heart Care

                                </h4>



                                <p>

                                    From preventive cardiology to advanced
                                    interventional procedures, we provide complete
                                    cardiac solutions.

                                </p>



                            </div>


                        </Col>




                    </Row>



                </Container>



            </section>







            {/*=================================
            OUR ADVANTAGES
=================================*/}



            <section className="cardiology-advantages">



                <Container>



                    <Row className="align-items-center g-5">



                        {/*==========================
        LEFT IMAGE
===========================*/}



                        <Col lg={5}>


                            <div className="cardiology-advantages-image">


                                <img

                                    src={cardiology3}

                                    alt="Advanced Cardiac Care"

                                    className="img-fluid"

                                />


                            </div>


                        </Col>





                        {/*==========================
        RIGHT CONTENT
===========================*/}



                        <Col lg={7}>


                            <div className="cardiology-advantages-content">



                                <span className="cardiology-section-tag">

                                    Our Advantages

                                </span>




                                <h2>

                                    Advanced Cardiac Services For Better Heart Health

                                </h2>




                                <p>

                                    The Cardiology Department provides state-of-the-art
                                    diagnostic and treatment services for patients with
                                    actual or suspected heart disease. Our facilities
                                    include advanced cardiac investigations, emergency
                                    cardiac support and interventional procedures.

                                </p>






                                <Row className="g-3 mt-3">





                                    <Col md={6}>


                                        <div className="cardiology-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Coronary Angiography

                                            </span>


                                        </div>


                                    </Col>





                                    <Col md={6}>


                                        <div className="cardiology-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Balloon Angioplasty

                                            </span>


                                        </div>


                                    </Col>





                                    <Col md={6}>


                                        <div className="cardiology-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Stent Placement

                                            </span>


                                        </div>


                                    </Col>





                                    <Col md={6}>


                                        <div className="cardiology-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                24×7 Cath Lab Services

                                            </span>


                                        </div>


                                    </Col>





                                    <Col md={6}>


                                        <div className="cardiology-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Pacemaker Implantation

                                            </span>


                                        </div>


                                    </Col>





                                    <Col md={6}>


                                        <div className="cardiology-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                2D Echo Colour Doppler

                                            </span>


                                        </div>


                                    </Col>





                                    <Col md={6}>


                                        <div className="cardiology-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Stress ECG Testing

                                            </span>


                                        </div>


                                    </Col>





                                    <Col md={6}>


                                        <div className="cardiology-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Preventive Cardiology

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
        NON INVASIVE CARDIOLOGY
=================================*/}


            <section className="cardiology-non-invasive">


                <Container>



                    <Row className="justify-content-center">


                        <Col lg={8}>


                            <div className="cardiology-section-heading">


                                <span>

                                    Non-Invasive Cardiology

                                </span>



                                <h2>

                                    Advanced Cardiac Diagnostic Services

                                </h2>



                                <p>

                                    Our department provides advanced non-invasive
                                    cardiac investigations to accurately diagnose,
                                    monitor and prevent heart diseases using
                                    modern diagnostic technology.

                                </p>



                            </div>


                        </Col>


                    </Row>





                    <Row className="g-4">





                        <Col lg={4} md={6}>


                            <div className="cardiology-service-card">


                                <div className="cardiology-service-icon">

                                    <i className="bi bi-activity"></i>

                                </div>


                                <h4>

                                    Resting ECG

                                </h4>


                                <p>

                                    Electrocardiogram testing to evaluate heart rhythm
                                    and detect cardiac abnormalities.

                                </p>


                            </div>


                        </Col>







                        <Col lg={4} md={6}>


                            <div className="cardiology-service-card">


                                <div className="cardiology-service-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>


                                <h4>

                                    Stress ECG

                                </h4>


                                <p>

                                    Exercise-based cardiac evaluation to assess heart
                                    function during physical activity.

                                </p>


                            </div>


                        </Col>







                        <Col lg={4} md={6}>


                            <div className="cardiology-service-card">


                                <div className="cardiology-service-icon">

                                    <i className="bi bi-heart"></i>

                                </div>


                                <h4>

                                    2D Colour Doppler Echo

                                </h4>


                                <p>

                                    Advanced echocardiography for detailed assessment
                                    of cardiac structure and function.

                                </p>


                            </div>


                        </Col>







                        <Col lg={4} md={6}>


                            <div className="cardiology-service-card">


                                <div className="cardiology-service-icon">

                                    <i className="bi bi-soundwave"></i>

                                </div>


                                <h4>

                                    Doppler Imaging

                                </h4>


                                <p>

                                    Detailed blood flow assessment through advanced
                                    Doppler technology.

                                </p>


                            </div>


                        </Col>







                        <Col lg={4} md={6}>


                            <div className="cardiology-service-card">


                                <div className="cardiology-service-icon">

                                    <i className="bi bi-diagram-3-fill"></i>

                                </div>


                                <h4>

                                    Carotid Doppler

                                </h4>


                                <p>

                                    Evaluation of carotid arteries to assess vascular
                                    health and stroke risk.

                                </p>


                            </div>


                        </Col>







                        <Col lg={4} md={6}>


                            <div className="cardiology-service-card">


                                <div className="cardiology-service-icon">

                                    <i className="bi bi-lungs-fill"></i>

                                </div>


                                <h4>

                                    Peripheral & Renal Doppler

                                </h4>


                                <p>

                                    Assessment of peripheral and renal blood vessels
                                    for complete vascular evaluation.

                                </p>


                            </div>


                        </Col>





                    </Row>



                </Container>


            </section>







            {/*=================================
        INTERVENTIONAL CARDIOLOGY
=================================*/}



            <section className="cardiology-interventional">


                <Container>



                    <Row className="align-items-center g-5">





                        <Col lg={6}>


                            <div className="cardiology-interventional-content">



                                <span className="cardiology-section-tag">

                                    Interventional Cardiology

                                </span>




                                <h2>

                                    Advanced Heart Procedures With Precision Care

                                </h2>




                                <p>

                                    Our Interventional Cardiology programme provides
                                    advanced minimally invasive procedures for patients
                                    with coronary artery disease and other cardiac
                                    conditions.

                                </p>



                                <p>

                                    Supported by a modern catheterisation laboratory,
                                    our team performs emergency and elective cardiac
                                    interventions with advanced technology designed
                                    to improve patient outcomes and recovery.

                                </p>






                                <div className="cardiology-interventional-list">



                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Drug Eluting Stent Procedures

                                    </div>




                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        24×7 Emergency Angioplasty

                                    </div>





                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Trans-Radial Coronary Intervention

                                    </div>





                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Coronary & Peripheral Procedures

                                    </div>




                                </div>



                            </div>


                        </Col>






                        <Col lg={6}>


                            <div className="cardiology-interventional-image">


                                <img

                                    src={cardiology2}

                                    alt="Interventional Cardiology"

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


            <section className="cardiology-specialists">


                <Container>




                    <Row className="justify-content-center">


                        <Col lg={8}>


                            <div className="cardiology-section-heading">


                                <span>

                                    Meet Our Experts

                                </span>




                                <h2>

                                    Our Cardiology Specialists

                                </h2>




                                <p>

                                    Our experienced cardiologists are dedicated to
                                    providing advanced cardiac care through accurate
                                    diagnosis, personalized treatment plans and
                                    compassionate patient care.

                                </p>




                            </div>


                        </Col>


                    </Row>






                    <Row className="g-4 justify-content-center mt-3">





                        {/*=================================
            DOCTOR 1
=================================*/}



                        <Col lg={5} md={6}>


                            <div className="cardiology-doctor-card">


                                <div className="cardiology-doctor-image">


                                    <img

                                        src={cardiology1}

                                        alt="Dr Frijo Jose A"

                                        className="img-fluid"

                                    />



                                    <span className="cardiology-experience">

                                        Senior Consultant

                                    </span>


                                </div>





                                <div className="cardiology-doctor-content">


                                    <span className="cardiology-doctor-designation">

                                        Cardiologist Specialist

                                    </span>




                                    <h3>

                                        Dr. Frijo Jose A

                                    </h3>




                                    <p>

                                        Experienced cardiologist providing advanced
                                        diagnosis, preventive cardiac care and modern
                                        interventional treatment solutions for heart
                                        diseases.

                                    </p>




                                    <div className="cardiology-doctor-buttons">



                                        <button className="cardiology-primary-btn">


                                            <i className="bi bi-calendar-check me-2"></i>


                                            Book Appointment


                                        </button>




                                        <button className="cardiology-outline-btn">


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


                            <div className="cardiology-doctor-card">


                                <div className="cardiology-doctor-image">


                                    <img

                                        src={cardiology2}

                                        alt="Cardiology Specialist"

                                        className="img-fluid"

                                    />



                                    <span className="cardiology-experience">

                                        Consultant Cardiologist

                                    </span>


                                </div>





                                <div className="cardiology-doctor-content">


                                    <span className="cardiology-doctor-designation">

                                        Cardiology Specialist

                                    </span>




                                    <h3>

                                        Cardiology Consultant

                                    </h3>




                                    <p>

                                        Specialized in comprehensive cardiac evaluation,
                                        management of heart conditions and long-term
                                        preventive cardiac care.

                                    </p>




                                    <div className="cardiology-doctor-buttons">



                                        <button className="cardiology-primary-btn">


                                            <i className="bi bi-calendar-check me-2"></i>


                                            Book Appointment


                                        </button>




                                        <button className="cardiology-outline-btn">


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



            <section className="cardiology-cta">


                <Container>




                    <Row className="align-items-center">





                        {/*==============================
            LEFT CONTENT
==============================*/}



                        <Col lg={7}>


                            <div className="cardiology-cta-content">



                                <span className="cardiology-section-tag">

                                    We're Here For You

                                </span>




                                <h2>

                                    Need Cardiac Medical Assistance?

                                </h2>




                                <p>

                                    Our Cardiology specialists are available to provide
                                    expert consultation, advanced diagnosis, emergency
                                    cardiac care and personalized treatment plans.
                                    Schedule your appointment today for complete
                                    heart care.

                                </p>




                                <div className="cardiology-cta-buttons">



                                    <button className="cardiology-primary-btn">


                                        <i className="bi bi-calendar-check me-2"></i>


                                        Book Appointment


                                    </button>




                                    <button className="cardiology-outline-btn">


                                        <i className="bi bi-telephone me-2"></i>


                                        +91 12345 67890


                                    </button>



                                </div>



                            </div>



                        </Col>







                        {/*==============================
            RIGHT CTA BOX
==============================*/}



                        <Col lg={5}>


                            <div className="cardiology-cta-box">



                                <div className="cardiology-cta-icon">


                                    <i className="bi bi-heart-pulse-fill"></i>


                                </div>




                                <h3>

                                    24×7 Cardiac Emergency Support

                                </h3>




                                <p>

                                    Our emergency cardiac team is available round the
                                    clock to provide immediate medical assistance and
                                    critical care support whenever required.

                                </p>





                                <div className="cardiology-cta-features">



                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Emergency Cardiac Consultation

                                    </div>




                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Critical Care Support

                                    </div>




                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Experienced Cardiac Team

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

export default Cardiology
