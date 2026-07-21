import React from 'react'
import "./Infrastructure.css"
import infra1 from "../../assets/Images/infra1.webp"
import infra2 from "../../assets/Images/infra2.webp"
import infra3 from "../../assets/Images/infra3.webp"
import infra4 from "../../assets/Images/infra4.webp"
import infra5 from "../../assets/Images/infra5.webp"
import infra6 from "../../assets/Images/infra6.webp"
import infra7 from "../../assets/Images/infra7.webp"
import infra8 from "../../assets/Images/infra8.webp"
import infra9 from "../../assets/Images/infra9.webp"
import infra10 from "../../assets/Images/infra10.webp"
import infra11 from "../../assets/Images/infra11.webp"
import infra12 from "../../assets/Images/infra12.webp"
import infra13 from "../../assets/Images/infra13.webp"
import infra14 from "../../assets/Images/infra14.webp"
import infra15 from "../../assets/Images/infra15.webp"
import infra16 from "../../assets/Images/infra16.webp"
import infra17 from "../../assets/Images/infra17.webp"
import infra18 from "../../assets/Images/infra18.webp"
import infra19 from "../../assets/Images/infra19.webp"
import infra20 from "../../assets/Images/infra20.webp"
import infra21 from "../../assets/Images/infra21.webp"
import infra22 from "../../assets/Images/infra22.webp"
import infra23 from "../../assets/Images/infra23.webp"
import infra24 from "../../assets/Images/infra24.webp"
import { Container, Row, Col } from "react-bootstrap";


const Infrastructure = () => {

    const featuredFacilities = [

        {
            image: infra1,
            icon: "bi-heart-pulse-fill",
            title: "Critical Care Units",
            count: "7 ICU Units",
            description:
                "MICU, SICU, NSICU, CCU, GICU, PICU, NICU, Isolation ICU and Snake Bite Clinic."
        },


        {
            image: infra2,
            icon: "bi-building-fill-gear",
            title: "Modular Operation Theatres",
            count: "9 Operation Theatres",
            description:
                "Advanced modular operation theatres designed with modern surgical technology."
        },


        {
            image: infra3,
            icon: "bi-hospital-fill",
            title: "Hybrid Operation Theatres",
            count: "4 Operation Theatres",
            description:
                "Integrated surgical environments combining advanced imaging and operating technology."
        },


        {
            image: infra4,
            icon: "bi-activity",
            title: "Cath Lab",
            count: "Cardiology Diagnostics",
            description:
                "Advanced cardiac diagnostics and intervention facilities."
        }

    ];

    const medicalServices = [

        {
            image: infra5,
            icon: "bi-flask",
            title: "Automated Labs",
            text: "Advanced laboratory medicine and molecular diagnostics."
        },


        {
            image: infra6,
            icon: "bi-bandaid-fill",
            title: "Trauma Care Units",
            text: "24 hour emergency trauma and critical care support."
        },


        {
            image: infra7,
            icon: "bi-droplet-half",
            title: "Dialysis Unit",
            text: "Specialized nephrology care with advanced dialysis facilities."
        },


        {
            image: infra8,
            icon: "bi-x-ray",
            title: "Radiology 24/7",
            text: "Advanced imaging and diagnostic services available round the clock."
        },


        {
            image: infra9,
            icon: "bi-truck",
            title: "Ambulance Services",
            text: "24/7 emergency ambulance support."
        },


        {
            image: infra10,
            icon: "bi-capsule",
            title: "Pharmacy 24/7",
            text: "Complete medication support available anytime."
        }

    ];


    return (
        <>


            {/*=========================================
            Facilities Hero Section
        =========================================*/}


            <section className="facilities-section">


                <Container>


                    <Row className="justify-content-center">


                        <Col lg={8}>


                            <div className="facilities-heading text-center">


                                <span className="facilities-badge">

                                    <i className="bi bi-hospital"></i>

                                    Advanced Healthcare Infrastructure

                                </span>



                                <h2>

                                    World-Class Facilities For
                                    <span> Exceptional Care</span>

                                </h2>



                                <p>

                                    Equipped with advanced medical technology,
                                    specialized departments and modern infrastructure
                                    to provide comprehensive healthcare under one roof.

                                </p>


                            </div>


                        </Col>


                    </Row>





                    {/*=========================================
                    Featured Facilities
                =========================================*/}


                    <Row className="g-4 mt-4">


                        {
                            featuredFacilities.map((item, index) => (


                                <Col lg={3} md={6} key={index}>


                                    <div className="facility-card">


                                        <div className="facility-image">

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                            />

                                        </div>



                                        <div className="facility-body">


                                            <div className="facility-icon">

                                                <i className={`bi ${item.icon}`}></i>

                                            </div>


                                            <h3>
                                                {item.title}
                                            </h3>


                                            <h5>
                                                {item.count}
                                            </h5>


                                            <p>
                                                {item.description}
                                            </p>


                                        </div>


                                    </div>


                                </Col>


                            ))
                        }



                    </Row>





                    {/*=========================================
                    Medical Services
                =========================================*/}



                    <Row className="justify-content-center mt-5">


                        <Col lg={8}>


                            <div className="service-heading text-center">


                                <h2>
                                    Comprehensive Medical Service

                                </h2>


                            </div>


                        </Col>


                    </Row>





                    <Row className="g-4 mt-2">


                        {
                            medicalServices.map((service, index) => (


                                <Col lg={4} md={6} key={index}>


                                    <div className="service-card">


                                        {/* Service Image */}

                                        <div className="service-image">

                                            <img

                                                src={service.image}

                                                alt={service.title}

                                            />

                                        </div>



                                        {/* Service Content */}

                                        <div className="service-content">


                                            <div className="service-icon">

                                                <i className={`bi ${service.icon}`}></i>

                                            </div>



                                            <h4>

                                                {service.title}

                                            </h4>



                                            <p>

                                                {service.text}

                                            </p>


                                        </div>


                                    </div>

                                </Col>


                            ))
                        }


                    </Row>



                </Container>


            </section>





        </>
    )
}

export default Infrastructure
