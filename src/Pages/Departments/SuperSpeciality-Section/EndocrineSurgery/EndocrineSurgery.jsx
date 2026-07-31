import React from "react";
import { Link } from "react-router-dom";
import "./EndocrineSurgery.css";

// TODO: update these image paths to match your project's assets folder
import heroBg from "../../../../assets/Images/endocrine-surgery/hero-bg.webp";
import aboutImg from "../../../../assets/Images/endocrine-surgery/Breast_endocrine_surgery_care.avif";
import doctorImg from "../../../../assets/Images/endocrine-surgery/dr_shradha_srinivas.webp";

const quickInfo = [
    {
        icon: "fa fa-female",
        title: "Breast Care",
        text: "Expert evaluation, diagnosis and surgical treatment for breast conditions.",
    },
    {
        icon: "fa fa-stethoscope",
        title: "Thyroid Surgery",
        text: "Comprehensive care for thyroid swelling, nodules and thyroid cancer.",
    },
    {
        icon: "fa fa-heartbeat",
        title: "Parathyroid & Adrenal Care",
        text: "Specialized diagnosis and surgery for parathyroid and adrenal disorders.",
    },
    {
        icon: "fa fa-search-plus",
        title: "Advanced Diagnostics",
        text: "Accurate imaging, hormonal and biopsy evaluation for precise diagnosis.",
    },
];

const aboutHighlights = [
    { icon: "fa fa-check-circle", text: "Breast Surgery" },
    { icon: "fa fa-check-circle", text: "Thyroid Surgery" },
    { icon: "fa fa-check-circle", text: "Parathyroid & Adrenal Surgery" },
    { icon: "fa fa-check-circle", text: "Cancer Evaluation & Management" },
];

const serviceGroups = [
    {
        title: "Breast Care Services",
        description:
            "Comprehensive evaluation, diagnosis and surgical treatment for breast conditions.",
        items: [
            "Breast lump evaluation and management",
            "Breast pain assessment and treatment",
            "Breast cancer diagnosis and surgical treatment",
            "Benign breast disease management",
            "Breast infection and abscess treatment",
            "Breast screening and evaluation",
            "Breast cancer treatment including breast conservation surgery, sentinel lymph node biopsy, axillary lymph node dissection and oncoplastic procedures",
        ],
    },
    {
        title: "Thyroid Disorders & Thyroid Surgery",
        description: "Complete diagnosis and surgical management of thyroid conditions.",
        items: [
            "Thyroid swelling (goitre) evaluation",
            "Thyroid nodule assessment",
            "Hyperthyroidism & hypothyroidism management",
            "Thyroid cancer surgery",
            "Neck dissection",
            "Retrosternal goitre surgeries",
            "Reoperative thyroid surgeries",
        ],
    },
    {
        title: "Parathyroid & Adrenal Disorders",
        description: "Specialized care for parathyroid and adrenal gland conditions.",
        items: ["Parathyroid Gland Disorders", "Adrenal Gland Disorders & Surgery"],
    },
    {
        title: "Diagnostic Services",
        description: "Advanced diagnostic facilities for accurate breast and endocrine evaluation.",
        items: [
            "Ultrasound Evaluation",
            "FNAC / Biopsy Procedures",
            "Hormonal Evaluation",
            "Thyroid Function Testing",
            "Imaging & Cancer Screening",
        ],
    },
];

const conditionsWeTreat = [
    "Breast Lump",
    "Breast Pain & Infection",
    "Thyroid Swelling (Goitre)",
    "Thyroid Nodules",
    "Thyroid Cancer",
    "Hyperthyroidism / Hypothyroidism",
    "Parathyroid Disorders",
    "Adrenal Gland Diseases",
];

const whyChooseUs = [
    "Specialized Breast & Endocrine Surgical Care",
    "Advanced Diagnostic & Surgical Facilities",
    "Minimally Invasive Treatment Options",
    "Personalized Patient Care",
    "Experienced Multidisciplinary Team",
    "Comprehensive Cancer Evaluation & Management",
    "Diagnostic Services",
];

