import React from 'react'
// --------image--------
import faqdoctor from "../../assets/Images/faqdoctor.webp"
import {
    Container,
    Row,
    Col,
    Accordion,
    Button
} from "react-bootstrap";
import "./Faq.css"

const Faq = () => {

    const faqData = [
        {
            id: 1,
            question: "How can I book an appointment?",
            answer:
                "You can book an appointment by calling our helpline, filling out the appointment form on our website, or visiting the hospital in person."
        },
        {
            id: 2,
            question: "Do you accept health insurance?",
            answer:
                "Yes. We are associated with most leading insurance providers and TPAs."
        },
        {
            id: 3,
            question: "What are the visiting hours for patients?",
            answer:
                "General visiting hours are from 10:00 AM to 7:00 PM depending on department policies."
        },
        {
            id: 4,
            question: "How can I access my medical reports?",
            answer:
                "Medical reports are available through our patient portal or can be collected from the hospital."
        },
        {
            id: 5,
            question: "What payment methods do you accept?",
            answer:
                "Cash, UPI, Credit Cards, Debit Cards and Insurance payments are accepted."
        },
        {
            id: 6,
            question: "Is emergency care available 24/7?",
            answer:
                "Yes. Our Emergency Department operates 24 hours a day throughout the year."
        },
        {
            id: 7,
            question: "Where is PKDAS Hospital located?",
            answer:
                "PKDAS Hospital is located at Ottapalam, Kerala."
        }
    ];

    const features = [
        {
            icon: "bi bi-clock-history",
            title: "24/7 Emergency Care",
            text: "Always here when you need us most."
        },
        {
            icon: "bi bi-shield-check",
            title: "Trusted Healthcare",
            text: "Committed to safe, ethical & quality care."
        },
        {
            icon: "bi bi-people",
            title: "Expert Doctors",
            text: "Highly skilled and experienced specialists."
        },
        {
            icon: "bi bi-geo-alt",
            title: "Easy Accessibility",
            text: "Convenient location & patient friendly facilities."
        }
    ];

    // ------trusted healthcare excellence----------
    const leftCards = [
        {
            icon: "bi bi-check2-circle",
            title: "Medical Services You Trust",
            description:
                "Providing exceptional healthcare services with experienced specialists, advanced technology and compassionate patient care."
        },
        {
            icon: "bi bi-patch-check",
            title: "Quality Healthcare",
            description:
                "Dedicated to delivering safe, high-quality treatments with a patient-first approach and international standards."
        }
    ];

    const rightCards = [
        {
            icon: "bi bi-clock-history",
            title: "24/7 Hours",
            description:
                "Round-the-clock emergency and healthcare support for every patient."
        },
        {
            icon: "bi bi-heart-pulse",
            title: "Heal Quickly",
            description:
                "Advanced treatments and personalized care for faster recovery."
        },
        {
            icon: "bi bi-truck",
            title: "Ambulance Service",
            description:
                "Fast and reliable ambulance services available at all times."
        },
        {
            icon: "bi bi-capsule-pill",
            title: "Modern Pharmacy",
            description:
                "Well-stocked pharmacy with trusted medicines and expert guidance."
        }
    ];

    return (
        <>
            <section className="faq-section">

                <Container>

                    {/* Section Heading */}

                    <div className="faq-heading">

                        <span>

                            <div className="faq-line"></div>

                            FAQs

                            <div className="faq-line"></div>

                        </span>

                        <h2>

                            Frequently Asked Questions

                        </h2>

                        <p>

                            Find quick answers to common questions about our
                            services, appointments, and patient care.

                        </p>

                    </div>
                    <Row className="align-items-start g-4">

                        {/* ======================================
                        Left Side
                    ======================================= */}

                        <Col lg={4}>

                            <div className="faq-left-wrapper">

                                {/* Question Card */}

                                <div className="faq-question-card">

                                    <div className="faq-question-icon">

                                        <i className="bi bi-chat-dots"></i>

                                    </div>

                                    <h3>

                                        Got Questions?

                                        <br />

                                        <span>We're Here to Help!</span>

                                    </h3>

                                    <div className="faq-small-divider"></div>

                                    <p>

                                        Find quick answers to common questions
                                        about appointments, treatments,
                                        insurance and patient care.

                                    </p>

                                </div>

                                {/* Doctor Image */}



                                {/* Contact Card */}

                                {/* <div className="faq-contact-card">

                                    <div className="faq-contact-top">

                                        <div className="faq-contact-icon">

                                            <i className="bi bi-headset"></i>

                                        </div>

                                        <div>

                                            <h5>

                                                Still Need Help?

                                            </h5>

                                            <p>

                                                Our support team is just a call away.

                                            </p>

                                        </div>

                                    </div>

                                    <div className="faq-contact-numbers">

                                        <div>

                                            <i className="bi bi-telephone-fill"></i>

                                            <span>

                                                04662344500

                                            </span>

                                        </div>

                                        <div>

                                            <i className="bi bi-whatsapp"></i>

                                            <span>

                                                8089989932

                                            </span>

                                        </div>

                                    </div>

                                    <Button className="faq-contact-btn">

                                        <i className="bi bi-envelope me-2"></i>

                                        Contact Us

                                    </Button>

                                </div> */}

                            </div>

                        </Col>

                        <Col lg={3}>
                            <div className="faq-image-card">

                                <img
                                    src={faqdoctor}
                                    alt="Doctor Consultation"
                                    className="img-fluid"
                                />

                            </div>
                        </Col>

                        {/* ======================================
                            Right Side - FAQ Accordion
                    ======================================= */}

                        <Col lg={5}>

                            <div className="faq-accordion-wrapper">

                                <Accordion defaultActiveKey="0" flush>

                                    {faqData.map((faq, index) => (

                                        <Accordion.Item
                                            eventKey={index.toString()}
                                            key={faq.id}
                                            className="faq-accordion-item"
                                        >

                                            <Accordion.Header>

                                                {faq.question}

                                            </Accordion.Header>

                                            <Accordion.Body>

                                                {faq.answer}

                                            </Accordion.Body>

                                        </Accordion.Item>

                                    ))}

                                </Accordion>

                            </div>

                        </Col>

                    </Row>

                    {/* ======================================
                        Bottom Feature Cards
                ======================================= */}

                    <Row className="faq-feature-row mt-5 g-4">

                        {features.map((feature, index) => (

                            <Col
                                lg={3}
                                md={6}
                                key={index}
                            >

                                <div className="faq-feature-card">

                                    <div className="faq-feature-icon">

                                        <i className={feature.icon}></i>

                                    </div>

                                    <div className="faq-feature-content">

                                        <h5>

                                            {feature.title}

                                        </h5>

                                        <p>

                                            {feature.text}

                                        </p>

                                    </div>

                                </div>

                            </Col>

                        ))}

                    </Row>

                </Container>

            </section>

            {/* -----------trusted healthcare excellence---------- */}
            <section className="trusted-section">

                <Container>

                    {/* =========================
                    Heading
                ========================= */}

                    <div className="trusted-heading">

                        <span>

                            Trusted Healthcare Excellence

                        </span>

                        <h2>

                            We Give You the Best Care

                        </h2>

                        <p>

                            Compassionate healthcare backed by modern
                            technology and experienced medical professionals.

                        </p>

                    </div>

                    <Row className="align-items-center g-4">
                        {/*=====================================
                            LEFT COLUMN
                    =====================================*/}

                        <Col lg={3}>

                            <div className="trusted-left-column">

                                {leftCards.map((card, index) => (

                                    <div
                                        className="trusted-left-card"
                                        key={index}
                                    >

                                        <div className="trusted-card-icon">

                                            <i className={card.icon}></i>

                                        </div>

                                        <h6>

                                            {card.title}

                                        </h6>

                                        <p>

                                            {card.description}

                                        </p>

                                    </div>

                                ))}

                            </div>

                        </Col>

                        {/*=====================================
                            CENTER COLUMN
                    =====================================*/}

                        <Col lg={6}>

                            <div className="trusted-image-wrapper">

                                {/* Decorative Shapes */}

                                <div className="trusted-shape trusted-shape-1"></div>

                                <div className="trusted-shape trusted-shape-2"></div>

                                <div className="trusted-shape trusted-shape-3"></div>

                                {/* Doctor Image */}

                                <div className="trusted-image-card">

                                    <img
                                        src={faqdoctor}
                                        alt="Doctor"
                                        className="img-fluid"
                                    />

                                </div>

                                {/* Bottom Floating Badge */}

                                <div className="trusted-patient-badge">

                                    <i className="bi bi-shield-check-fill"></i>

                                    <span>

                                        Trusted by 10K+ Happy Patients

                                    </span>

                                </div>

                            </div>

                        </Col>
                        {/*=====================================
                            RIGHT COLUMN
                    =====================================*/}

                        <Col lg={3}>

                            <div className="trusted-right-column">

                                {rightCards.map((card, index) => (

                                    <div
                                        className="trusted-right-card"
                                        key={index}
                                    >

                                        <div className="trusted-right-icon">

                                            <i className={card.icon}></i>

                                        </div>

                                        <div className="trusted-right-content">

                                            <h6>

                                                {card.title}

                                            </h6>

                                            <p>

                                                {card.description}

                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>



        </>
    )
}

export default Faq
