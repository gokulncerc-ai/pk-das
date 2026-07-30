import React, { useState, useEffect } from "react";
import "./Thiruvilwamala.css";

// TODO: update these image paths to match your project's assets folder
import slide1Img from "../../../../assets/Images/slides/A22.png";
import slide2Img from "../../../../assets/images/slides/A11.jfif";
import aboutImg from "../../../../assets/images/slides/pathiripalaclinic.jpg";


const heroSlides = [
    {
        image: slide1Img,
        eyebrow: "Led By Passionate Experts",
        titleLine1: "A Medical Care",
        titleLine2: "You Can Always Trust!",
        description:
            "From diagnosis to recovery, our hospital offers a spectrum of expert services, ensuring personalized care at every step of your journey to wellness.",
        phone: "+91 488 4282141",
    },
    {
        image: slide2Img,
        eyebrow: "Led By Passionate Experts",
        titleLine1: "Committed To",
        titleLine2: "Trusted Health Care",
        description:
            "Comprehensive care, tailored to you. Discover our range of specialized services designed to meet your every healthcare need.",
        videoId: "e13TGGccvT4",
    },
];

const quickInfo = [
    {
        icon: "fa fa-user-md",
        title: "Qualified Doctors",
        text: "Highly qualified and vastly experienced medical professionals to attend to all your healthcare needs.",
    },
    {
        icon: "fa fa-clock-o",
        title: "Opens From 8am - 8pm",
        text: "Take advantage of our convenient and easily accessible working times.",
    },
    {
        icon: "fa fa-ambulance",
        title: "Emergency Aid",
        text: "We are fully prepared to provide the best assistance for any medical emergency.",
    },
];

const services = [
    { icon: "fa fa-user-md", title: "Outpatient Consultation" },
    { icon: "fa fa-child", title: "Daycare Services" },
    { icon: "fa fa-female", title: "Mother & Child Health Services" },
    { icon: "fa fa-medkit", title: "Immunisation Services" },
    { icon: "fa fa-user-plus", title: "Specialist Outpatient Consultation" },
    { icon: "fa fa-shield", title: "Family Welfare Services" },
    { icon: "fa fa-graduation-cap", title: "Health Education & Counselling" },
    { icon: "fa fa-heartbeat", title: "Adolescent Healthcare" },
    { icon: "fa fa-flask", title: "Basic Laboratory Services" },
    { icon: "fa fa-plus-square", title: "Pharmacy Services" },
];

