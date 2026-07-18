import React from 'react'
import "./DirectorsMessage.css"
import { Badge, Col, Container, Row } from "react-bootstrap";
import directorimg from "../../assets/Images/directorimg.webp"

const DirectorsMessage = () => {
    return (
        <>
            <section className="director-message-page">

                {/* ================= Hero Section ================= */}

                <section className="director-hero-section">

                    <Container>

                        <div className="director-hero-content text-center">

                            <Badge className="director-hero-badge">
                                Leadership Message
                            </Badge>

                            <h1>Director's Message</h1>

                            <p>
                                Inspiring future healthcare professionals through knowledge,
                                innovation and unwavering commitment to excellence.
                            </p>

                        </div>

                    </Container>

                </section>

                {/* ================= Main Section ================= */}

                <section className="director-content-section">

                    <Container>

                        <Row className="g-5 align-items-start">

                            {/* Left Profile */}

                            <Col lg={4}>

                                <div className="director-profile-card">

                                    <div className="director-image-box">

                                        <img
                                            src={directorimg}
                                            alt="Dr. R. C. Krishna Kumar"
                                            className="img-fluid"
                                            loading='eager'
                                        />

                                    </div>

                                    <div className="director-profile-content">

                                        <h3>Dr. R. C. Krishna Kumar</h3>

                                        <span>Director</span>

                                        <div className="director-divider"></div>

                                        <div className="director-highlights">

                                            <div>
                                                <i className="bi bi-lightbulb-fill"></i>
                                                Visionary Leadership
                                            </div>

                                            <div>
                                                <i className="bi bi-hospital-fill"></i>
                                                Healthcare Excellence
                                            </div>

                                            <div>
                                                <i className="bi bi-mortarboard-fill"></i>
                                                Academic Innovation
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </Col>

                            {/* Right Content */}

                            <Col lg={8}>

                                <div className="director-message-card">

                                    <div className="director-quote-icon">
                                        <i className="bi bi-quote"></i>
                                    </div>

                                    <p>
                                       <strong>PK DAS Institute of Medical Sciences</strong>  is conceived with the motto of creating tomorrow’s healthcare leaders today. As we all know the field of Medical teaching and patient treatment are undergoing tremendous advancement with each passing day.

                                        The ever-evolving landscape of medical education and patient care demands that we remain at the forefront of innovation. The Nehru Group of Institutions (NGI) has consistently played a pioneering role in revolutionizing higher education in Kerala and Tamil Nadu, setting benchmarks across various disciplines. Our commitment to excellence is exemplified by the recent recognition of our sister institution, Nehru College of Engineering & Research Centre, as the first and only platinum campus in Kerala by Microsoft.
                                    </p>

                                    <p>
                                        The 21st Century is anticipated to be an era of information revolution. Profound transformations are occurring in both technology and the approach to education. Our late Chairman Shri P K DAS was a strong votary of the force of knowledge and value based education and that is why the moto of NGI is moulding true citizen. He was a true embodiment of knowledge, a great teacher and an extremely eager student till his last breath.

                                        India has a rich history of prioritizing education, Vedas are the oldest texts known to man. The name Vedas originated from the word vid meaning “to know”. The Vedas proudly proclaimed ‘pragnanam Bramaha” meaning knowledge is God.
                                    </p>

                                    <p>
                                        India was great till she was receptive to the voices around the world. Now India has a demographic advantage of having the world’s largest youth population. If we want to rise again we have to make use of this youth power, nurture it, so that we might be able to get the old glory back. For this we have to be open and receptive to the changes taking place around the world. We must keep updated about the developments and seize the opportunity as and when it arises. The opening up of the Indian economy has thrown open our windows to the world.

                                        “Anubadraha Karthavyo Yanthu Viswathaha” which means let noble thoughts comes to us from everyside.
                                    </p>

                                    <p>
                                        The P K Das Institute of Medical Sciences is looking to blend the traditional educational methods in India with cutting-edge technologies from across the globe. Our goal is to establish ourselves as the Best Medical Colleges in India and worldwide, drawing in top-tier students and distinguished faculty from both near and far. We are confident that by joining our Medical College as a member or student, you are enrolling in one of the Top Medical Colleges globally.
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

export default DirectorsMessage
