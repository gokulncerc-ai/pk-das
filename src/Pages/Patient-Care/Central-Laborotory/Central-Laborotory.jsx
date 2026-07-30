import React from "react";
import { Link } from "react-router-dom";
import "./Central-Laborotory.css";

// TODO: update these image paths to match your project's assets folder
import aboutImg from "../../../assets/images/central-lab/1.jpg";
import biochemistryImg from "../../../assets/images/central-lab/1.jpg";
import pathologyImg from "../../../assets/images/central-lab/2.jpg";
import microbiologyImg from "../../../assets/images/central-lab/3.jpg";
import hematologyImg from "../../../assets/images/central-lab/4.jpg";
import clinicalPathologyImg from "../../../assets/images/central-lab/5.jpg";
import exfoliativeCytologyImg from "../../../assets/images/central-lab/6.jpg";
import histoPathologyImg from "../../../assets/images/central-lab/7.jpg";
import serologyImg from "../../../assets/images/central-lab/9.jpg";
import immunologyImg from "../../../assets/images/central-lab/10.jpg";
import molecularLabImg from "../../../assets/images/central-lab/11.jpg";

const quickInfo = [
    {
        icon: "fa fa-users",
        title: "28+ Expert Staff",
        text: "A qualified team working round the clock across every laboratory specialty.",
    },
    {
        icon: "fa fa-flask",
        title: "2000+ Annual Cases",
        text: "Histopathology specimens analyzed with accuracy every year.",
    },
    {
        icon: "fa fa-certificate",
        title: "NABH Standards",
        text: "Internal quality control maintained as per NABH guidelines.",
    },
    {
        icon: "fa fa-clock-o",
        title: "Round-the-Clock Care",
        text: "Comprehensive diagnostic services delivered 24 hours a day.",
    },
];

const labServices = [
    {
        title: "Biochemistry",
        image: biochemistryImg,
        type: "paragraph",
        content:
            "Biochemistry is the branch of science concerned with the application of chemistry to the study of biological processes at the cellular and molecular levels.",
        link: "/biochemistry",
    },
    {
        title: "Pathology",
        image: pathologyImg,
        type: "paragraph",
        content:
            "Department of pathology has a state of art service laboratory which has separate service areas for histopathology, cytopathology, hematology and clinical pathology.",
        link: "/pathology",
        reverse: true,
    },
    {
        title: "Microbiology",
        image: microbiologyImg,
        type: "paragraph",
        content:
            "The Microbiology department actively involves in teaching and clinical diagnostic services to the tertiary care hospitals and adjoining health care facilities in this area.",
        link: "/microbiology",
    },
    {
        title: "Hematology",
        image: hematologyImg,
        type: "list",
        content: [
            "Complete blood cells count.",
            "Reticulocyte count.",
            "Peripheral smear study.",
            "Bone marrow smear study.",
        ],
        reverse: true,
    },
    {
        title: "Clinical Pathology",
        image: clinicalPathologyImg,
        type: "paragraph",
        content: "Urine complete analysis enable early detection of kidney disease and UTI.",
        link: "/clinical-pathology",
    },
    {
        title: "Exfoliative Cytology",
        image: exfoliativeCytologyImg,
        type: "paragraph",
        content:
            "Examination of cervical smears (Pap smear) for screening, diagnosis of cases as well as inflammatory condition.",
        link: "/exfoliative-cytology",
        reverse: true,
    },
    {
        title: "Histo Pathology",
        image: histoPathologyImg,
        type: "list",
        content: [
            "Diagnosis of disease provided from tissue biopsy and specimens.",
            "Surgical oncology specimen reporting with TNM classification, staging and grading as per AJCC guidelines.",
        ],
    },
    {
        title: "Serology",
        image: serologyImg,
        type: "paragraph",
        content:
            "We are performing serological tests like ASO, CRP, Rheumatoid factor (RA factor). Rapid card tests are also being performed for HIV, HBsAg, HCV, Leptospirosis, Dengue, Syphilis and Malaria.",
        reverse: true,
    },
    {
        title: "Immunology",
        image: immunologyImg,
        type: "paragraph",
        content:
            "Immunology is a branch of biomedical science which deals with the physiological functioning of the immune system in states of both health and disease as well as malfunctions.",
        link: "/immunology",
    },
    {
        title: "Molecular Lab",
        image: molecularLabImg,
        type: "paragraph",
        content:
            "A well equipped modern molecular lab where RT-PCR testing is performed. We provide 24 hrs of service with well trained technicians working under the supervision of doctors.",
        link: "/molecular-lab",
        reverse: true,
    },
];

