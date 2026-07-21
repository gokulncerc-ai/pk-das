import React from "react";
import "./AwardsRecognition.css";

import { Container, Row, Col } from "react-bootstrap";

import Certificate from "../../assets/Images/Certificate.webp";
import Nabrcert from "../../assets/Images/Nabrcert.webp";
import Nabl from "../../assets/Images/Nabl.webp";
import nabh from "../../assets/Images/nabh.webp";


const AwardsRecognition = () => {


    const awards = [

        {
            id: 1,
            image: Certificate,
            title: "NABH Certificate 2025-2027",
            category: "Hospital Accreditation",
            icon: "bi-award-fill",
        },

        {
            id: 2,
            image: Nabrcert,
            title: "NABL Accredited 2025-2029",
            category: "Laboratory Accreditation",
            icon: "bi-patch-check-fill",
        },

        {
            id: 3,
            image: Nabl,
            title: "NABH Certificate 2023-2025",
            category: "Hospital Accreditation",
            icon: "bi-award-fill",
        },

        {
            id: 4,
            image: nabh,
            title: "NABL Accredited 2020-2022",
            category: "Laboratory Accreditation",
            icon: "bi-patch-check-fill",
        },

    ];



    return (

        <>


            {/*=========================================
                Awards Hero Section
            =========================================*/}


            <section className="awards-hero">


                <Container>


                    <Row className="align-items-center g-5">


                        {/* Left Content */}


                        <Col lg={6}>


                            <div className="awards-hero-content">


                                <span className="awards-badge">

                                    <i className="bi bi-patch-check-fill"></i>

                                    Excellence in Healthcare

                                </span>



                                <h1>

                                    Awards & <span>Recognition</span>

                                </h1>



                                <p>

                                    Our nationally recognized accreditations
                                    reflect our commitment towards patient safety,
                                    clinical excellence and delivering world-class
                                    healthcare standards.

                                </p>



                                {/* <div className="hero-buttons">


                                    <button className="primary-btn">

                                        Explore Awards

                                    </button>



                                    <button className="secondary-btn">

                                        View Certificates

                                    </button>


                                </div> */}



                            </div>


                        </Col>





                        {/* Right Certificate Image */}



                        <Col lg={6}>


                            <div className="hero-image-wrapper">


                                <div className="hero-image-card">


                                    <img

                                        src={Certificate}

                                        alt="NABH Certificate"
                                        loading="lazy"

                                    />


                                </div>


                            </div>


                        </Col>



                    </Row>


                </Container>


            </section>





            {/*=========================================
                Awards Cards Section
            =========================================*/}



            <section className="awards-section">


                <Container>


                    <Row className="g-4">


                        {awards.map((item) => (


                            <Col lg={3} md={6} key={item.id}>


                                <div className="award-card">



                                    <div className="award-image-wrapper">


                                        <img

                                            src={item.image}

                                            alt={item.title}

                                        />



                                        <div className="award-icon">


                                            <i className={`bi ${item.icon}`}></i>


                                        </div>


                                    </div>





                                    <div className="award-content">



                                        <span className="award-category">

                                            {item.category}

                                        </span>




                                        <h3>

                                            {item.title}

                                        </h3>



                                        <button className="view-certificate-btn">

                                            View Certificate

                                            <i className="bi bi-arrow-right"></i>


                                        </button>


                                    </div>



                                </div>



                            </Col>


                        ))}



                    </Row>


                </Container>


            </section>

            {/*=========================================
    Quality Excellence Statistics
=========================================*/}


            <section className="quality-stats-section">


                <Container>


                    <Row className="justify-content-center mb-5">


                        <Col lg={8}>


                            <div className="stats-heading text-center">


                                <span className="stats-badge">

                                    <i className="bi bi-shield-check"></i>

                                    Quality Commitment

                                </span>



                                <h2>

                                    Excellence Built on
                                    <span> Trust & Quality</span>

                                </h2>



                                <p>

                                    Our accreditations represent our continuous dedication
                                    towards patient safety, advanced healthcare standards
                                    and exceptional clinical outcomes.

                                </p>


                            </div>


                        </Col>


                    </Row>





                    <Row className="g-4">



                        <Col lg={3} md={6}>


                            <div className="stat-card">


                                <div className="stat-icon">

                                    <i className="bi bi-award-fill"></i>

                                </div>



                                <h3>

                                    NABH

                                </h3>



                                <p>

                                    Accredited Hospital

                                </p>


                            </div>


                        </Col>





                        <Col lg={3} md={6}>


                            <div className="stat-card">


                                <div className="stat-icon">

                                    <i className="bi bi-patch-check-fill"></i>

                                </div>



                                <h3>

                                    NABL

                                </h3>



                                <p>

                                    Certified Laboratory

                                </p>


                            </div>


                        </Col>





                        <Col lg={3} md={6}>


                            <div className="stat-card">


                                <div className="stat-icon">

                                    <i className="bi bi-calendar2-check-fill"></i>

                                </div>



                                <h3>

                                    25+

                                </h3>



                                <p>

                                    Years of Excellence

                                </p>


                            </div>


                        </Col>





                        <Col lg={3} md={6}>


                            <div className="stat-card">


                                <div className="stat-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>



                                <h3>

                                    24×7

                                </h3>



                                <p>

                                    Quality Healthcare

                                </p>


                            </div>


                        </Col>



                    </Row>



                </Container>


            </section>



        </>

    );

};


export default AwardsRecognition;