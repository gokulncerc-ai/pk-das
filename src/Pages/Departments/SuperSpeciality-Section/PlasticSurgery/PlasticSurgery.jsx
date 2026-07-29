import React from "react";
import { Link } from "react-router-dom";
import "./PlasticSurgery.css";

import heroBg from "../../../../assets/Images/Plastic/hero-bg.avif";
import aboutImg from "../../../../assets/Images/Plastic/plas.jpg";
import doctorImg from "../../../../assets/Images/Plastic/team-img.avif";

const quickInfo = [
    {
        icon: "fa fa-hand-holding-medical",
        title: "Hand & Microsurgery",
        text: "Specialized care for hand, upper limb and microvascular reconstruction.",
    },
    {
        icon: "fa fa-user-md",
        title: "Expert Surgeons",
        text: "Skilled plastic surgery specialists dedicated to precision and excellence.",
    },
    {
        icon: "fa fa-heartbeat",
        title: "Cosmetic & Aesthetic",
        text: "Advanced cosmetic and reconstructive procedures tailored to you.",
    },
    {
        icon: "fa fa-shield-alt",
        title: "Trauma & Burn Care",
        text: "Comprehensive reconstructive care for trauma and burn injuries.",
    },
];

const aboutHighlights = [
    { icon: "fa fa-check-circle", text: "Craniofacial Surgery" },
    { icon: "fa fa-check-circle", text: "Microvascular Surgery" },
    { icon: "fa fa-check-circle", text: "Hand Reconstructive Surgery" },
    { icon: "fa fa-check-circle", text: "Aesthetic & Cosmetic Procedures" },
];

const serviceGroups = [
    {
        title: "Hand & Upper Extremity Surgery",
        description: "Comprehensive surgical care for hand and upper limb conditions.",
        items: [
            "Surgery of the hand and upper extremity",
            "Upper limb tendon repair",
            "Upper limb nerve and artery repair",
            "ORIF hand fracture",
            "Carpal tunnel release",
            "Dupuytren’s contracture",
            "Congenital abnormalities of the hand and upper extremity",
            "Syndactyly and polydactyly correction",
            "Arteriovenous Fistula",
        ],
    },
    {
        title: "Reconstructive Microsurgery",
        description: "Advanced microsurgical techniques for complex reconstruction.",
        items: [
            "Reconstructive microsurgery",
            "Microvascular flaps and grafts",
            "Replantation and revascularization of the upper and lower extremities and digits",
            "Reconstruction of peripheral nerve injuries",
            "Flap for lower limb trauma",
            "Free flap for head and neck reconstruction",
            "Soft tissue tumors",
        ],
    },
    {
        title: "Cosmetic & Aesthetic Surgery",
        description: "Personalized aesthetic procedures for a confident you.",
        items: [
            "Cosmetic surgeries",
            "Liposuction",
            "Body contouring",
            "Facial contouring",
            "Breast augmentation",
            "Breast lift (mastopexy)",
            "Cosmetic rhinoplasty",
            "Breast reconstruction",
            "Breast reduction",
            "Fat grafting",
            "Prominent ear correction",
            "Hair transplantation",
        ],
    },
    {
        title: "Trauma, Burn & Wound Care",
        description: "Restorative care for trauma, burns and chronic wounds.",
        items: [
            "Trauma and reconstructive Surgeries",
            "Maxillo Facila Injuries",
            "Burn Reconstructive Surgeries",
            "Diabetic Wound Management",
            "Scar revision and contracture release",
            "Mechanical dermabrasion",
            "Resurfacing",
            "Abdominoplasty",
        ],
    },
];

const whyChooseUs = [
    "State-of-the-art microsurgical technology",
    "Multidisciplinary team approach",
    "Personalized treatment plans for every patient",
    "Comprehensive pre & post-operative care",
];

const specialists = [
    {
        name: "Dr.Veena Unni",
        position: "Plastic Surgery Specialist",
        // TODO: replace with the doctor's actual years of experience
        experience: "Consultant",
        image: doctorImg,
        link: "/doctor/veena-unni",
        bio: "Dedicated to restoring form, function and confidence through precise, patient-centered plastic surgery care.",
    },
];