const Thiruvilwamala = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showAppointmentModal, setShowAppointmentModal] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const openAppointmentModal = () => setShowAppointmentModal(true);
    const closeAppointmentModal = () => setShowAppointmentModal(false);

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        // TODO: wire this up to your appointment/mail endpoint (source used "mail2")
        closeAppointmentModal();
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        // TODO: wire this up to your contact_mail endpoint
    };

    return (
        <>
            {/* ===================== HERO SLIDER ===================== */}
            <section className="pt-hero">
                {heroSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`pt-hero-slide${idx === currentSlide ? " pt-hero-slide--active" : ""}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="pt-hero-overlay"></div>
                    </div>
                ))}

                <div className="container">
                    <div className="pt-hero-content">
                        <span className="gm-badge">{heroSlides[currentSlide].eyebrow}</span>
                        <h1>
                            {heroSlides[currentSlide].titleLine1}
                            <br />
                            {heroSlides[currentSlide].titleLine2}
                        </h1>
                        <p>{heroSlides[currentSlide].description}</p>

                        <div className="pt-hero-buttons">
                            {heroSlides[currentSlide].phone && (
                                <a href={`tel:${heroSlides[currentSlide].phone}`} className="gm-primary-btn">
                                    {heroSlides[currentSlide].phone}
                                </a>
                            )}
                            <button type="button" className="gm-secondary-btn" onClick={openAppointmentModal}>
                                Make An Appointment
                            </button>
                            {heroSlides[currentSlide].videoId && (
                                <button
                                    type="button"
                                    className="pt-hero-play"
                                    onClick={() => setActiveVideo(heroSlides[currentSlide].videoId)}
                                    aria-label="Play video"
                                >
                                    <i className="fa fa-play"></i>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="pt-hero-dots">
                    {heroSlides.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className={`pt-hero-dot${idx === currentSlide ? " pt-hero-dot--active" : ""}`}
                            onClick={() => setCurrentSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        ></button>
                    ))}
                </div>
            </section>

            {/* ===================== QUICK INFO ===================== */}
            <section className="gm-quick-info">
                <div className="container">
                    <div className="row g-4">
                        {quickInfo.map((info) => (
                            <div className="col-lg-4 col-sm-6" key={info.title}>
                                <div className="gm-info-card">
                                    <div className="gm-info-icon">
                                        <i className={info.icon}></i>
                                    </div>
                                    <h3>{info.title}</h3>
                                    <p>{info.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== ABOUT ===================== */}
            <section className="gm-about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <span className="gm-section-tag">Who We Are</span>
                            <h2 className="pt-about-title">
                                About Our Multi Speciality Clinic - Thiruvilwamala
                            </h2>
                            <p>
                                The Multi Speciality Clinic - Thiruvilwamala was established with the aim of
                                bringing international quality healthcare to every individual, thereby
                                improving the overall well-being of a community. Excellence in patient care
                                is achieved through high-quality and cost-effective healthcare services that
                                address daily healthcare needs of you and your loved ones.
                            </p>
                            <p>
                                As your health is our utmost priority, the leading multi-speciality clinic in
                                Thiruvilwamala offers a full suite of medical solutions including
                                consultations with specialists, effective diagnostics, health check-ups, and
                                pharmacy under one roof.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="gm-about-image pt-about-image">
                                <img
                                    className="img-fluid"
                                    src={aboutImg}
                                    alt="PK Das Multi Speciality Clinic - Thiruvilwamala"
                                />
                                <div className="pt-experience-badge">
                                    <i className="fa fa-hospital-o"></i>
                                    <div>
                                        <h4>35+</h4>
                                        <span>Years Of Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== SERVICES ===================== */}
            <section id="services" className="gm-features">
                <div className="container">
                    <div className="gm-section-heading">
                        <span>Our Services</span>
                        <h2>Special High-quality Services</h2>
                    </div>

                    <div className="row g-4">
                        {services.map((service) => (
                            <div className="col-lg-3 col-sm-6" key={service.title}>
                                <button
                                    type="button"
                                    className="pt-service-card"
                                    onClick={openAppointmentModal}
                                >
                                    <span className="pt-service-icon">
                                        <i className={service.icon}></i>
                                    </span>
                                    <span className="pt-service-title">{service.title}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== CONTACT ===================== */}
            <section className="pt-contact">
                <div className="container">
                    <div className="row g-0 pt-contact-wrapper">
                        <div className="col-lg-5">
                            <div className="pt-contact-info">
                                <h3>Connect With Us</h3>

                                <div className="pt-contact-item">
                                    <span className="pt-contact-icon">
                                        <i className="fa fa-map-marker"></i>
                                    </span>
                                    <div>
                                        <h5>PK Das Multi Specialty Clinic</h5>
                                        <p>Near Bus stand, Thiruvilwamala, Thrissur</p>
                                    </div>
                                </div>

                                <div className="pt-contact-item">
                                    <span className="pt-contact-icon">
                                        <i className="fa fa-envelope-o"></i>
                                    </span>
                                    <div>
                                        <h5>info@pkdashospital.com</h5>
                                        <p>Need support? Drop us an email</p>
                                    </div>
                                </div>

                                <div className="pt-contact-item">
                                    <span className="pt-contact-icon">
                                        <i className="fa fa-phone"></i>
                                    </span>
                                    <div>
                                        <h5>04884 282141, 0488 4282141</h5>
                                        <p>Have a question? Call us now</p>
                                    </div>
                                </div>

                                <div className="pt-contact-item">
                                    <span className="pt-contact-icon">
                                        <i className="fa fa-clock-o"></i>
                                    </span>
                                    <div>
                                        <h5>Mon – Sat 07:00 – 21:00</h5>
                                        <p>We are open on</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="pt-contact-form-wrapper">
                                <span className="gm-section-tag">What We Do</span>
                                <h2>Make An Appointment</h2>

                                <form className="pt-contact-form" onSubmit={handleContactSubmit}>
                                    <label>
                                        <i className="fa fa-user"></i>
                                        <input type="text" name="your-name" placeholder="Your Name" required />
                                    </label>
                                    <label>
                                        <i className="fa fa-mobile"></i>
                                        <input type="text" name="your-phone" placeholder="Cell Phone" required />
                                    </label>
                                    <label>
                                        <i className="fa fa-envelope-o"></i>
                                        <input type="email" name="email" placeholder="Email" required />
                                    </label>
                                    <label className="pt-contact-form-textarea">
                                        <i className="fa fa-comment-o"></i>
                                        <textarea name="message" rows={3} placeholder="Message" required></textarea>
                                    </label>
                                    <button type="submit" className="gm-primary-btn">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31354.970392703253!2d76.326977!3d10.782848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c723734a47875b4!2sPK%20DAS%20Institute%20of%20Medical%20Sciences%20-%20Hospital%20and%20Medical%20College!5e0!3m2!1sen!2sin!4v1602675560911!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="PK Das Multi Speciality Clinic - Thiruvilwamala location"
                    ></iframe>
                </div>
            </section>

            {/* ===================== APPOINTMENT MODAL ===================== */}
            {showAppointmentModal && (
                <div className="pt-modal" onClick={closeAppointmentModal}>
                    <div className="pt-modal-inner" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="pt-modal-close"
                            onClick={closeAppointmentModal}
                            aria-label="Close"
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

            {/* ===================== VIDEO LIGHTBOX ===================== */}
            {activeVideo && (
                <div className="pt-modal pt-video-modal" onClick={() => setActiveVideo(null)}>
                    <div className="pt-video-modal-inner" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="pt-modal-close pt-video-modal-close"
                            onClick={() => setActiveVideo(null)}
                            aria-label="Close video"
                        >
                            <i className="fa fa-close"></i>
                        </button>
                        <div className="pt-video-frame">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                                title="Thiruvilwamala clinic video"
                                frameBorder="0"
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

export default Thiruvilwamala;