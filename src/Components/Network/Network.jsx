import React from 'react'
import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Network.css"
import cardiology from "../../assets/Images/cardiology.webp"
import gasteronology from "../../assets/Images/gasteronology.webp"
import nephrology from "../../assets/Images/nephrology.webp"
import neurology from "../../assets/Images/neurology.webp"
import neurosurgery from "../../assets/Images/neurosurgery.webp"
// --------another section for the image starts---------------
import generalmedicine from "../../assets/Images/generalmedicine.webp"
import generalsurgery from "../../assets/Images/generalsurgery.webp"
import ophthalmology from "../../assets/Images/ophthalmology.webp"
import orthopedics from "../../assets/Images/orthopedics.webp"
import pediatrics from "../../assets/Images/pediatrics.webp"
import ent from "../../assets/Images/ent.webp"
import psychiatry from "../../assets/Images/psychiatry.webp"
import obg from "../../assets/Images/obg.webp"
import doctorteam from "../../assets/Images/doctorteam.png"
// -------insurance Section---------
import a from "../../assets/Images/a.jpg"
import b from "../../assets/Images/b.jpg"
import c from "../../assets/Images/c.jpg"
import d from "../../assets/Images/d.jpg"
import e from "../../assets/Images/e.jpg"
import f from "../../assets/Images/f.jpg"
import g from "../../assets/Images/g.jpg"
import h from "../../assets/Images/h.jpg"
import i from "../../assets/Images/i.jpg"
import j from "../../assets/Images/j.jpg"
import k from "../../assets/Images/k.jpg"
import l from "../../assets/Images/l.jpg"
import m from "../../assets/Images/m.jpg"
import n from "../../assets/Images/n.jpg"
import o from "../../assets/Images/o.jpg"
import p from "../../assets/Images/p.jpg"
import q from "../../assets/Images/q.jpg"
import r from "../../assets/Images/r.jpg"
import s from "../../assets/Images/s.jpg"
import t from "../../assets/Images/t.jpg"
import u from "../../assets/Images/u.jpg"
import v from "../../assets/Images/v.jpg"
// About Section
import wideangle from "../../assets/Images/wideangle.jpeg"







