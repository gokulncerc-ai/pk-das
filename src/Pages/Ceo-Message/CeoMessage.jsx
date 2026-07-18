import React from 'react'
import "./CeoMessage.css"
import { Badge, Col, Container, Row } from "react-bootstrap";
import founder2 from "../../assets/Images/founder2.webp"

const CeoMessage = () => {
    return (
        <>
            <section className="ceo-message-page">

                {/* ================= Hero ================= */}

                <section className="ceo-banner-section">
                    <Container>

                        <div className="ceo-banner-content text-center">

                            <Badge className="ceo-banner-badge">
                                Leadership Message
                            </Badge>

                            <h1>CEO's Message</h1>

                            <p>
                                Inspiring excellence through innovation, education and
                                compassionate healthcare for a healthier tomorrow.
                            </p>

                        </div>

                    </Container>
                </section>

                {/* ================= Content ================= */}

                <section className="ceo-main-section">

                    <Container>

                        <Row className="g-5 align-items-start">

                            {/* Left */}

                            <Col lg={4}>

                                <div className="ceo-profile-box">

                                    <div className="ceo-photo-wrapper">

                                        <img
                                            src={founder2}
                                            alt="CEO"
                                            className="img-fluid"
                                            loading='eager'
                                        />

                                    </div>

                                    <div className="ceo-profile-details">

                                        <h3>Dr. P Krishnakumar</h3>

                                        <span>CEO & Secretary</span>

                                        <div className="ceo-profile-line"></div>

                                        <div className="ceo-feature-list">

                                            <div>
                                                <i className="bi bi-stars"></i>
                                                Educational Visionary
                                            </div>

                                            <div>
                                                <i className="bi bi-hospital-fill"></i>
                                                Healthcare Leadership
                                            </div>

                                            <div>
                                                <i className="bi bi-mortarboard-fill"></i>
                                                Academic Excellence
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </Col>

                            {/* Right */}

                            <Col lg={8}>

                                <div className="ceo-message-box">

                                    <div className="ceo-quote-box">
                                        <i className="bi bi-quote"></i>
                                    </div>

                                    <p>
                                        It is my proud privilege to introduce the large group of
                                        pioneering educational institutions popularly known as the
                                        <strong> "Nehru Group of Institutions"</strong> owing its
                                        origin to the southernmost part of peninsular India.
                                    </p>

                                    <p>
                                        The ISO 9001 – 2008 certified galaxy of reputed institutions
                                        were founded way back in 1968 by the founder Chairman late
                                        P. K. Das and is patronized by the Nehru College of
                                        Educational & Charitable Trust.
                                    </p>

                                    <p>
                                        Affiliated to Alagappa University, Karaikudi, Anna
                                        University, Chennai, Anna University, Coimbatore,
                                        Bharathiar University, Coimbatore and Calicut University,
                                        the institutes offer undergraduate, postgraduate and
                                        research programmes across Arts & Science, Commerce,
                                        Management, Engineering, Medicine, Pharmacy, Catering &
                                        Hotel Management, Costume Design & Fashion,
                                        Biotechnology, Microbiology, Applied Electronics and
                                        Visual Communications.
                                    </p>

                                    <p>
                                        With over <strong>12,000 students</strong> pursuing their
                                        educational aspirations within this vibrant academic
                                        ecosystem, the Nehru Group of Institutions remains committed
                                        to delivering a transformative learning experience that
                                        empowers individuals to excel in their chosen professions.
                                    </p>

                                    <p>
                                        The institution proudly encompasses
                                        <strong> 12 prestigious educational institutions</strong>
                                        across Engineering, Management, Information Technology,
                                        Aeronautical Sciences, Arts & Sciences, Medical &
                                        Paramedical Sciences and Pharmacy, spread across
                                        <strong> 300 acres </strong>
                                        over five campuses in Tamil Nadu and Kerala.
                                    </p>

                                    <p>
                                        The Nehru Group of Institutions performs the vital tasks of
                                        education through dissemination of knowledge, continuous
                                        research, professional development and preparing graduates
                                        capable of serving the occupational and societal needs of
                                        the nation.
                                    </p>

                                    <p>
                                        Supported by over
                                        <strong> 750 dedicated faculty members</strong>, modern
                                        laboratories, digital libraries, CAM/CAD facilities,
                                        Wi-Fi enabled campuses, seminar halls, workshops,
                                        conference rooms and excellent residential facilities,
                                        our campuses provide an ideal environment for learning,
                                        innovation and holistic development. A fleet of buses also
                                        transports nearly <strong>7000 day scholars</strong>
                                        every day, ensuring accessibility and convenience.
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

export default CeoMessage
