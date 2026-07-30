import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./Ambalapara.css";
import AmbalaparaSlide1 from "../../../../assets/Images/slides/A22.png";
import AmbalaparaSlide2 from "../../../../assets/Images/slides/A11.jfif";
import ambalaparaAbout from "../../../../assets/Images/slides/ambalaparaAbout.jpg";
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';

const slides = [
    {
        image: AmbalaparaSlide1,
        tag: "Led by Passionate Experts",
        titleLine1: "A Medical Care",
        titleLine2: "You Can Always Trust!",
        description:
            "From diagnosis to recovery, our hospital offers a spectrum of expert services, ensuring personalized care at every step of your journey to wellness.",
        primaryAction: { type: "call", label: "0466 2244500" },
        secondaryAction: { type: "appointment", label: "Make An Appointment!" },
    },
    {
        image: AmbalaparaSlide2,
        tag: "Led by Passionate Experts",
        titleLine1: "Committed To",
        titleLine2: "Trusted Health Care",
        description:
            "Comprehensive care, tailored to you. Discover our range of specialized services designed to meet your every healthcare need.",
        primaryAction: { type: "link", label: "View More Details" },
        secondaryAction: { type: "video", label: "How We Work" },
    },
];

const quickInfo = [
    {
        icon: "fa-user-md",
        title: "Qualified Doctors",
        text: "Highly qualified and vastly experienced medical professionals to attend to all your healthcare needs.",
    },
    {
        icon: "fa-hospital-o",
        title: "Opens 24x7",
        text: "Take advantage of our convenient and easily accessible working times!",
    },
    {
        icon: "fa-ambulance",
        title: "Emergency Aid",
        text: "We are fully prepared to provide the best assistance for any medical emergency.",
    },
];

const services = [
    { icon: "fa-user-md", title: "Medicine" },
    { icon: "fa-child", title: "Pediatrics" },
    { icon: "fa-stethoscope", title: "ENT" },
    { icon: "fa-wheelchair", title: "Orthopedics" },
    { icon: "fa-female", title: "Obstetrics and Gynecology" },
    { icon: "fa-shield", title: "Dermatology" },
    { icon: "fa-comments-o", title: "Psychiatry" },
    { icon: "fa-medkit", title: "General Surgery" },
];