const Network = () => {

    const departments = [
        {
            id: 1,
            title: "Cardiology",
            image: cardiology,
            description:
                "Passionate and fully committed, we pride ourselves in the quality service rendered. We believe that a healthy heart results from the successful partnership of patients, family and the doctor. Through this partnership, we strive to provide exceptional cardiac care using advanced technology and compassionate treatment.",
            link: "Top Specialities & Procedures",
        },
        {
            id: 2,
            title: "Nephrology",
            image: nephrology,
            description:
                "Our nephrology department provides comprehensive diagnosis and treatment for kidney diseases. We specialize in dialysis, chronic kidney disease management, kidney transplantation support and preventive renal care.",
            link: "Top Kidney Care Services",
        },
        {
            id: 3,
            title: "Neurology",
            image: neurology,
            description:
                "Our experienced neurologists diagnose and treat disorders affecting the brain, spinal cord and nervous system using advanced neuroimaging and evidence-based treatment approaches.",
            link: "Top Neuro Services",
        },
        {
            id: 4,
            title: "Gastroenterology",
            image: gasteronology,
            description:
                "Providing complete digestive health services with minimally invasive procedures, advanced endoscopy, liver disease management and personalized patient care.",
            link: "Digestive Care Services",
        },
        {
            id: 5,
            title: "Neuro Surgery",
            image: neurosurgery,
            description:
                "Advanced neurosurgical procedures for brain and spine disorders performed by highly experienced surgeons using state-of-the-art technology for better patient outcomes.",
            link: "Brain & Spine Procedures",
        },
    ];

    // -----------another section starts --------------
    const department = [
        {
            title: "General Medicine",
            icon: "bi-heart-pulse",
            image: generalmedicine,
            description:
                "For normal & complex disease. Subspecialties in sleep medicine, cancer etc.",
        },
        {
            title: "General Surgery",
            icon: "bi-scissors",
            image: generalsurgery,
            description:
                "Surgical specialty that focuses on performing surgical procedures for a medical.",
        },
        {
            title: "Ophthalmology",
            icon: "bi-eye",
            image: ophthalmology,
            description:
                "Deals with the anatomy, physiology and diseases of the eyes and their treatment.",
        },
        {
            title: "Orthopedics",
            icon: "bi-bandaid",
            image: orthopedics,
            description:
                "Treatment, prevention of disorders and injuries related to the musculoskeletal system.",
        },
        {
            title: "Psychiatry",
            icon: "bi-brain",
            image: psychiatry,
            description:
                "Helps for better mental health through compassionate psychiatric care.",
        },
        {
            title: "ENT",
            icon: "bi-ear",
            image: ent,
            description:
                "Treatment of all types of ear, nose and throat conditions.",
        },
        {
            title: "Pediatrics",
            icon: "bi-emoji-smile",
            image: pediatrics,
            description:
                "The best type of child related healthcare with experienced pediatricians.",
        },
        {
            title: "OBG",
            icon: "bi-person-heart",
            image: obg,
            description:
                "Focuses on the care of women during pregnancy, childbirth and beyond.",
        },
    ];


    const [activeIndex, setActiveIndex] = useState(0);

    const previousDepartment = () => {
        setActiveIndex((prev) =>
            prev === 0 ? departments.length - 1 : prev - 1
        );
    };

    const nextDepartment = () => {
        setActiveIndex((prev) =>
            prev === departments.length - 1 ? 0 : prev + 1
        );
    };

    const activeDepartment = departments[activeIndex];

    // ------About Section----------
    const hospitalFeatures = [
        {
            id: 1,
            title: "Trauma Care Units 24/7",
            color: "green",
            icon: "bi-check-lg",
        },
        {
            id: 2,
            title: "Automated Labs",
            color: "green",
            icon: "bi-check-lg",
        },
        {
            id: 3,
            title: "Operations Theatres",
            color: "sky",
            icon: "bi-check-lg",
        },
        {
            id: 4,
            title: "Ambulance Services 24/7",
            color: "sky",
            icon: "bi-check-lg",
        },
        {
            id: 5,
            title: "Cath Lab",
            color: "blue",
            icon: "bi-check-lg",
        },
        {
            id: 6,
            title: "Emergency Care 24/7",
            color: "blue",
            icon: "bi-check-lg",
        },
    ];

    return (
        <>
            <section className="dept-section">
                <Container>

                    {/* Heading */}

                    <Row className="justify-content-center bg-light p-3 rounded-4 shadow-lg">
                        <Col lg={10}>
                            <h2 className="dept-heading text-center">
                                Clinical Excellence at <span className="span-dept-heading">PKDIMS</span>  – Palakkad's Premier
                                <br />
                                <span className="span-dept-heading"> Super-Speciality </span>Healthcare Network
                            </h2>

                            <p className="dept-description">
                                At PK Das Institute of Medical Sciences, we deliver world-class
                                healthcare by combining advanced medical technology with the
                                expertise of highly experienced specialists across our
                                comprehensive super-specialty and clinical disciplines. Nestled on
                                a spacious 30-acre campus in Ottapalam, our 900-bed
                                state-of-the-art teaching hospital is engineered to address the
                                region's diverse healthcare needs, consistently delivering
                                outstanding clinical outcomes and a seamless, compassionate care
                                experience for patients across Kerala.
                            </p>
                        </Col>
                    </Row> <br />

                    {/* Department Buttons */}

                    <Row>
                        <Col>
                            <div className="dept-button-wrapper">

                                {departments.map((department, index) => (
                                    <button
                                        key={department.id}
                                        className={`dept-tab-btn ${activeIndex === index ? "active" : ""
                                            }`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        {department.title}
                                    </button>
                                ))}

                            </div>
                        </Col>
                    </Row>

                    {/* Card */}

                    <Row className="justify-content-center">

                        <Col xl={11}>

                            <div className="dept-card-wrapper">

                                {/* Left Arrow */}

                                {/* <button
                                    className="dept-arrow left-arrow"
                                    onClick={previousDepartment}
                                >
                                    <i className="bi bi-chevron-double-left"></i>
                                </button> */}

                                {/* Card */}

                                <div className="dept-card">

                                    <Row className="align-items-center">

                                        <Col lg={7} md={12}>

                                            <h3 className="dept-card-title">
                                                {activeDepartment.title}
                                            </h3>

                                            <p className="dept-card-text">
                                                {activeDepartment.description}
                                            </p>

                                            <a href="/" className="dept-link">
                                                {activeDepartment.link}
                                            </a>

                                            <hr className="dept-divider" />

                                            <div className="dept-btn-group">

                                                <Button
                                                    variant="outline-success"
                                                    className="dept-find-btn"
                                                >
                                                    Find Doctor
                                                </Button>

                                                <Button
                                                    variant="success"
                                                    className="dept-explore-btn"
                                                >
                                                    Explore More
                                                </Button>

                                            </div>

                                        </Col>

                                        <Col
                                            lg={5}
                                            md={12}
                                            className="text-center mt-4 mt-lg-0"
                                        >

                                            <div className="dept-image-box">

                                                <img
                                                    src={activeDepartment.image}
                                                    alt={activeDepartment.title}
                                                    className="img-fluid dept-image"
                                                />

                                            </div>

                                        </Col>

                                    </Row>

                                </div>

                                {/* Right Arrow */}

                                {/* <button
                                    className="dept-arrow right-arrow"
                                    onClick={nextDepartment}
                                >
                                    <i className="bi bi-chevron-double-right"></i>
                                </button> */}

                            </div>

                        </Col>

                    </Row>

                </Container>
            </section>




            {/* -------------another section starts----------- */}
            <section className="general-department-section">

                <Container>

                    {/* ================= HERO ================= */}

                    <div className="department-hero">

                        <Row className="align-items-center">

                            <Col lg={4}>

                                <div className="department-hero-content">

                                    <h2>
                                        Passion for <span>Caring</span>
                                    </h2>

                                    <div className="hero-line"></div>

                                    <p>
                                        Our team of dedicated healthcare professionals is available
                                        24×7 to address urgent medical needs, provide critical care,
                                        and support patients in times of medical crises.
                                    </p>

                                    <Button className="explore-btn">
                                        Explore More
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Button>

                                </div>

                            </Col>

                            <Col lg={8}>

                                <div className="hero-image-wrapper">

                                    <img
                                        src={doctorteam}
                                        alt="Doctors"
                                        className="img-fluid"
                                    />

                                </div>

                            </Col>

                        </Row>

                    </div>

                    {/* ================= TITLE ================= */}

                    <div className="department-title">

                        <div className="title-line"></div>

                        <h3>

                            General Departments

                            <div className="title-icon">

                                <i className="bi bi-heart-pulse"></i>

                            </div>

                        </h3>

                        <div className="title-line"></div>

                    </div>

                    {/* ================= CARDS ================= */}

                    <Row className="g-4 d-flex justify-content-center">

                        {department.map((item, index) => (

                            <Col
                                lg={5}
                                md={6}
                                key={index}
                            >

                                <Card className="department-card">

                                    <Row className="g-0">

                                        <Col xs={7}>

                                            <Card.Body>

                                                <div className="department-icon">

                                                    <i className={`bi ${item.icon}`}></i>

                                                </div>

                                                <Card.Title>

                                                    {item.title}

                                                </Card.Title>

                                                <Card.Text>

                                                    {item.description}

                                                </Card.Text>

                                                <a href="/">

                                                    View More

                                                    <i className="bi bi-arrow-right ms-2"></i>

                                                </a>

                                            </Card.Body>

                                        </Col>

                                        <Col xs={5}>

                                            <div className="department-image">

                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="img-fluid"
                                                />

                                            </div>

                                        </Col>

                                    </Row>

                                </Card>

                            </Col>

                        ))}

                    </Row>

                </Container>

            </section>

            {/* ------------insurance section--------------- */}
            <section className="insurance-section p-4">

                <Container>

                    <div className="insurance-header">

                        <span className="insurance-company-span">Insurance Companies</span>

                        <h2 className='insurance-h2-heading'>Insurance</h2>

                        <p className='text-light'>
                            Secure your peace of mind with our comprehensive
                            hospital insurance – your health, our priority.
                        </p>

                    </div>

                    {/* First Marquee */}

                    <div className="marquee">

                        <div className="marquee-track">

                            <img src={a} alt="Insurance Company" />
                            <img src={b} alt="Insurance Company" />
                            <img src={c} alt="Insurance Company" />
                            <img src={d} alt="Insurance Company" />
                            <img src={e} alt="Insurance Company" />
                            <img src={f} alt="Insurance Company" />
                            <img src={g} alt="Insurance Company" />
                            <img src={h} alt="Insurance Company" />
                            <img src={i} alt="Insurance Company" />
                            <img src={j} alt="Insurance Company" />
                            <img src={k} alt="Insurance Company" />

                            {/* Logos */}

                        </div>
                        <br />
                    </div>

                    {/* Second Marquee */}

                    <div className="marquee reverse">

                        <div className="marquee-track">

                            <img src={l} alt="Insurance Company" />
                            <img src={m} alt="Insurance Company" />
                            <img src={n} alt="Insurance Company" />
                            <img src={o} alt="Insurance Company" />
                            <img src={p} alt="Insurance Company" />
                            <img src={q} alt="Insurance Company" />
                            <img src={r} alt="Insurance Company" />
                            <img src={s} alt="Insurance Company" />
                            <img src={t} alt="Insurance Company" />

                        </div>

                    </div>

                </Container>

            </section>


            {/* --------------About Section------------ */}
            {/* ==========================================
        ABOUT SECTION
========================================== */}

            <section className="about-section-premium">

                <Container>

                    <Row className="align-items-center g-4">


                        {/* IMAGE SIDE */}

                        <Col lg={5}>

                            <div className="about-image-box">


                                <img
                                    src={wideangle}
                                    alt="PKDIMS Hospital"
                                />


                                <div className="about-experience">

                                    <h3>
                                        15+
                                    </h3>

                                    <p>
                                        Years
                                        <br />
                                        Healthcare Excellence
                                    </p>

                                </div>


                            </div>


                        </Col>



                        {/* CONTENT SIDE */}

                        <Col lg={7}>


                            <div className="about-content-premium">


                                <span className="about-label">

                                    <i className="bi bi-hospital-fill"></i>

                                    About PKDIMS

                                </span>



                                <h2>

                                    Excellence in Healthcare
                                    <br />

                                    <span>
                                        With Compassion
                                    </span>

                                </h2>



                                <p>

                                    PK DAS INSTITUTE OF MEDICAL SCIENCES is a state-of-the-art super- specialty hospital located near the banks of the river Nila at Ottapalam, Kerala.We uphold a steadfast mission to deliver the highest quality medical care to our patients. Our team of experienced doctors, nurses, and support staff are unwavering in their dedication to providing compassionate and personalized treatment to every individual who seeks our care.

                                </p>






                                <div className="about-highlights">


                                    <div>

                                        <i className="bi bi-heart-pulse-fill"></i>

                                        Trauma Care Units 24/7

                                    </div>


                                    <div>

                                        <i className="bi bi-scissors"></i>

                                        Operations Theatres

                                    </div>


                                    <div>

                                        <i className="bi bi-activity"></i>

                                        Cath Lab

                                    </div>


                                    <div>

                                        <i className="bi bi-cpu-fill"></i>

                                        Automated Labs

                                    </div>


                                    <div>

                                        <i className="bi bi-truck-front-fill"></i>

                                        Ambulance Services 24/7

                                    </div>


                                    <div>

                                        <i className="bi bi-bandaid-fill"></i>

                                        Emergency Care 24/7

                                    </div>


                                </div>




                                <Button className="premium-btn">

                                    Learn More

                                    <i className="bi bi-arrow-right"></i>

                                </Button>



                            </div>


                        </Col>


                    </Row>


                </Container>


            </section>
        </>
    )
}

export default Network