const specialists = [
    {
        name: "Dr. Shradha Srinivas",
        qualification: "MS, MCh",
        position: "Consultant Breast & Endocrine Surgeon",
        image: doctorImg,
        link: "/doctor/shradha-srinivas",
        bio: "Dedicated to precise, patient-centered diagnosis and surgical care for breast and endocrine conditions.",
    },
];

const EndocrineSurgery = () => {
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
                                    Endocrine Surgery
                                </li>
                            </ol>
                        </nav>

                        <span className="gm-badge">
                            <i className="fa fa-plus-circle me-2"></i>&nbsp;Speciality Department
                        </span>

                        <h1>Endocrine Surgery</h1>
                        <p>
                            PKDAS Hospital offers specialized Breast & Endocrine Surgery Services with
                            expert diagnosis, evaluation, and advanced surgical treatment for disorders
                            related to the thyroid, parathyroid, adrenal glands, and breast diseases.
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
                                <img src={aboutImg} alt="Advanced Breast & Endocrine Surgery at PKDAS Hospital" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About The Department</span>
                                <h2>Advanced Breast &amp; Endocrine Surgery</h2>
                                <p>
                                    Our department focuses on accurate diagnosis, minimally invasive surgical
                                    techniques, personalized treatment, and comprehensive patient care for
                                    conditions affecting the thyroid, parathyroid, adrenal glands, and breast.
                                </p>

                                <div className="gm-about-highlight">
                                    <p>
                                        From routine screening to complex cancer surgery, our team manages the
                                        full spectrum of breast and endocrine conditions.
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
                        <h2>Services Offered</h2>
                        <p>
                            Complete evaluation, diagnosis and surgical care across breast, thyroid,
                            parathyroid and adrenal conditions.
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

            {/* ===================== CONDITIONS WE TREAT ===================== */}
            <section className="gm-features">
                <div className="container">
                    <div className="gm-section-heading">
                        <span>Conditions</span>
                        <h2>Conditions We Treat</h2>
                        <p>Trusted diagnosis and management for a wide range of breast and endocrine conditions.</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-12">
                            <div className="gm-list-card">
                                <ul className="gm-check-list gm-check-grid">
                                    {conditionsWeTreat.map((condition) => (
                                        <li key={condition}>
                                            <i className="fa fa-check-circle"></i>
                                            <span>{condition}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== WHY CHOOSE US ===================== */}
            <section className="gm-features">
                <div className="container">
                    <div className="gm-section-heading">
                        <span>Why PKDAS</span>
                        <h2>Why Choose PKDAS Hospital?</h2>
                        <p>
                            A dedicated breast and endocrine care program built on expertise, technology
                            and personalized attention.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-12">
                            <div className="gm-list-card">
                                <ul className="gm-check-list gm-check-grid">
                                    {whyChooseUs.map((reason) => (
                                        <li key={reason}>
                                            <i className="fa fa-check-circle"></i>
                                            <span>{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== SPECIALISTS ===================== */}
            <section className="gm-specialists">
                <div className="container">
                    <div className="gm-section-heading">
                        <span>Meet The Expert</span>
                        <h2>Our Endocrine Surgery Specialist</h2>
                        <p>Trusted specialists committed to precise, compassionate surgical care.</p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {specialists.map((doctor) => (
                            <div className="col-lg-4 col-md-6" key={doctor.name}>
                                <div className="gm-doctor-card">
                                    <div className="gm-doctor-image">
                                        <img src={doctor.image} alt={doctor.name} />
                                    </div>
                                    <div className="gm-doctor-content">
                                        <span className="gm-doctor-designation">{doctor.position}</span>
                                        <h3>
                                            <Link to={doctor.link}>{doctor.name}</Link>
                                        </h3>
                                        <div className="gm-doctor-qualification">{doctor.qualification}</div>
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
                                <h2>Need Breast or Endocrine Care?</h2>
                                <p>
                                    Schedule a consultation with our breast and endocrine surgery specialists
                                    for accurate diagnosis and personalized treatment.
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

export default EndocrineSurgery;
