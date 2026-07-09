import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// ---------images imported-----------
import w from "../../assets/Images/w.webp"
import x from "../../assets/Images/x.webp"
import y from "../../assets/Images/y.webp"
import z from "../../assets/Images/z.webp"

import './Testimonials.css'

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            image: w,
            name: "Ramesh Nair",
            designation: "Cardiac Care Patient",
            review:
                "The care I received at PKDAS changed my life. The doctors were compassionate and guided me throughout my recovery.",
            badge: "Recovered Successfully",
            rating: 5,
        },
        {
            id: 2,
            image: x,
            name: "Anitha Joseph",
            designation: "Orthopedic Patient",
            review:
                "Excellent treatment and amazing nursing staff. The entire experience was smooth and comfortable.",
            badge: "Recovered Successfully",
            rating: 5,
        },
        {
            id: 3,
            image: y,
            name: "Muhammed Ali",
            designation: "Neurology Patient",
            review:
                "Professional doctors, modern facilities and compassionate care made my recovery much easier.",
            badge: "Recovered Successfully",
            rating: 5,
        },
        {
            id: 4,
            image: z,
            name: "Lakshmi Devi",
            designation: "General Medicine",
            review:
                "Every member of the hospital treated me with respect and kindness. Highly recommended.",
            badge: "Recovered Successfully",
            rating: 5,
        },
    ];

    const statistics = [
        {
            icon: "bi-people",
            value: "25,000+",
            title: "Happy Patients",
        },
        {
            icon: "bi-star",
            value: "4.9/5",
            title: "Average Rating",
        },
        {
            icon: "bi-hand-thumbs-up",
            value: "98%",
            title: "Recommend Us",
        },
        {
            icon: "bi-shield-check",
            value: "35+",
            title: "Years of Trust",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const previousSlide = () => {
        setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const current = testimonials[activeIndex];


    return (
        <>
            <section className="testimonial-section">
                <br />

                <Container>

                    {/* ===========================
            Section Heading
        =========================== */}

                    <div className="testimonial-heading">

                        <span>

                            <div className="heading-line"></div>

                            PATIENT TESTIMONIALS

                            <div className="heading-line"></div>

                        </span>

                        <h2>

                            Voices of Trust

                        </h2>

                        <p>

                            Real stories from our patients who experienced
                            compassionate care and advanced treatment at PKDAS.

                        </p>

                    </div>

                    {/* ===========================
            Main Testimonial Card
        =========================== */}

                    <div className="testimonial-wrapper">

                        {/* Previous Button */}

                        <button
                            className="testimonial-nav prev-btn"
                            onClick={previousSlide}
                        >
                            <i className="bi bi-chevron-left"></i>
                        </button>

                        {/* Next Button */}

                        <button
                            className="testimonial-nav next-btn"
                            onClick={nextSlide}
                        >
                            <i className="bi bi-chevron-right"></i>
                        </button>

                        <Row className="align-items-center">

                            {/* Left Image */}

                            <Col lg={6}>

                                <div className="testimonial-image-box">

                                    <img
                                        src={current.image}
                                        alt={current.name}
                                        className="img-fluid"
                                    />

                                    <div className="recovery-badge">

                                        <div className="badge-icon">

                                            <i className="bi bi-shield-check"></i>

                                        </div>

                                        <div>

                                            <h6>

                                                {current.badge}

                                            </h6>

                                            <span>

                                                Successfully

                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </Col>

                            {/* Right Content */}

                            <Col lg={6}>

                                <div className="testimonial-content">

                                    <div className="quote-icon">

                                        <i className="bi bi-quote"></i>

                                    </div>

                                    <h3>

                                        {current.review}

                                    </h3>

                                    <div className="green-divider"></div>

                                    <div className="testimonial-stars">

                                        {[...Array(current.rating)].map((_, index) => (

                                            <i
                                                key={index}
                                                className="bi bi-star-fill"
                                            ></i>

                                        ))}

                                    </div>
                                    {/* Patient Information */}

                                    <div className="testimonial-user">

                                        <div className="testimonial-user-info">

                                            <h4>{current.name}</h4>

                                            <span>{current.designation}</span>

                                        </div>

                                    </div>

                                    {/* Action Buttons */}

                                    <div className="testimonial-buttons">

                                        <Button className="testimonial-primary-btn">

                                            <i className="bi bi-play-fill me-2"></i>

                                            Watch Story

                                        </Button>

                                        <Button
                                            variant="outline-primary"
                                            className="testimonial-secondary-btn"
                                        >

                                            Read Full Story

                                        </Button>

                                    </div>

                                </div>

                            </Col>

                        </Row>

                    </div>

                    {/* ===============================
              Slider Indicators
        =============================== */}

                    <div className="testimonial-indicators">

                        {testimonials.map((item, index) => (

                            <button
                                key={item.id}
                                className={`indicator ${activeIndex === index ? "active" : ""
                                    }`}
                                onClick={() => setActiveIndex(index)}
                            ></button>

                        ))}

                    </div>

                    {/* ===============================
              Statistics
        =============================== */}

                    <Row className="g-4 mt-5">

                        {statistics.map((item, index) => (

                            <Col
                                lg={3}
                                md={6}
                                key={index}
                            >

                                <div className="testimonial-stat-card">

                                    <div className="stat-icon">

                                        <i className={`bi ${item.icon}`}></i>

                                    </div>

                                    <h3>

                                        {item.value}

                                    </h3>

                                    <p>

                                        {item.title}

                                    </p>

                                </div>

                            </Col>

                        ))}

                    </Row>

                </Container>
                
<br />
            </section>

        </>
    )
}

export default Testimonials