const Ambalapara = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [showAppointmentModal, setShowAppointmentModal] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const openAppointmentModal = useCallback(() => setShowAppointmentModal(true), []);
    const closeAppointmentModal = useCallback(() => setShowAppointmentModal(false), []);
    const openVideoModal = useCallback(() => setShowVideoModal(true), []);
    const closeVideoModal = useCallback(() => setShowVideoModal(false), []);

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        // TODO: wire up to the appointment/mail API endpoint
        closeAppointmentModal();
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        // TODO: wire up to the contact_mail API endpoint
    };

    const handleSlideAction = (action) => {
        if (action.type === "appointment") {
            openAppointmentModal();
        } else if (action.type === "video") {
            openVideoModal();
        } else if (action.type === "call") {
            window.location.href = "tel:04662244500";
        }
    };

    return (
        <>
            <Header />

            {/* ================= HERO SLIDER ================= */}
            <section className="pt-hero">
                {slides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`pt-hero-slide ${idx === activeSlide ? "pt-hero-slide--active" : ""}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>
                ))}
                <div className="pt-hero-overlay"></div>

                <Container>
                    <div className="pt-hero-content">
                        <span className="gm-badge">{slides[activeSlide].tag}</span>
                        <h1>
                            {slides[activeSlide].titleLine1}
                            <br />
                            {slides[activeSlide].titleLine2}
                        </h1>
                        <p>{slides[activeSlide].description}</p>

                        <div className="pt-hero-buttons">
                            <button
                                type="button"
                                className="gm-primary-btn"
                                onClick={() => handleSlideAction(slides[activeSlide].primaryAction)}
                            >
                                {slides[activeSlide].primaryAction.label}
                            </button>
                            {slides[activeSlide].secondaryAction.type === "video" ? (
                                <button
                                    type="button"
                                    className="pt-hero-play"
                                    onClick={openVideoModal}
                                    aria-label="Play how we work video"
                                >
                                    <i className="fa fa-play"></i>
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="gm-secondary-btn"
                                    onClick={() => handleSlideAction(slides[activeSlide].secondaryAction)}
                                >
                                    {slides[activeSlide].secondaryAction.label}
                                </button>
                            )}
                        </div>
                    </div>
                </Container>

                <div className="pt-hero-dots">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className={`pt-hero-dot ${idx === activeSlide ? "pt-hero-dot--active" : ""}`}
                            onClick={() => setActiveSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        ></button>
                    ))}
                </div>
            </section>

            {/* ================= QUICK INFO ================= */}
            <section className="gm-quick-info">
                <Container>
                    <Row className="g-4">
                        {quickInfo.map((item, idx) => (
                            <Col lg={4} md={4} key={idx}>
                                <div className="gm-info-card">
                                    <div className="gm-info-icon">
                                        <i className={`fa ${item.icon}`}></i>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ================= ABOUT ================= */}
            <section className="gm-about">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <span className="gm-section-tag">Who We Are</span>
                            <h2 className="pt-about-title">
                                Bringing Healthcare Closer to You
                            </h2>
                            <p>
                                PK Das Medical Centre - Ambalapara strives to bring
                                accessible, quality healthcare near to you. As a part of
                                the PK Das Institute of Medical Sciences, our mission is to
                                bring expert medical services to the doorstep of the
                                community with compassion, efficiency, and care.
                            </p>
                            <p>
                                With world-class facilities, experienced doctors and
                                patient-centred care, PK Das Medical Centre provides top
                                quality services to individuals and families. At PK Das
                                Medical Centre, your well-being is what matters most to us
                                - so you no longer need to travel far for the care you
                                deserve. We invite you to enjoy trusted care, closer to
                                you.
                            </p>
                        </Col>
                        <Col md={6}>
                            <div className="pt-about-image">
                                <img src={ambalaparaAbout} alt="PK Das Medical Centre Ambalapara" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ================= SERVICES ================= */}
            <section id="services" className="gm-features">
                <Container>
                    <div className="gm-section-heading">
                        <span>Our Services</span>
                        <h2>Special High-quality Services</h2>
                    </div>

                    <Row className="g-4">
                        {services.map((service, idx) => (
                            <Col lg={3} sm={6} key={idx}>
                                <button
                                    type="button"
                                    className="pt-service-card"
                                    onClick={openAppointmentModal}
                                >
                                    <div className="pt-service-icon">
                                        <i className={`fa ${service.icon}`}></i>
                                    </div>
                                    <span className="pt-service-title">{service.title}</span>
                                </button>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ================= CONTACT ================= */}
            <section className="pt-contact">
                <Container>
                    <div className="pt-contact-wrapper">
                        <Row className="g-0">
                            <Col lg={5}>
                                <div className="pt-contact-info">
                                    <h3>Connect With Us</h3>

                                    <div className="pt-contact-item">
                                        <div className="pt-contact-icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <div>
                                            <h5>PK Das Medical Centre</h5>
                                            <p>Vengassery, Ottappalam, Palakkad</p>
                                        </div>
                                    </div>

                                    <div className="pt-contact-item">
                                        <div className="pt-contact-icon">
                                            <i className="fa fa-envelope-o"></i>
                                        </div>
                                        <div>
                                            <h5>pkdasmedicalcentre@pkdashospital.com</h5>
                                            <p>Need support? Drop us an email</p>
                                        </div>
                                    </div>

                                    <div className="pt-contact-item">
                                        <div className="pt-contact-icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div>
                                            <h5>0466 2244500</h5>
                                            <p>Have a question? Call us now</p>
                                        </div>
                                    </div>

                                    <div className="pt-contact-item">
                                        <div className="pt-contact-icon">
                                            <i className="fa fa-clock-o"></i>
                                        </div>
                                        <div>
                                            <h5>Mon - Sat 07:00 - 21:00</h5>
                                            <p>We are open on</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className="pt-contact-form-wrapper">
                                    <span className="gm-section-tag">What We Do</span>
                                    <h2>Make An Appointment</h2>
                                    <form className="pt-contact-form" onSubmit={handleContactSubmit}>
                                        <label>
                                            <i className="fa fa-user"></i>
                                            <input
                                                name="your-name"
                                                type="text"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </label>
                                        <label>
                                            <i className="fa fa-mobile"></i>
                                            <input
                                                name="your-phone"
                                                type="text"
                                                placeholder="Cell Phone"
                                                required
                                            />
                                        </label>
                                        <label>
                                            <i className="fa fa-envelope-o"></i>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                                required
                                            />
                                        </label>
                                        <label className="pt-contact-form-textarea">
                                            <i className="fa fa-comment-o"></i>
                                            <textarea
                                                name="message"
                                                rows={3}
                                                placeholder="Message"
                                                required
                                            ></textarea>
                                        </label>
                                        <button
                                            type="submit"
                                            className="gm-primary-btn pt-contact-submit"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="pt-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125400.75731826203!2d76.36992280765915!3d10.82862526594312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba7d90b052090a1%3A0x52b82392ebef89fb!2sJawan%20Nagar%20Vengassery%2C%20Ambalapara%2C%20Ottapalam%2C%20Kerala%20679516!3m2!1d10.8286362!2d76.45232469999999!5e0!3m2!1sen!2sin!4v1746871116089!5m2!1sen!2sin"
                            title="PK Das Medical Centre Ambalapara Location"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </Container>
            </section>

            <Footer />

            {/* ================= APPOINTMENT MODAL ================= */}
            {showAppointmentModal && (
                <div className="pt-modal" onClick={closeAppointmentModal}>
                    <div className="pt-modal-inner" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="pt-modal-close"
                            onClick={closeAppointmentModal}
                            aria-label="Close appointment form"
                        >
                            <i className="fa fa-close"></i>
                        </button>
                        <h3>Make An Appointment</h3>
                        <form onSubmit={handleAppointmentSubmit}>
                            <div className="pt-modal-field">
                                <input type="text" name="name" placeholder="Enter Your Name" required />
                            </div>
                            <div className="pt-modal-field">
                                <input type="text" name="phone" placeholder="Enter your Phone No." required />
                            </div>
                            <div className="pt-modal-field">
                                <input type="email" name="email" placeholder="Enter email" required />
                            </div>
                            <button type="submit" className="gm-primary-btn pt-modal-submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* ================= VIDEO MODAL ================= */}
            {showVideoModal && (
                <div className="pt-modal" onClick={closeVideoModal}>
                    <div className="pt-video-modal-inner" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="pt-modal-close pt-video-modal-close"
                            onClick={closeVideoModal}
                            aria-label="Close video"
                        >
                            <i className="fa fa-close"></i>
                        </button>
                        <div className="pt-video-frame">
                            <iframe
                                src="https://www.youtube.com/embed/e13TGGccvT4?autoplay=1"
                                title="How We Work"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Ambalapara;