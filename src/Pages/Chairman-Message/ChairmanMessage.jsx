import React from 'react'
import "./ChairmanMessage.css"
import { Container, Row, Col, Badge } from "react-bootstrap";
import founder1 from "../../assets/Images/founder1.webp"

const ChairmanMessage = () => {
    return (
        <>
            <section className="chairman-message-page">

                {/* ================= Hero ================= */}

                <section className="chairman-hero">
                    <Container>
                        <div className="chairman-hero-content text-center">

                            <Badge className="chairman-badge">
                                Chairman's Desk
                            </Badge>

                            <h1>
                                Chairman's Message
                            </h1>

                            <p>
                                A vision of excellence in healthcare, education and compassionate
                                service to society.
                            </p>

                        </div>
                    </Container>
                </section>

                {/* ================= Message Section ================= */}

                <section className="chairman-content-section">

                    <Container>

                        <Row className="g-5 align-items-start">

                            {/* Left */}

                            <Col lg={4}>

                                <div className="chairman-profile-card">

                                    <div className="chairman-image-wrapper">

                                        <img
                                            src={founder1}
                                            alt="Chairman"
                                            className="img-fluid"
                                            loading='eager'
                                        />

                                    </div>

                                    <div className="chairman-profile-content">

                                        <h3>
                                            Adv. Dr. P. Krishnadas
                                        </h3>

                                        <span>
                                            Chairman & Managing Trustee
                                        </span>

                                        <div className="chairman-divider"></div>

                                        <div className="chairman-highlights">

                                            <div>
                                                <i className="bi bi-award-fill"></i>
                                                Visionary Leader
                                            </div>

                                            <div>
                                                <i className="bi bi-heart-pulse-fill"></i>
                                                Healthcare Excellence
                                            </div>

                                            <div>
                                                <i className="bi bi-mortarboard-fill"></i>
                                                Education Pioneer
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </Col>

                            {/* Right */}

                            <Col lg={8}>

                                <div className="chairman-message-card">

                                    <div className="quote-icon">
                                        <i className="bi bi-quote"></i>
                                    </div>

                                    <p>
                                        India, known for its vast population, boasts the largest
                                        number of medical colleges globally, producing highly skilled
                                        medical professionals. As guardians of public health, medical
                                        practitioners shoulder significant responsibilities in
                                        safeguarding, enhancing, and promoting the well-being of
                                        individuals. The landscape of medical education has evolved
                                        significantly to cater to societal needs and cultivate doctors
                                        aligned with community requirements.
                                    </p>

                                    <p>
                                        P.K. Das Institute of Medical Sciences stands as a tribute to
                                        the late P.K. Das, a distinguished philanthropist,
                                        academician, industrialist, and the visionary founder
                                        chairman of the Nehru College of Educational and Charitable
                                        Trust. This institution is part of the esteemed Nehru Group
                                        of Institutions, known for setting benchmarks in the
                                        education sector and now making strides in medical education.
                                    </p>

                                    <p>
                                        P.K. Das Institute of Medical Sciences, a renowned
                                        multi-specialty and general hospital, has made significant
                                        strides and successfully launched a state-of-the-art Medical
                                        College in the academic year 2014–2015. P.K. Das Institute of
                                        Medical Sciences is not only a premier medical college but
                                        also recognized as the best multi-specialty hospital in the
                                        region.
                                    </p>

                                    <p>
                                        It welcomes aspiring students to an institution of excellence
                                        where they will embark on a transformative learning journey
                                        to become knowledgeable citizens of tomorrow and ethical
                                        doctors who truly embody value and integrity.
                                    </p>

                                    <p>
                                        The college's vision is to establish itself as the most
                                        reputable and in-demand medical institution by excelling in
                                        research, medical education, and superior patient care. It
                                        aims to nurture medical professionals who prioritize
                                        patient-centered, evidence-based, and collaborative
                                        high-quality healthcare.
                                    </p>

                                    <p>
                                        The mission is crafted with a clear objective to emerge as
                                        national leaders in educating and shaping the next generation
                                        of healthcare professionals. Additionally, it aims to attract
                                        renowned medical professionals, educators, and researchers,
                                        fostering centers of excellence in all medical specialties.
                                    </p>

                                    <p>
                                        The goal is to empower students and faculty to pursue their
                                        passion for discovery, healing, and health, ultimately
                                        enriching lives, making a significant impact, and
                                        contributing to the nation's progress.
                                    </p>

                                </div>

                            </Col>

                        </Row>

                    </Container>

                </section>

            </section>



        </>
    )
}

export default ChairmanMessage
