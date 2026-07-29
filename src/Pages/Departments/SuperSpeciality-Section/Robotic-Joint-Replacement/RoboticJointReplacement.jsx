import React from 'react'
import './RoboticJoint.css'
import robotic1 from "../../../../assets/Images/robohand/robotic1.avif";
import robotic2 from "../../../../assets/Images/robohand/robotic2.avif";
import robotic3 from "../../../../assets/Images/robohand/robotic3.avif";
import doctor from "../../../../assets/Images/robohand/generaldoc1.webp";

import {
    Container,
    Row,
    Col,
    Breadcrumb
} from "react-bootstrap";


const RoboticJointReplacement = () => {
    return (
        <>
            {/*=================================
                ROBOTIC JOINT HERO
            =================================*/}


            <section
                className="robotic-joint-hero"
                style={{
                    backgroundImage: `url(${robotic1})`
                }}
            >


                <div className="robotic-joint-overlay"></div>



                <Container>


                    <Row className="justify-content-center">


                        <Col lg={10}>


                            <div className="robotic-joint-hero-content">


                                <Breadcrumb className="robotic-joint-breadcrumb">


                                    <Breadcrumb.Item href="/">

                                        Home

                                    </Breadcrumb.Item>


                                    <Breadcrumb.Item href="/departments">

                                        Departments

                                    </Breadcrumb.Item>


                                    <Breadcrumb.Item active>

                                        Robotic Joint Replacement

                                    </Breadcrumb.Item>


                                </Breadcrumb>




                                <span className="robotic-joint-badge">

                                    Robotic Joint Replacement

                                </span>





                                <h1>

                                    Advanced Robotic Joint Replacement For Better Mobility & Faster Recovery

                                </h1>





                                {/* <p>

                                    Experience precision-driven robotic orthopaedic care
                                    with advanced technology, minimally invasive procedures
                                    and personalized treatment plans designed to restore
                                    movement and improve quality of life.

                                </p> */}



                            </div>


                        </Col>


                    </Row>


                </Container>


            </section>






            {/*=================================
                QUICK INFORMATION CARDS
            =================================*/}



            <section className="robotic-joint-quick-info">


                <Container>


                    <Row className="g-4">





                        <Col lg={3} md={6}>


                            <div className="robotic-joint-info-card">


                                <div className="robotic-joint-info-icon">

                                    <i className="bi bi-cpu-fill"></i>

                                </div>



                                <h3>

                                    Robotic

                                </h3>



                                <p>

                                    Precision Assisted Surgery

                                </p>


                            </div>


                        </Col>






                        <Col lg={3} md={6}>


                            <div className="robotic-joint-info-card">


                                <div className="robotic-joint-info-icon">

                                    <i className="bi bi-person-check-fill"></i>

                                </div>



                                <h3>

                                    Expert

                                </h3>



                                <p>

                                    Orthopaedic Specialists

                                </p>


                            </div>


                        </Col>






                        <Col lg={3} md={6}>


                            <div className="robotic-joint-info-card">


                                <div className="robotic-joint-info-icon">

                                    <i className="bi bi-bandaid-fill"></i>

                                </div>



                                <h3>

                                    Advanced

                                </h3>



                                <p>

                                    Joint Preservation Care

                                </p>


                            </div>


                        </Col>






                        <Col lg={3} md={6}>


                            <div className="robotic-joint-info-card">


                                <div className="robotic-joint-info-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>



                                <h3>

                                    Complete

                                </h3>



                                <p>

                                    Rehabilitation Support

                                </p>


                            </div>


                        </Col>




                    </Row>


                </Container>


            </section>






            {/*=================================
                ABOUT SECTION
            =================================*/}



            <section className="robotic-joint-about">


                <Container>



                    <Row className="align-items-center">





                        <Col lg={6}>


                            <div className="robotic-joint-about-image">


                                <img

                                    src={robotic2}

                                    alt="Robotic Joint Replacement"

                                    className="img-fluid"

                                />


                            </div>


                        </Col>







                        <Col lg={6}>


                            <div className="robotic-joint-about-content">


                                <span className="robotic-joint-section-tag">

                                    About Department

                                </span>




                                <h2>

                                    Advanced Solutions For Early Osteoarthritis

                                </h2>





                                <p>

                                    PKDAS Hospital provides advanced and minimally
                                    invasive treatment options for early osteoarthritis,
                                    focusing on preserving joint health, reducing pain
                                    and improving mobility without immediate joint
                                    replacement surgery.

                                </p>





                                <p>

                                    Our orthopaedic team combines modern technology,
                                    robotic-assisted procedures and personalized
                                    rehabilitation programs to help patients achieve
                                    better movement and long-term joint wellness.

                                </p>





                                <div className="robotic-joint-highlights">





                                    <div className="robotic-joint-highlight-item">


                                        <i className="bi bi-check-circle-fill"></i>


                                        <span>

                                            Robotic Joint Replacement

                                        </span>


                                    </div>





                                    <div className="robotic-joint-highlight-item">


                                        <i className="bi bi-check-circle-fill"></i>


                                        <span>

                                            Joint Preservation Programs

                                        </span>


                                    </div>





                                    <div className="robotic-joint-highlight-item">


                                        <i className="bi bi-check-circle-fill"></i>


                                        <span>

                                            Minimally Invasive Procedures

                                        </span>


                                    </div>





                                    <div className="robotic-joint-highlight-item">


                                        <i className="bi bi-check-circle-fill"></i>


                                        <span>

                                            Advanced Rehabilitation Support

                                        </span>


                                    </div>





                                    <div className="robotic-joint-highlight-item">


                                        <i className="bi bi-check-circle-fill"></i>


                                        <span>

                                            Sports Injury Management

                                        </span>


                                    </div>





                                    <div className="robotic-joint-highlight-item">


                                        <i className="bi bi-check-circle-fill"></i>


                                        <span>

                                            Complex Orthopaedic Care

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


            <section className="robotic-joint-features">


                <Container>



                    <Row className="justify-content-center">


                        <Col lg={8}>


                            <div className="robotic-joint-section-heading">


                                <span>

                                    Why Choose Us

                                </span>




                                <h2>

                                    Advanced Robotic Orthopaedic Care With Precision & Compassion

                                </h2>




                                <p>

                                    PKDAS Hospital combines advanced robotic technology,
                                    experienced orthopaedic specialists and personalized
                                    treatment approaches to provide comprehensive joint
                                    care solutions.

                                </p>



                            </div>


                        </Col>


                    </Row>







                    <Row className="g-4 mt-2">





                        <Col lg={4} md={6}>


                            <div className="robotic-joint-feature-card">


                                <div className="robotic-joint-feature-icon">


                                    <i className="bi bi-cpu-fill"></i>


                                </div>




                                <h4>

                                    Advanced Robotic Orthopaedic Care

                                </h4>




                                <p>

                                    Robotic-assisted technology enables accurate
                                    surgical planning, precise implant positioning
                                    and improved surgical outcomes.

                                </p>



                            </div>


                        </Col>







                        <Col lg={4} md={6}>


                            <div className="robotic-joint-feature-card">


                                <div className="robotic-joint-feature-icon">


                                    <i className="bi bi-person-heart"></i>


                                </div>




                                <h4>

                                    Experienced Orthopaedic Team

                                </h4>




                                <p>

                                    Our specialists provide expert diagnosis,
                                    personalized treatment plans and advanced
                                    joint replacement solutions.

                                </p>



                            </div>


                        </Col>







                        <Col lg={4} md={6}>


                            <div className="robotic-joint-feature-card">


                                <div className="robotic-joint-feature-icon">


                                    <i className="bi bi-shield-check"></i>


                                </div>




                                <h4>

                                    Complete Joint Care

                                </h4>




                                <p>

                                    From early osteoarthritis management to complex
                                    replacement procedures, we provide complete
                                    orthopaedic care.

                                </p>



                            </div>


                        </Col>




                    </Row>



                </Container>


            </section>

            <section className="robotic-joint-advantages">



                <Container>




                    <Row className="align-items-center g-5">






                        <Col lg={5}>


                            <div className="robotic-joint-advantages-image">


                                <img

                                    src={robotic3}

                                    alt="Robotic Orthopaedic Surgery"

                                    className="img-fluid"

                                />


                            </div>


                        </Col>








                        <Col lg={7}>


                            <div className="robotic-joint-advantages-content">





                                <span className="robotic-joint-section-tag">

                                    Our Expertise

                                </span>





                                <h2>

                                    Comprehensive Orthopaedic Solutions For Every Joint Need

                                </h2>





                                <p>

                                    Our orthopaedic department offers advanced robotic
                                    joint replacement, arthroscopy, trauma care and
                                    personalized treatment options designed around
                                    each patient's condition and recovery goals.

                                </p>





                                <Row className="g-3 mt-3">





                                    <Col md={6}>


                                        <div className="robotic-joint-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Robotic Joint Replacement

                                            </span>


                                        </div>


                                    </Col>







                                    <Col md={6}>


                                        <div className="robotic-joint-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Primary Hip Replacement

                                            </span>


                                        </div>


                                    </Col>







                                    <Col md={6}>


                                        <div className="robotic-joint-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Complex & Revision Hip Replacement

                                            </span>


                                        </div>


                                    </Col>







                                    <Col md={6}>


                                        <div className="robotic-joint-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Primary Knee Replacement

                                            </span>


                                        </div>


                                    </Col>







                                    <Col md={6}>


                                        <div className="robotic-joint-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Revision Knee Replacement

                                            </span>


                                        </div>


                                    </Col>







                                    <Col md={6}>


                                        <div className="robotic-joint-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Sports Injury & Arthroscopy

                                            </span>


                                        </div>


                                    </Col>







                                    <Col md={6}>


                                        <div className="robotic-joint-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Shoulder Arthroscopy

                                            </span>


                                        </div>


                                    </Col>







                                    <Col md={6}>


                                        <div className="robotic-joint-advantage-card">


                                            <i className="bi bi-check-circle-fill"></i>


                                            <span>

                                                Complex Trauma Care

                                            </span>


                                        </div>


                                    </Col>





                                </Row>



                            </div>



                        </Col>




                    </Row>



                </Container>



            </section>












            <section className="robotic-joint-services">



                <Container>





                    <Row className="justify-content-center">



                        <Col lg={8}>


                            <div className="robotic-joint-section-heading">


                                <span>

                                    Joint Preservation

                                </span>




                                <h2>

                                    Advanced Solutions For Early Osteoarthritis

                                </h2>




                                <p>

                                    Modern minimally invasive procedures designed to
                                    reduce pain, preserve natural joint function and
                                    delay the need for joint replacement surgery.

                                </p>



                            </div>


                        </Col>


                    </Row>







                    <Row className="g-4">





                        <Col lg={4} md={6}>


                            <div className="robotic-joint-service-card">


                                <div className="robotic-joint-service-icon">


                                    <i className="bi bi-bandaid-fill"></i>


                                </div>




                                <h4>

                                    Nerve Root Block & Pain Management

                                </h4>




                                <p>

                                    Minimally invasive pain management procedures
                                    designed to reduce discomfort and improve mobility.

                                </p>



                            </div>


                        </Col>







                        <Col lg={4} md={6}>


                            <div className="robotic-joint-service-card">


                                <div className="robotic-joint-service-icon">


                                    <i className="bi bi-diagram-3-fill"></i>


                                </div>




                                <h4>

                                    High Tibial Osteotomy (HTO)

                                </h4>




                                <p>

                                    A corrective procedure that realigns the knee
                                    joint to reduce stress and slow osteoarthritis
                                    progression.

                                </p>



                            </div>


                        </Col>







                        <Col lg={4} md={6}>


                            <div className="robotic-joint-service-card">


                                <div className="robotic-joint-service-icon">


                                    <i className="bi bi-droplet-half"></i>


                                </div>




                                <h4>

                                    Bone Marrow Aspirate Stem Cell Therapy

                                </h4>




                                <p>

                                    Uses the patient's own stem cells to support
                                    healing and regeneration of damaged tissues.

                                </p>



                            </div>


                        </Col>







                        <Col lg={4} md={6}>


                            <div className="robotic-joint-service-card">


                                <div className="robotic-joint-service-icon">


                                    <i className="bi bi-heart-pulse-fill"></i>


                                </div>




                                <h4>

                                    Platelet Rich Plasma Therapy

                                </h4>




                                <p>

                                    Supports tissue healing, reduces inflammation
                                    and improves joint function.

                                </p>



                            </div>


                        </Col>




                    </Row>



                </Container>



            </section>

            {/*=================================
                ROBOTIC SURGERY SPECIALIST
            =================================*/}


            <section className="robotic-joint-specialists">


                <Container>




                    <Row className="justify-content-center">


                        <Col lg={8}>


                            <div className="robotic-joint-section-heading">


                                <span>

                                    Meet Our Expert

                                </span>




                                <h2>

                                    Our Robotic Surgery Specialist

                                </h2>




                                <p>

                                    Our experienced orthopaedic specialist provides
                                    advanced robotic joint replacement and comprehensive
                                    joint care with precision-focused treatment.

                                </p>



                            </div>


                        </Col>


                    </Row>







                    <Row className="justify-content-center mt-3">





                        <Col lg={5} md={7}>



                            <div className="robotic-joint-doctor-card">





                                <div className="robotic-joint-doctor-image">



                                    <img

                                        src={doctor}

                                        alt="Dr. Amel V Nair"

                                        className="img-fluid"

                                    />




                                    <span className="robotic-joint-experience">

                                        Orthopaedic Specialist

                                    </span>



                                </div>








                                <div className="robotic-joint-doctor-content">





                                    <span className="robotic-joint-doctor-designation">

                                        MBBS, MS

                                    </span>





                                    <h3>

                                        Dr. Amel V Nair

                                    </h3>





                                    <p>

                                        Assistant Professor – Department of Orthopaedics.
                                        Specializing in robotic joint replacement,
                                        complex orthopaedic procedures and advanced
                                        joint preservation techniques.

                                    </p>





                                    <div className="robotic-joint-doctor-buttons">





                                        <button className="robotic-joint-primary-btn">


                                            <i className="bi bi-calendar-check me-2"></i>


                                            Book Appointment


                                        </button>





                                        <button className="robotic-joint-outline-btn">


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



            <section className="robotic-joint-cta">



                <Container>





                    <Row className="align-items-center">






                        <Col lg={7}>



                            <div className="robotic-joint-cta-content">





                                <span className="robotic-joint-section-tag">

                                    We're Here For You

                                </span>





                                <h2>

                                    Need Advanced Joint Care Consultation?

                                </h2>





                                <p>

                                    Our orthopaedic specialists provide expert
                                    consultation, robotic surgery evaluation,
                                    joint preservation programs and personalized
                                    treatment plans for better mobility and quality
                                    of life.

                                </p>





                                <div className="robotic-joint-cta-buttons">





                                    <button className="robotic-joint-primary-btn">


                                        <i className="bi bi-calendar-check me-2"></i>


                                        Book Appointment


                                    </button>






                                    <button className="robotic-joint-outline-btn">


                                        <i className="bi bi-telephone me-2"></i>


                                        +91 12345 67890


                                    </button>





                                </div>





                            </div>



                        </Col>









                        <Col lg={5}>




                            <div className="robotic-joint-cta-box">






                                <div className="robotic-joint-cta-icon">



                                    <i className="bi bi-robot"></i>



                                </div>







                                <h3>

                                    Robotic Joint Replacement Excellence

                                </h3>







                                <p>

                                    Advanced robotic-assisted technology combined
                                    with expert surgical care to deliver precision,
                                    faster recovery and improved outcomes.

                                </p>







                                <div className="robotic-joint-cta-features">





                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Robotic Assisted Surgery

                                    </div>





                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Personalized Treatment Planning

                                    </div>





                                    <div>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Advanced Rehabilitation Support

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

export default RoboticJointReplacement
