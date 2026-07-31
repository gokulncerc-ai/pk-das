import React from "react";
import { Link } from "react-router-dom";
import "./VascularSurgery.css";

// TODO: update these image paths to match your project's assets folder
import heroBg from "../../../../assets/images/vascular/hero-bg.avif";
import aboutImg from "../../../../assets/Images/vascular/vascular-care.webp";
import doctorImg from "../../../../assets/images/vascular/dr-simna-c.webp";

const quickInfo = [
    {
        icon: "fa fa-ambulance",
        title: "Emergency Vascular Care",
        text: "Immediate evaluation and treatment for life- and limb-threatening vascular emergencies.",
    },
    {
        icon: "fa fa-heartbeat",
        title: "Acute Limb Ischemia Management",
        text: "Rapid restoration of blood circulation to prevent tissue damage and limb loss.",
    },
    {
        icon: "fa fa-user-md",
        title: "Vascular Trauma Care",
        text: "Specialized management of vascular injuries caused by accidents, trauma, or emergencies.",
    },
];

const aboutHighlights = [
    { icon: "fa fa-heartbeat", text: "Arterial Procedures" },
    { icon: "fa fa-tint", text: "Venous Procedures" },
    { icon: "fa fa-medkit", text: "Dialysis Access Procedures" },
    { icon: "fa fa-search-plus", text: "Diagnostic Services" },
];

const serviceGroups = [
    {
        title: "Arterial Procedures",
        description:
            "These advanced procedures help restore blood flow and improve circulation in blocked or narrowed arteries.",
        items: [
            "Peripheral Arterial Bypass Surgery",
            "Endarterectomy & Patch Angioplasty",
            "Peripheral Angiography",
            "Peripheral Angioplasty & Stenting",
            "Thrombolysis",
            "Embolectomy / Thrombectomy",
        ],
    },
    {
        title: "Venous Procedures",
        description: "Comprehensive care for venous disorders and circulation issues.",
        items: [
            "Varicose Vein Management",
            "Chronic venous Insufficiency Treatment",
            "Deep Vein Thrombosis (DVT) Care",
            "Venous Ulcer Management",
        ],
    },
    {
        title: "Dialysis Access Procedures",
        description:
            "Specialized vascular access procedures for dialysis patients, including advanced diagnosis and treatment for abnormal vascular connections and malformations.",
        items: [
            "AV Fistula Creation",
            "AV Graft Procedures",
            "Dialysis Access Maintenance & Revision",
            "Arteriovenous Malformation (AVM) Management",
        ],
    },
    {
        title: "Diagnostic Services",
        description:
            "Comprehensive vascular diagnostic facilities for accurate assessment and evaluation.",
        items: [
            "Doppler Ultrasound",
            "Peripheral Vascular Assessment",
            "CT Angiography",
            "Vascular Screening & Evaluation",
            "Digital Vascular Imaging",
        ],
    },
];

const conditionsWeTreat = [
    "Peripheral Arterial Disease (PAD)",
    "Diabetic Foot & Non-Healing Ulcers",
    "Varicose Veins",
    "Deep Vein Thrombosis (DVT)",
    "Carotid Artery Disease",
    "Aneurysms",
    "Vascular Trauma",
    "Acute Limb Ischemia",
    "Vascular access procedures",
];

const whyChooseUs = [
    "Advanced Endovascular & Surgical Expertise",
    "Emergency Limb Salvage Services",
    "Modern Cath Lab & Surgical Facilities",
    "Minimally Invasive Treatment Options",
    "Comprehensive Diabetic Foot Care",
    "Experienced Multidisciplinary Team",
    "Patient-focused Rehabilitation & Follow-up Care",
];

const specialists = [
    {
        name: "Dr. Simna C",
        qualification: "MS, MCh",
        position: "Consultant Vascular Surgeon",
        image: doctorImg,
        link: "/doctor/simna-c",
        bio: "Focused on advanced endovascular and surgical care for arterial, venous and vascular access conditions.",
    },
];

const VascularSurgery = () => {
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
                                    Vascular Surgery
                                </li>
                            </ol>
                        </nav>

                        <span className="gm-badge">
                            <i className="fa fa-plus-circle me-2"></i>&nbsp;Speciality Department
                        </span>

                        <h1>Vascular Surgery</h1>
                        <p>
                            PKDAS Hospital offers comprehensive vascular and endovascular services for the
                            diagnosis and treatment of diseases affecting arteries, veins, and circulation
                            using advanced surgical and minimally invasive techniques.
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
                    <div className="row g-4 justify-content-center">
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
                            <div className="gm-about-image">
                                <img src={aboutImg} alt="Advanced Vascular Surgery at PKDAS Hospital" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About The Department</span>
                                <h2>Advanced Vascular Surgery Care</h2>
                                <p>
                                    PKDAS Hospital offers comprehensive vascular and endovascular services for
                                    the diagnosis and treatment of diseases affecting arteries, veins, and
                                    circulation using advanced surgical and minimally invasive techniques.
                                </p>

                                <div className="gm-about-highlight">
                                    <p>
                                        From emergency limb salvage to planned reconstructive procedures, our team
                                        is equipped to manage the full spectrum of vascular conditions.
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
                        <h2>Vascular Surgery Services</h2>
                        <p>
                            A full range of arterial, venous, dialysis access and diagnostic services for
                            every stage of vascular care.
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
                        <p>Trusted diagnosis and management for a wide range of vascular conditions.</p>
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
                            A dedicated vascular care program built on expertise, technology and
                            patient-centered follow-up.
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
                        <h2>Our Vascular Care Specialist</h2>
                        <p>Trusted specialists committed to precise, compassionate vascular care.</p>
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
                                <h2>Need Vascular Care?</h2>
                                <p>
                                    From emergency vascular care to planned procedures, our specialists are
                                    ready to help restore healthy circulation.
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

export default VascularSurgery;