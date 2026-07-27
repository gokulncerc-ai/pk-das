import React from 'react'
import "./Neonatology.css"
import neonatology1 from "../../../../assets/Images/neonatology1.webp"
import neonatology2 from "../../../../assets/Images/neonatology2.webp"
import neonatology3 from "../../../../assets/Images/neonatology3.webp"

import {
    Container,
    Row,
    Col,
    Breadcrumb
} from "react-bootstrap";

const Neonatology = () => {
    return (
        <>


            {/*==================================================
                    NEONATOLOGY HERO
            ==================================================*/}


            <section
                className="neonatology-hero"
                style={{
                    backgroundImage: `url(${neonatology2})`
                }}
            >


                <div className="neonatology-overlay"></div>



                <Container>


                    <Row className="justify-content-center">


                        <Col lg={10}>


                            <div className="neonatology-hero-content">



                                <Breadcrumb className="neonatology-breadcrumb">


                                    <Breadcrumb.Item href="/">

                                        Home

                                    </Breadcrumb.Item>



                                    <Breadcrumb.Item href="/departments">

                                        Departments

                                    </Breadcrumb.Item>



                                    <Breadcrumb.Item active>

                                        Neonatology

                                    </Breadcrumb.Item>



                                </Breadcrumb>





                                <span className="neonatology-badge">


                                    Neonatology Department


                                </span>





                                <h1>


                                    Providing Advanced Care For Newborns With Compassion & Excellence


                                </h1>









                            </div>


                        </Col>


                    </Row>


                </Container>



            </section>







            {/*==================================================
                    QUICK INFORMATION CARDS
            ==================================================*/}



            <section className="neonatology-quick-info">


                <Container>


                    <Row className="g-4">





                        <Col lg={3} md={6}>


                            <div className="neonatology-info-card">


                                <div className="neonatology-info-icon">


                                    <i className="bi bi-heart-pulse-fill"></i>


                                </div>



                                <h3>

                                    24×7

                                </h3>



                                <p>

                                    NICU Care Services

                                </p>



                            </div>


                        </Col>







                        <Col lg={3} md={6}>


                            <div className="neonatology-info-card">


                                <div className="neonatology-info-icon">


                                    <i className="bi bi-hospital-fill"></i>


                                </div>



                                <h3>

                                    2500sq.ft

                                </h3>



                                <p>

                                    Neonatal Unit Area

                                </p>



                            </div>


                        </Col>







                        <Col lg={3} md={6}>


                            <div className="neonatology-info-card">


                                <div className="neonatology-info-icon">


                                    <i className="bi bi-person-hearts"></i>


                                </div>



                                <h3>

                                    10 Beds

                                </h3>



                                <p>

                                    ICU / HDU Facilities

                                </p>



                            </div>


                        </Col>







                        <Col lg={3} md={6}>


                            <div className="neonatology-info-card">


                                <div className="neonatology-info-icon">


                                    <i className="bi bi-shield-check"></i>


                                </div>



                                <h3>

                                    600+

                                </h3>



                                <p>

                                    Outpatient Baby Care

                                </p>



                            </div>


                        </Col>





                    </Row>


                </Container>


            </section>


            {/* --------------About neonatology-------------- */}

            <section className="neonatology-about">



                <Container>




                    <Row className="align-items-center">





                        <Col lg={6}>


                            <div className="neonatology-about-image">



                                <img

                                    src={neonatology1}

                                    alt="Neonatology Department"

                                    className="img-fluid"

                                />



                            </div>


                        </Col>








                        <Col lg={6}>


                            <div className="neonatology-about-content">



                                <span className="neonatology-section-tag">


                                    About Department


                                </span>





                                <h2>


                                    NEONATOLOGY SERVICES


                                </h2>






                                <p>


                                    At our esteemed hospital, we take great pride in our Neonatology division,
                                    which originated within the Paediatrics department in 2012 and transitioned
                                    into a dedicated Neonatology division in 2016. Annually, we oversee approximately
                                    250 intramural births and provide inpatient care for about 250 new-borns,
                                    along with outpatient care for 600 babies.


                                </p>






                                <p>


                                    With a focus on delivering exceptional care to new-borns and infants,
                                    our hospital boasts the best specialized doctors in the field of Neonatology,
                                    ensuring that every child receives the highest standard of medical attention
                                    and support.


                                </p>






                                <div className="neonatology-highlights">





                                    <div className="neonatology-highlight-item">


                                        <i className="bi bi-check-circle-fill"></i>


                                        <span>

                                            Specialized Neonatal Care

                                        </span>


                                    </div>






                                    <div className="neonatology-highlight-item">


                                        <i className="bi bi-check-circle-fill"></i>


                                        <span>

                                            Advanced NICU Facilities

                                        </span>


                                    </div>






                                    <div className="neonatology-highlight-item">


                                        <i className="bi bi-check-circle-fill"></i>


                                        <span>

                                            High Risk Newborn Care

                                        </span>


                                    </div>






                                    <div className="neonatology-highlight-item">


                                        <i className="bi bi-check-circle-fill"></i>


                                        <span>

                                            Expert Neonatology Specialists

                                        </span>


                                    </div>





                                </div>



                            </div>


                        </Col>



                    </Row>



                </Container>



            </section>

            {/*==================================================
                    INFRASTRUCTURE SECTION
            ==================================================*/}


            <section className="neonatology-features">


                <Container>




                    <Row className="justify-content-center">


                        <Col lg={8}>


                            <div className="neonatology-section-heading">


                                <span>

                                    Infrastructure

                                </span>



                                <h2>

                                    Advanced Neonatal Infrastructure For Exceptional Care

                                </h2>



                                <p>

                                    Our Neonatal Unit is proud to offer the best infrastructure in the region,
                                    ensuring top-notch care for our little ones. Our state-of-the-art facilities,
                                    advanced equipment, and dedicated team of healthcare professionals work
                                    together seamlessly to provide the highest quality care and support.

                                </p>



                            </div>


                        </Col>


                    </Row>







                    <Row className="g-4">





                        <Col lg={4} md={6}>


                            <div className="neonatology-feature-card">



                                <div className="neonatology-feature-icon">


                                    <i className="bi bi-thermometer-half"></i>


                                </div>




                                <h4>

                                    Thermo-Neutral Environment

                                </h4>




                                <p>

                                    Our Neonatal Unit boasts a spacious 2500sq.ft area designed to maintain
                                    a Thermo-Neutral environment, ensuring optimal comfort for our patients.

                                </p>



                            </div>


                        </Col>









                        <Col lg={4} md={6}>


                            <div className="neonatology-feature-card">



                                <div className="neonatology-feature-icon">


                                    <i className="bi bi-hospital"></i>


                                </div>




                                <h4>

                                    ICU / HDU Beds

                                </h4>




                                <p>

                                    With 10 ICU/ HDU beds and both Premium & Economic paying wards,
                                    we offer a range of options to suit diverse needs.

                                </p>



                            </div>


                        </Col>









                        <Col lg={4} md={6}>


                            <div className="neonatology-feature-card">



                                <div className="neonatology-feature-icon">


                                    <i className="bi bi-lungs-fill"></i>


                                </div>




                                <h4>

                                    Advanced Ventilation Support

                                </h4>




                                <p>

                                    Our unit is equipped with 3 mechanical ventilators,
                                    Non-invasive Ventilation units (CPAP & HFNC).

                                </p>



                            </div>


                        </Col>









                        <Col lg={4} md={6}>


                            <div className="neonatology-feature-card">



                                <div className="neonatology-feature-icon">


                                    <i className="bi bi-activity"></i>


                                </div>




                                <h4>

                                    Advanced Monitoring

                                </h4>




                                <p>

                                    Equipped with LED Units and Multipara monitors to provide
                                    continuous monitoring and advanced neonatal support.

                                </p>



                            </div>


                        </Col>









                        <Col lg={4} md={6}>


                            <div className="neonatology-feature-card">



                                <div className="neonatology-feature-icon">


                                    <i className="bi bi-truck-front-fill"></i>


                                </div>




                                <h4>

                                    Neonatal Transport Team

                                </h4>




                                <p>

                                    We have a dedicated neonatal transport team and ambulance
                                    to ensure timely and safe transfers when needed.

                                </p>



                            </div>


                        </Col>









                        <Col lg={4} md={6}>


                            <div className="neonatology-feature-card">



                                <div className="neonatology-feature-icon">


                                    <i className="bi bi-heart-pulse-fill"></i>


                                </div>




                                <h4>

                                    Essential Medical Equipment

                                </h4>




                                <p>

                                    Our infrastructure includes MIRA Cradle, transport incubator,
                                    neonatal echocardiography, portable USG machine and portable X-Ray machine.

                                </p>



                            </div>


                        </Col>





                    </Row>





                </Container>



            </section>









            /*==================================================
            HUMAN RESOURCES SECTION
            ==================================================*/



            <section className="neonatology-advantages">



                <Container>




                    <Row className="align-items-center g-5">





                        <Col lg={5}>


                            <div className="neonatology-advantages-image">



                                <img

                                    src={neonatology3}

                                    alt="Neonatal Care Team"

                                    className="img-fluid"

                                />



                            </div>


                        </Col>








                        <Col lg={7}>


                            <div className="neonatology-advantages-content">



                                <span className="neonatology-section-tag">


                                    Human Resources


                                </span>






                                <h2>


                                    Dedicated Neonatal Care Team Providing Excellence


                                </h2>






                                <p>


                                    In our Neuro Medicine department, we are proud to offer a centre of
                                    excellence staffed by a Neonatologist and 10 nurses who manage all
                                    neurological emergencies 24/7. Utilizing a comprehensive range of
                                    equipment and tests, we ensure a thorough assessment is conducted
                                    before determining preventive and curative measures. This commitment
                                    to excellence in care distinguishes us as leaders in our field.


                                </p>








                                <Row className="g-3 mt-3">






                                    <Col md={6}>


                                        <div className="neonatology-advantage-card">


                                            <i className="bi bi-person-badge-fill"></i>


                                            <span>

                                                Dedicated Neonatologist

                                            </span>


                                        </div>


                                    </Col>








                                    <Col md={6}>


                                        <div className="neonatology-advantage-card">


                                            <i className="bi bi-people-fill"></i>


                                            <span>

                                                10 Trained Nurses

                                            </span>


                                        </div>


                                    </Col>








                                    <Col md={6}>


                                        <div className="neonatology-advantage-card">


                                            <i className="bi bi-clock-fill"></i>


                                            <span>

                                                24/7 Emergency Management

                                            </span>


                                        </div>


                                    </Col>








                                    <Col md={6}>


                                        <div className="neonatology-advantage-card">


                                            <i className="bi bi-shield-check"></i>


                                            <span>

                                                Preventive & Curative Care

                                            </span>


                                        </div>


                                    </Col>






                                </Row>



                            </div>


                        </Col>




                    </Row>



                </Container>



            </section>

            {/*==================================================
                    SERVICES OFFERED
            ==================================================*/}


            <section className="neonatology-services">


                <Container>




                    <Row className="justify-content-center">


                        <Col lg={8}>


                            <div className="neonatology-section-heading">


                                <span>

                                    Services Offered

                                </span>



                                <h2>

                                    Advanced Neonatal Care Services

                                </h2>



                                <p>

                                    Our Neonatology department specializes in providing advanced care
                                    for newborns less than 28 days old and preterm babies born before
                                    37 weeks of gestation.

                                </p>



                            </div>


                        </Col>


                    </Row>







                    <Row className="g-4">







                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">


                                    <i className="bi bi-heart-pulse-fill"></i>


                                </div>



                                <h4>

                                    High-Risk Newborn Care

                                </h4>



                                <p>

                                    We excel in caring for high-risk newborns, particularly those with
                                    Extremely Low Birth Weight (below 1500g), surgical needs,
                                    and Inborn Errors of Metabolism (IEM).

                                </p>



                            </div>


                        </Col>









                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">


                                    <i className="bi bi-hospital-fill"></i>


                                </div>



                                <h4>

                                    Neonatal Intensive Care

                                </h4>



                                <p>

                                    As one of the largest neonatal care centres in Palakkad,
                                    we provide specialized intensive care for newborns requiring
                                    advanced medical support.

                                </p>



                            </div>


                        </Col>









                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">


                                    <i className="bi bi-truck-front-fill"></i>


                                </div>



                                <h4>

                                    Neonatal Transport

                                </h4>



                                <p>

                                    We are equipped to transport sick neonates from other facilities
                                    within a 60km radius with dedicated transport support.

                                </p>



                            </div>


                        </Col>









                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">


                                    <i className="bi bi-search-heart"></i>


                                </div>



                                <h4>

                                    Bedside Screening

                                </h4>



                                <p>

                                    Our comprehensive services include bedside screening,
                                    echocardiography, Neurosonogram and advanced neonatal assessments.

                                </p>



                            </div>


                        </Col>









                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">


                                    <i className="bi bi-activity"></i>


                                </div>



                                <h4>

                                    Neonatal Procedures

                                </h4>



                                <p>

                                    We provide specialised procedures including central line insertion
                                    and advanced neonatal interventions.

                                </p>



                            </div>


                        </Col>









                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">


                                    <i className="bi bi-shield-check"></i>


                                </div>



                                <h4>

                                    Complete Neonatal Support

                                </h4>



                                <p>

                                    With our top-notch facilities and expertise, we ensure
                                    the best possible care for our little ones.

                                </p>



                            </div>


                        </Col>






                    </Row>





                </Container>



            </section>













            <section className="neonatology-screening">



                <Container>




                    <Row className="align-items-center g-5">





                        <Col lg={6}>


                            <div className="neonatology-screening-content">



                                <span className="neonatology-section-tag">


                                    Neonatal Screening Services


                                </span>






                                <h2>


                                    Comprehensive Preventive Screening For Newborns


                                </h2>






                                <p>


                                    Our hospital is renowned for providing the best facilities and
                                    expertise in neonatal care, ensuring that every newborn receives
                                    top-notch preventive services and screenings.


                                </p>







                                <p>


                                    Our Neonatology department places a strong emphasis on preventive
                                    care for newborns, considering it an essential and invaluable part
                                    of our neonatal services.


                                </p>








                                <div className="neonatology-interventional-list">





                                    <div>


                                        <i className="bi bi-check-circle-fill"></i>


                                        Hearing Loss Screening


                                    </div>







                                    <div>


                                        <i className="bi bi-check-circle-fill"></i>


                                        Hypothyroidism Screening


                                    </div>







                                    <div>


                                        <i className="bi bi-check-circle-fill"></i>


                                        Congenital Adrenal Hyperplasia Screening


                                    </div>







                                    <div>


                                        <i className="bi bi-check-circle-fill"></i>


                                        Critical Congenital Heart Disease Screening


                                    </div>







                                    <div>


                                        <i className="bi bi-check-circle-fill"></i>


                                        Metabolic Disorder Screening


                                    </div>






                                </div>




                            </div>


                        </Col>







                        <Col lg={6}>


                            <div className="neonatology-screening-image">



                                <img

                                    src={neonatology1}

                                    alt="Neonatal Screening Services"

                                    className="img-fluid"

                                />



                            </div>


                        </Col>






                    </Row>




                </Container>



            </section>













            <section className="neonatology-lactation">



                <Container>




                    <Row className="align-items-center g-5">





                        <Col lg={6}>


                            <div className="neonatology-lactation-image">



                                <img

                                    src={neonatology3}

                                    alt="Lactation Counselling"

                                    className="img-fluid"

                                />



                            </div>


                        </Col>








                        <Col lg={6}>


                            <div className="neonatology-lactation-content">



                                <span className="neonatology-section-tag">


                                    Lactation And Feeding Counselling


                                </span>






                                <h2>


                                    Supporting Mothers With Expert Feeding Guidance


                                </h2>






                                <p>


                                    At our hospital, we excel in providing exceptional lactation and
                                    feeding counselling services. We prioritize supporting primigravida
                                    mothers and those experiencing challenges with latching,
                                    particularly those with a LATCH SCORE  8.


                                </p>







                                <p>


                                    Our dedicated team assesses the situation, identifies any issues,
                                    and offers personalized counselling to help overcome them.
                                    We are committed to ensuring that every mother receives the
                                    best possible guidance and support in their journey.


                                </p>





                            </div>


                        </Col>






                    </Row>




                </Container>



            </section>
            {/*=================================
        NEONATAL SCREENING SERVICES
=================================*/}


            <section className="neonatology-screening">


                <Container>


                    <Row className="justify-content-center">


                        <Col lg={8}>


                            <div className="neonatology-section-heading">


                                <span>

                                    Neonatal Screening Services

                                </span>



                                <h2>

                                    Comprehensive Preventive Care For Newborns

                                </h2>



                                <p>

                                    Our Neonatology department provides advanced screening
                                    programmes and preventive services to identify and manage
                                    newborn conditions at the earliest stage.

                                </p>


                            </div>


                        </Col>


                    </Row>





                    <Row className="g-4">



                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">

                                    <i className="bi bi-ear-fill"></i>

                                </div>


                                <h4>

                                    Hearing Screening

                                </h4>


                                <p>

                                    Screening services to detect hearing loss and ensure
                                    early intervention for newborn babies.

                                </p>


                            </div>


                        </Col>





                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>


                                <h4>

                                    Cardiac Screening

                                </h4>


                                <p>

                                    Universal screening for critical congenital heart
                                    diseases with advanced neonatal assessment.

                                </p>


                            </div>


                        </Col>





                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">

                                    <i className="bi bi-activity"></i>

                                </div>


                                <h4>

                                    Metabolic Screening

                                </h4>


                                <p>

                                    Early detection of metabolic disorders through
                                    comprehensive newborn screening programmes.

                                </p>


                            </div>


                        </Col>





                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">

                                    <i className="bi bi-eye-fill"></i>

                                </div>


                                <h4>

                                    ROP Screening

                                </h4>


                                <p>

                                    Retinopathy of prematurity screening services for
                                    high-risk preterm babies.

                                </p>


                            </div>


                        </Col>





                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">

                                    <i className="bi bi-capsule"></i>

                                </div>


                                <h4>

                                    Thyroid Screening

                                </h4>


                                <p>

                                    Screening for thyroid disorders among newborns and
                                    premature babies.

                                </p>


                            </div>


                        </Col>





                        <Col lg={4} md={6}>


                            <div className="neonatology-service-card">


                                <div className="neonatology-service-icon">

                                    <i className="bi bi-shield-check"></i>

                                </div>


                                <h4>

                                    Preventive Care

                                </h4>


                                <p>

                                    Complete preventive neonatal care with immunization
                                    and follow-up support.

                                </p>


                            </div>


                        </Col>



                    </Row>


                </Container>


            </section>





/*=================================
            LACTATION COUNSELLING
=================================*/



<section className="neonatology-lactation">


    <Container>


        <Row className="align-items-center g-5">



            <Col lg={6}>


                <div className="neonatology-lactation-content">


                    <span className="neonatology-section-tag">

                        Lactation And Feeding Counselling

                    </span>




                    <h2>

                        Supporting Mothers With Expert Feeding Guidance

                    </h2>




                    <p>

                        At our hospital, we excel in providing exceptional
                        lactation and feeding counselling services. We prioritize
                        supporting primigravida mothers and those experiencing
                        challenges with latching.

                    </p>




                    <p>

                        Our dedicated team assesses feeding difficulties,
                        identifies concerns and provides personalized counselling
                        to ensure every mother receives the best possible guidance
                        and support.

                    </p>





                    <div className="neonatology-check-list">



                        <div>

                            <i className="bi bi-check-circle-fill"></i>

                            Support For Primigravida Mothers

                        </div>




                        <div>

                            <i className="bi bi-check-circle-fill"></i>

                            Latching Assessment And Guidance

                        </div>




                        <div>

                            <i className="bi bi-check-circle-fill"></i>

                            Personalized Feeding Counselling

                        </div>



                    </div>



                </div>


            </Col>





            <Col lg={6}>


                <div className="neonatology-lactation-box">


                    <div className="neonatology-lactation-icon">


                        <i className="bi bi-person-hearts"></i>


                    </div>



                    <h3>

                        Complete Breastfeeding Support

                    </h3>



                    <p>

                        Helping mothers overcome feeding challenges through
                        expert clinical support and continuous guidance.

                    </p>



                </div>


            </Col>



        </Row>


    </Container>


</section>

{/*=================================
        NEONATAL FOLLOW UP SERVICES
=================================*/}



<section className="neonatology-followup">


    <Container>


        <Row className="align-items-center g-5">



            <Col lg={5}>


                <div className="neonatology-followup-card">


                    <div className="neonatology-followup-icon">

                        <i className="bi bi-person-check-fill"></i>

                    </div>



                    <h3>

                        Complete Development Monitoring

                    </h3>



                    <p>

                        Continuous monitoring and specialised follow-up support
                        for newborns and high-risk infants to ensure optimal
                        growth and development.

                    </p>



                    <div className="neonatology-followup-list">


                        <div>

                            <i className="bi bi-check-circle-fill"></i>

                            Development Assessment

                        </div>



                        <div>

                            <i className="bi bi-check-circle-fill"></i>

                            Nutrition Guidance

                        </div>



                        <div>

                            <i className="bi bi-check-circle-fill"></i>

                            Speech & Language Support

                        </div>



                        <div>

                            <i className="bi bi-check-circle-fill"></i>

                            Ophthalmology Follow Up

                        </div>



                    </div>


                </div>


            </Col>







            <Col lg={7}>


                <div className="neonatology-followup-content">


                    <span className="neonatology-section-tag">

                        Neonatal Follow Up Services

                    </span>




                    <h2>

                        Ensuring Healthy Growth Beyond NICU Care

                    </h2>




                    <p>

                        Our hospital provides unparalleled neonatal follow-up
                        services ensuring that every newborn and high-risk infant
                        receives continuous monitoring until one year of age,
                        after which care transitions to the Paediatrics Department.

                    </p>




                    <p>

                        High-risk preterm and term infants discharged from the
                        Neonatal Intensive Care Unit receive comprehensive
                        neurodevelopmental follow-up until six years of age,
                        covering development, nutrition, speech and language,
                        and ophthalmology assessments.

                    </p>




                    <p>

                        For high-risk infants, our team also provides telephonic
                        support to address concerns and provide effective
                        solutions whenever required.

                    </p>



                </div>


            </Col>



        </Row>


    </Container>


</section>







/*=================================
        COMMUNITY OUTREACH SERVICES
=================================*/



<section className="neonatology-community">


    <Container>



        <Row className="justify-content-center">


            <Col lg={8}>


                <div className="neonatology-section-heading">


                    <span>

                        Community Outreach Services

                    </span>



                    <h2>

                        Extending Neonatal Care Beyond Hospital Walls

                    </h2>



                    <p>

                        Our dedicated doctors and nurses actively participate in
                        community healthcare initiatives to improve newborn and
                        child health awareness across the region.

                    </p>


                </div>


            </Col>


        </Row>





        <Row className="g-4 justify-content-center">



            <Col lg={4} md={6}>


                <div className="neonatology-community-card">


                    <div className="neonatology-community-icon">


                        <i className="bi bi-house-heart-fill"></i>


                    </div>




                    <h4>

                        Door-To-Door Vaccination

                    </h4>




                    <p>

                        Supporting community vaccination programmes to ensure
                        timely preventive healthcare for children.

                    </p>



                </div>


            </Col>






            <Col lg={4} md={6}>


                <div className="neonatology-community-card">


                    <div className="neonatology-community-icon">


                        <i className="bi bi-clipboard2-pulse-fill"></i>


                    </div>




                    <h4>

                        Medical Camps

                    </h4>




                    <p>

                        Conducting medical camps and awareness programmes for
                        better healthcare accessibility.

                    </p>



                </div>


            </Col>






            <Col lg={4} md={6}>


                <div className="neonatology-community-card">


                    <div className="neonatology-community-icon">


                        <i className="bi bi-people-fill"></i>


                    </div>




                    <h4>

                        Community Support

                    </h4>




                    <p>

                        Delivering quality healthcare support and guidance to
                        families throughout Palakkad.

                    </p>



                </div>


            </Col>



        </Row>


    </Container>


</section>

{/*=================================
        NEONATOLOGY HIGHLIGHTS
=================================*/}


<section className="neonatology-highlights">


    <Container>


        <Row className="justify-content-center">


            <Col lg={8}>


                <div className="neonatology-section-heading">


                    <span>

                        Highlights

                    </span>



                    <h2>

                        Advanced Neonatal Care Facilities

                    </h2>



                    <p>

                        Our Neonatal Unit provides comprehensive facilities,
                        advanced equipment and specialised care for newborns.

                    </p>


                </div>


            </Col>


        </Row>





        <Row className="g-4">



            <Col lg={4} md={6}>


                <div className="neonatology-highlight-card">

                    <i className="bi bi-hospital-fill"></i>

                    <span>

                        24×7 NICU with neonatologist & well equipped tertiary level referral unit

                    </span>

                </div>


            </Col>





            <Col lg={4} md={6}>


                <div className="neonatology-highlight-card">

                    <i className="bi bi-shield-check"></i>

                    <span>

                        Premature and low birth weight baby care

                    </span>

                </div>


            </Col>





            <Col lg={4} md={6}>


                <div className="neonatology-highlight-card">

                    <i className="bi bi-lightbulb-fill"></i>

                    <span>

                        Photo therapy & Exchange transfusion

                    </span>

                </div>


            </Col>





            <Col lg={4} md={6}>


                <div className="neonatology-highlight-card">

                    <i className="bi bi-heart-pulse-fill"></i>

                    <span>

                        CPAP / HFNC / Mechanical Ventilation

                    </span>

                </div>


            </Col>





            <Col lg={4} md={6}>


                <div className="neonatology-highlight-card">

                    <i className="bi bi-person-lines-fill"></i>

                    <span>

                        Parents Counseling

                    </span>

                </div>


            </Col>





            <Col lg={4} md={6}>


                <div className="neonatology-highlight-card">

                    <i className="bi bi-activity"></i>

                    <span>

                        Neonatal screening echocardiography & Neurosonogram

                    </span>

                </div>


            </Col>



        </Row>


    </Container>


</section>







/*=================================
        OUR SPECIALIST
=================================*/



<section className="neonatology-specialist">


    <Container>



        <Row className="justify-content-center">


            <Col lg={8}>


                <div className="neonatology-section-heading">


                    <span>

                        Our Specialist

                    </span>



                    <h2>

                        Our Neonatology Specialist

                    </h2>


                </div>


            </Col>


        </Row>





        <Row className="justify-content-center">


            <Col lg={5}>


                <div className="neonatology-doctor-card">


                    <div className="neonatology-doctor-image">


                        <img

                            src={neonatology1}

                            alt="Dr. Vidhya Shankari"

                            className="img-fluid"

                        />


                        <span>

                            Neonatology Specialist

                        </span>


                    </div>





                    <div className="neonatology-doctor-content">


                        <h3>

                            DR. Vidhya Shankari

                        </h3>


                        <p>

                            Neonatology Specialist providing advanced care
                            and support for newborns and high-risk infants.

                        </p>



                        <button className="neonatology-primary-btn">


                            <i className="bi bi-calendar-check me-2"></i>


                            Book Appointment


                        </button>


                    </div>


                </div>


            </Col>


        </Row>


    </Container>


</section>

{/*=================================
        NEONATOLOGY CTA SECTION
=================================*/}


<section className="neonatology-cta">


    <Container>


        <Row className="align-items-center">



            <Col lg={7}>


                <div className="neonatology-cta-content">


                    <span className="neonatology-section-tag">

                        We're Here For Your Baby

                    </span>




                    <h2>

                        Providing Advanced Care For Every Newborn

                    </h2>




                    <p>

                        Our Neonatology team provides specialised newborn care,
                        advanced NICU facilities and continuous support for
                        premature and high-risk babies with compassion and
                        expertise.

                    </p>




                    <div className="neonatology-cta-buttons">



                        <button className="neonatology-primary-btn">


                            <i className="bi bi-calendar-check me-2"></i>


                            Book Appointment


                        </button>





                        <button className="neonatology-outline-btn">


                            <i className="bi bi-telephone me-2"></i>


                            +91 12345 67890


                        </button>



                    </div>



                </div>


            </Col>







            <Col lg={5}>


                <div className="neonatology-cta-box">


                    <div className="neonatology-cta-icon">


                        <i className="bi bi-heart-pulse-fill"></i>


                    </div>




                    <h3>

                        24×7 Neonatal Emergency Support

                    </h3>




                    <p>

                        Our neonatal care team is available round the clock
                        to provide immediate medical support and specialised
                        critical care whenever required.

                    </p>





                    <div className="neonatology-cta-list">



                        <div>

                            <i className="bi bi-check-circle-fill"></i>

                            Advanced NICU Facilities

                        </div>




                        <div>

                            <i className="bi bi-check-circle-fill"></i>

                            Experienced Neonatal Team

                        </div>




                        <div>

                            <i className="bi bi-check-circle-fill"></i>

                            Comprehensive Newborn Care

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

export default Neonatology
