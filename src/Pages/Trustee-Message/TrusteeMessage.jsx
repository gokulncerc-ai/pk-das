import React from 'react'
import "./TrusteeMessage.css"
import { Badge, Col, Container, Row } from "react-bootstrap";
import TrusteeMessageimg from "../../assets/Images/TrusteeMessageimg.webp"

const TrusteeMessage = () => {
    return (
        <>
            <section className="trustee-message-page">

                {/* ================= Hero Section ================= */}

                <section className="trustee-hero-section">

                    <Container>

                        <div className="trustee-hero-content text-center">

                            <Badge className="trustee-hero-badge">
                                Leadership Message
                            </Badge>

                            <h1>Trustee's Message</h1>

                            <p>
                                Carrying forward a timeless vision of compassionate healthcare,
                                quality medical education and service to humanity.
                            </p>

                        </div>

                    </Container>

                </section>

                {/* ================= Main Content ================= */}

                <section className="trustee-content-section">

                    <Container>

                        <Row className="g-5 align-items-start">

                            {/* Left Profile */}

                            <Col lg={4}>

                                <div className="trustee-profile-card">

                                    <div className="trustee-image-box">

                                        <img
                                            src={TrusteeMessageimg}
                                            alt="Dr. P. Thulasi"
                                            className="img-fluid"
                                        />

                                    </div>

                                    <div className="trustee-profile-content">

                                        <h3>Dr. P. Thulasi</h3>

                                        <span>Trustee</span>

                                        <div className="trustee-divider"></div>

                                        <div className="trustee-highlights">

                                            <div>
                                                <i className="bi bi-heart-fill"></i>
                                                Compassionate Leadership
                                            </div>

                                            <div>
                                                <i className="bi bi-building"></i>
                                                Institution Development
                                            </div>

                                            <div>
                                                <i className="bi bi-book-half"></i>
                                                Academic Excellence
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </Col>

                            {/* Right Content */}

                            <Col lg={8}>

                                <div className="trustee-message-card">

                                    <div className="trustee-quote-icon">
                                        <i className="bi bi-quote"></i>
                                    </div>

                                    <p>
                                        P.K. Das Institute of Medical Sciences was founded in memory
                                        of my beloved father, <strong>Late P. K. Das</strong>, who
                                        was a visionary, scholar, educationalist and above all, a
                                        compassionate individual who believed that quality education
                                        should reach every section of society. His lifelong ambition
                                        was to create opportunities that would positively transform
                                        lives through education and healthcare.
                                    </p>

                                    <p>
                                        Nestled amidst <strong>36 acres</strong> of picturesque
                                        landscape near the serene banks of the Nila River, the
                                        Medical College and Hospital features nearly
                                        <strong> 10 lakh square feet </strong>
                                        of world-class infrastructure designed to support excellence
                                        in medical education, patient care and research.
                                    </p>

                                    <p>
                                        Our institution is committed to maintaining the highest
                                        international standards in medical education, advanced
                                        research, patient care, laboratory services and
                                        pharmaceutical practices. Every initiative is focused on
                                        delivering innovative, collaborative and compassionate
                                        healthcare while continuously striving for excellence.
                                    </p>

                                    <p>
                                        The management has spared no effort in creating a learning
                                        environment that inspires confidence among students from the
                                        moment they enter our campus. Every classroom, laboratory,
                                        library and clinical facility has been thoughtfully developed
                                        to provide an enriching educational experience and prepare
                                        students to excel in their professional careers.
                                    </p>

                                    <p>
                                        Under the able leadership of our Principal and a highly
                                        dedicated academic team, the curriculum has been carefully
                                        refined while modern teaching methodologies have been
                                        introduced to promote innovation, critical thinking and
                                        practical learning. Every aspect of the educational journey
                                        has been meticulously planned to nurture competent,
                                        compassionate and ethically responsible healthcare
                                        professionals.
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

export default TrusteeMessage