const CentralLaborotory = () => {
    return (
        <>
            {/* ===================== HERO ===================== */}
            <section className="gm-hero gm-hero--compact">
                <div className="gm-overlay"></div>
                <div className="container">
                    <div className="gm-hero-content">
                        <nav aria-label="breadcrumb" className="gm-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Central Laboratory
                                </li>
                            </ol>
                        </nav>

                        <span className="gm-badge">
                            <i className="fa fa-plus-circle me-2"></i>&nbsp;Patient Care
                        </span>

                        <h1>Central Laboratory</h1>
                        <p>
                            A centralised laboratory managed by a qualified team of specialists, delivering
                            comprehensive diagnostic care across Clinical Laboratory, Biochemistry,
                            Microbiology and Pathology.
                        </p>
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
                                <img className="img-fluid" src={aboutImg} alt="Central Laboratory at PKDAS Hospital" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gm-about-content">
                                <span className="gm-section-tag">About The Department</span>
                                <h2>Comprehensive Laboratory Diagnostics</h2>
                                <p>
                                    Our team of experts is meticulously trained in their respective fields,
                                    including Clinical Laboratory, Biochemistry, Microbiology, and Pathology.
                                    They possess a deep understanding of the latest advancements and
                                    techniques, enabling them to deliver accurate and reliable results.
                                </p>
                                <p>
                                    Our fully equipped Department of Pathology serves as a comprehensive
                                    diagnostic hub, meticulously analysing a wide range of samples to provide
                                    accurate and timely results. Our highly trained pathologists and
                                    laboratory technicians are proficient in examining blood, urine, and
                                    various body fluids, including cerebrospinal fluid (CSF), ascetic fluid,
                                    synovial fluid, pleural fluid, and sputum.
                                </p>

                                <div className="gm-about-highlight">
                                    <p>
                                        The technicians are excellent, well trained for immediate processing of
                                        samples with accurate, error-free and quick diagnosis — leading to
                                        prompt treatment and short hospital stay.
                                    </p>
                                </div>

                                <p>
                                    We foster a collaborative relationship with other departments within the
                                    hospital, contributing our expertise to the development of optimal
                                    treatment plans through advanced technologies and highly trained staff.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== SERVICES ===================== */}
            <section className="gm-features gm-lab-services">
                <div className="container">
                    <div className="gm-section-heading">
                        <span>What We Offer</span>
                        <h2>Services Provided</h2>
                        <p>
                            A dedicated range of laboratory diagnostic services backed by experienced
                            specialists and modern equipment.
                        </p>
                    </div>

                    <div className="gm-lab-list-wrapper">
                        {labServices.map((service) => (
                            <div
                                className={`gm-lab-item${service.reverse ? " gm-lab-item--reverse" : ""}`}
                                key={service.title}
                            >
                                <div className="gm-lab-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="gm-lab-content">
                                    <h3>{service.title}</h3>

                                    {service.type === "paragraph" ? (
                                        <p>{service.content}</p>
                                    ) : (
                                        <ul className="gm-check-list">
                                            {service.content.map((point) => (
                                                <li key={point}>
                                                    <i className="fa fa-check-circle"></i>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

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
                                <h2>Need a Lab Test Done?</h2>
                                <p>
                                    Book a diagnostic test with our Central Laboratory and get accurate,
                                    timely results from our expert team.
                                </p>
                                <div className="gm-cta-buttons">
                                    <Link to="/appointment" className="gm-primary-btn">
                                        Book a Test
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
                                    <i className="fa fa-flask"></i>
                                </div>
                                <h3>Accurate. Reliable. Timely.</h3>
                                <p>
                                    Our laboratory team works round the clock to deliver dependable
                                    diagnostic results for every patient.
                                </p>
                                <div className="gm-cta-features">
                                    <div>
                                        <i className="fa fa-check-circle"></i>
                                        <span>NABH Quality Standards</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-check-circle"></i>
                                        <span>Expert Pathology Team</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-check-circle"></i>
                                        <span>24x7 Diagnostic Services</span>
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

export default CentralLaborotory;