const PlasticSurgery = () => {
    return (
        <>
            {/* ===================== HERO ===================== */}
            <section className="gm-hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="gm-overlay"></div>
                <div className="container">
                    <div className="gm-hero-content">
                        <nav aria-label="breadcrumb" className="gm-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/speciality-departments">Speciality Departments</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Plastic Surgery
                                </li>
                            </ol>
                        </nav>

                        <span className="gm-badge">
                            <i className="fa fa-plus-circle me-2"></i>&nbsp;Speciality Department
                        </span>

                        <h1>Plastic Surgery</h1>
                        <p>
                            A plastic surgeon’s task is to restore form, function and appearance of any
                            individual. At PKDIMS, we pride ourselves on being the best in the field of
                            plastic surgery, offering a comprehensive range of services tailored to the
                            unique needs and goals of each patient.
                        </p>

                        <div className="gm-hero-buttons">
                            <Link to="/appointment" className="gm-primary-btn">
                                Book Appointment
                            </Link>
                            <Link to="/contact-us" className="gm-secondary-btn">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== QUICK INFO ===================== */}
            <section className="gm-quick-info">
                <div className="container">
                    <div className="row g-4">
                        {quickInfo.map((info) => (
                            <div className="col-lg-3 col-sm-6" key={info.title}>
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
                            <div className="gm-about-image">
                                <img src={aboutImg} alt="Plastic Surgery at PKDIMS" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About The Department</span>
                                <h2>Restoring Form, Function &amp; Confidence</h2>
                                <p>
                                    Our team of expert doctors and surgeons is dedicated to providing the
                                    highest quality care and achieving exceptional results for our patients.
                                    With a focus on innovation, precision, and patient satisfaction, we offer
                                    everything from craniofacial surgery to microvascular surgery, hand
                                    reconstructive surgery, pediatric plastic surgery, and aesthetic and
                                    cosmetic procedures.
                                </p>

                                <div className="gm-about-highlight">
                                    <p>
                                        Cutting-edge technology that has garnered the trust and confidence of
                                        countless individuals seeking top-notch care.
                                    </p>
                                </div>

                                <div className="gm-highlights">
                                    {aboutHighlights.map((item) => (
                                        <div className="gm-highlight-item" key={item.text}>
                                            <i className={item.icon}></i>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== SERVICES ===================== */}
            <section className="gm-features">
                <div className="container">
                    <div className="gm-section-heading">
                        <span>What We Offer</span>
                        <h2>The Services We Provide</h2>
                        <p>
                            A comprehensive range of plastic surgery services designed around each
                            patient's unique needs — from reconstructive to cosmetic care.
                        </p>
                    </div>

                    <div className="row g-4">
                        {serviceGroups.map((group) => (
                            <div className="col-lg-6" key={group.title}>
                                <div className="gm-list-card">
                                    <h4>{group.title}</h4>
                                    <p>{group.description}</p>
                                    <ul className="gm-check-list">
                                        {group.items.map((item) => (
                                            <li key={item}>
                                                <i className="fa fa-check-circle"></i>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== WHY CHOOSE US ===================== */}
            <section className="gm-about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="gm-facilities-heading">Why Choose Our Plastic Surgery Department</h2>
                            <p className="gm-facilities-text">
                                From complex microsurgical reconstruction to aesthetic procedures, our
                                multidisciplinary team combines advanced technology with compassionate,
                                patient-first care at every step of the treatment journey.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <ul className="gm-check-list gm-check-list-compact">
                                {whyChooseUs.map((point) => (
                                    <li key={point}>
                                        <i className="fa fa-check-circle"></i>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== SPECIALISTS ===================== */}
            <section className="gm-specialists">
                <div className="container">
                    <div className="gm-section-heading">
                        <span>Meet The Expert</span>
                        <h2>Our Plastic Surgery Specialist</h2>
                        <p>Trusted specialists committed to precise, compassionate surgical care.</p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {specialists.map((doctor) => (
                            <div className="col-lg-4 col-md-6" key={doctor.name}>
                                <div className="gm-doctor-card">
                                    <div className="gm-doctor-image">
                                        <img src={doctor.image} alt={doctor.name} />
                                        <span className="gm-experience">{doctor.experience}</span>
                                    </div>
                                    <div className="gm-doctor-content">
                                        <span className="gm-doctor-designation">{doctor.position}</span>
                                        <h3>
                                            <Link to={doctor.link}>{doctor.name}</Link>
                                        </h3>
                                        <p>{doctor.bio}</p>
                                        <div className="gm-doctor-buttons">
                                            <Link to={doctor.link} className="gm-primary-btn">
                                                View Profile
                                            </Link>
                                            <Link to="/appointment" className="gm-outline-btn">
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== CTA ===================== */}
            <section className="gm-cta">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="gm-cta-content">
                                <span className="gm-section-tag">Get Started</span>
                                <h2>Ready to Begin Your Transformation?</h2>
                                <p>
                                    Schedule a consultation with our plastic surgery specialists and take
                                    the first step toward restoring form, function and confidence.
                                </p>
                                <div className="gm-cta-buttons">
                                    <Link to="/appointment" className="gm-primary-btn">
                                        Book Appointment
                                    </Link>
                                    <a href="tel:+917510883999" className="gm-outline-btn">
                                        Call Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gm-cta-box">
                                <div className="gm-cta-icon">
                                    <i className="fa fa-calendar-check"></i>
                                </div>
                                <h3>Book Your Consultation</h3>
                                <p>
                                    Our care team will help you find the right specialist and the earliest
                                    available appointment.
                                </p>
                                <div className="gm-cta-features">
                                    <div>
                                        <i className="fa fa-check-circle"></i>
                                        <span>Expert Consultation</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-check-circle"></i>
                                        <span>Flexible Scheduling</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-check-circle"></i>
                                        <span>Comprehensive Care</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlasticSurgery;