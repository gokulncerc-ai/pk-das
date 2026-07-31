import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DoctorsDirectory.css";
import Header from "../../../Components/Header/Header";

// TODO: replace with actual doctor photos
import doctorPlaceholder from "../../../assets/Images/doctors/dr_shradha_srinivas.webp";
import Arjun from "../../../assets/Images/doctors/Arjun.avif";
import drMohammedAsharfKT from "../../../assets/Images/doctors/drMohammedAsharfKT.jpeg";
import drNarasimhaluOmdasBhandari from "../../../assets/Images/doctors/drNarasimhaluOmdasBhandari.jpeg";
import Divya from "../../../assets/Images/doctors/Divya.webp";
import drSuhasP from "../../../assets/Images/doctors/drSuhasP.jpeg";
import Anjali from "../../../assets/Images/doctors/Anjali.avif";
import Simna from "../../../assets/Images/doctors/Simna.webp";
import Shradha from "../../../assets/Images/doctors/Shradha.webp";
import Lakshmi from "../../../assets/Images/doctors/Lakshmi.webp";

const doctors = [
    { name: "Dr. Arjun Menon", department: "Cardiology", img: Arjun, link: "/doctor/arjun-menon" },
    { name: "Dr. Priya Nair", department: "Neurology", img: doctorPlaceholder, link: "/doctor/priya-nair" },
    { name: "Dr. Sanjay Kumar", department: "Nephrology", img: Arjun, link: "/doctor/sanjay-kumar" },
    { name: "Dr. Meera Pillai", department: "Neuro Surgery", img: Anjali, link: "/doctor/meera-pillai" },
    { name: "Dr. Ravi Varma", department: "Urology", img: drSuhasP, link: "/doctor/ravi-varma" },
    { name: "Dr. Anjali Krishnan", department: "Gastroenterology", img: Anjali, link: "/doctor/anjali-krishnan" },
    { name: "Dr. Vishnu Prasad", department: "Oncology", img: drMohammedAsharfKT, link: "/doctor/vishnu-prasad" },
    { name: "Dr. Divya Suresh", department: "Neonatology", img: Divya, link: "/doctor/divya-suresh" },
    { name: "Dr. Kiran Raj", department: "Spine Surgery", img: drNarasimhaluOmdasBhandari, link: "/doctor/kiran-raj" },
    { name: "Dr. Lakshmi Menon", department: "Robotic Joint Replacement", img: Lakshmi, link: "/doctor/lakshmi-menon" },
    { name: "Dr. Veena Unni", department: "Plastic Surgery", img: doctorPlaceholder, link: "/doctor/veena-unni" },
    { name: "Dr. Shradha Srinivas", department: "Endocrine Surgery", img: Shradha, link: "/doctor/shradha-srinivas" },
    { name: "Dr. Simna C", department: "Vascular Surgery", img: Simna, link: "/doctor/simna-c" },
];

const DoctorsDirectory = () => {
    return (
        <>
            <Header />

            {/* ================= HERO ================= */}
            <section className="hc-hero">
                <Container>
                    <div className="hc-hero-content">
                        <Breadcrumb className="hc-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Doctors</Breadcrumb.Item>
                        </Breadcrumb>

                        <span className="hc-badge">
                            <i className="fa fa-user-md me-2"></i>
                            Our Team
                        </span>

                        <h1>Meet Our Doctors</h1>
                        <p>
                            Explore our team of experienced specialists across every department,
                            dedicated to providing expert, compassionate care.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ================= DOCTORS GRID ================= */}
            <section className="hc-packages">
                <Container>
                    <Row className="g-4">
                        {doctors.map((doctor, idx) => (
                            <Col lg={3} md={4} sm={6} key={idx}>
                                <Link to={doctor.link} className="hc-package-card doc-card">
                                    <div className="hc-package-thumb doc-thumb">
                                        <img src={doctor.img} alt={doctor.name} />
                                        <div className="hc-package-overlay"></div>
                                    </div>
                                    <div className="hc-package-body doc-body">
                                        <div>
                                            <h3>{doctor.name}</h3>
                                            <span className="doc-department">{doctor.department}</span>
                                        </div>
                                        <span className="hc-package-arrow">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ================= CTA ================= */}
            <section className="hc-cta">
                <Container>
                    <div className="hc-cta-box">
                        <div className="hc-cta-text">
                            <h2>Need Help Finding the Right Doctor?</h2>
                            <p>
                                Our team can help you find the right specialist based on your
                                condition and requirements.
                            </p>
                        </div>
                        <div className="hc-cta-buttons">
                            <a href="/contact" className="hc-primary-btn">
                                Book Appointment
                            </a>
                            <a href="/contact" className="hc-outline-btn">
                                Talk to Us
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default DoctorsDirectory;
