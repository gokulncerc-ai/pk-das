import React, { useState } from "react";
import "./NewsAndEventComponent.css"
import { Container, Row, Col, Button } from "react-bootstrap";
// ----------Images-----------
import news1 from "../../assets/Images/news1.webp"
import news2 from "../../assets/Images/news2.webp"
import news3 from "../../assets/Images/news3.webp"
import news4 from "../../assets/Images/news4.webp"
import news5 from "../../assets/Images/news5.webp"
import news6 from "../../assets/Images/news6.webp"


const NewsAndEventComponent = () => {
    const updates = [
        {
            id: 1,
            image: news1,
            badge: "Latest Updates",
            title: "P.K Das Conclave",
            link: "#",
        },
        {
            id: 2,
            image: news2,
            badge: "Latest Updates",
            title: "Medical Awareness Camp",
            link: "#",
        },
        {
            id: 3,
            image: news3,
            badge: "Latest Updates",
            title: "Blood Donation Camp",
            link: "#",
        },
        {
            id: 4,
            image: news4,
            badge: "Latest Updates",
            title: "Heart Health Seminar",
            link: "#",
        },
        {
            id: 5,
            image: news5,
            badge: "Latest Updates",
            title: "Orthopedic Workshop",
            link: "#",
        },
        {
            id: 6,
            image: news6,
            badge: "Latest Updates",
            title: "Cancer Awareness Programme",
            link: "#",
        },
    ];

    // Show only 2 cards at a time
    const cardsPerPage = 2;

    const [currentIndex, setCurrentIndex] = useState(0);

    /*============================
        NEXT
    ============================*/

    const nextSlide = () => {

        if (currentIndex + cardsPerPage >= updates.length) {

            setCurrentIndex(0);

        } else {

            setCurrentIndex(currentIndex + cardsPerPage);

        }
    }

    /*============================
PREVIOUS
============================*/

    const prevSlide = () => {

        if (currentIndex === 0) {

            setCurrentIndex(updates.length - cardsPerPage);

        } else {

            setCurrentIndex(currentIndex - cardsPerPage);

        }

    };

    // ---------Need medical Assistance-----------
    const stats = [
        {
            id: 1,
            icon: "bi bi-people",
            value: "35+",
            title: "Years of Experience",
            description: "Delivering trusted healthcare since 1989."
        },
        {
            id: 2,
            icon: "bi bi-person-badge",
            value: "150+",
            title: "Expert Doctors",
            description: "Highly qualified and experienced specialists."
        },
        {
            id: 3,
            icon: "bi bi-arrow-repeat",
            value: "24×7",
            title: "Emergency Care",
            description: "Round-the-clock care when you need it most."
        },
        {
            id: 4,
            icon: "bi bi-people-fill",
            value: "50,000+",
            title: "Happy Patients",
            description: "Empowering lives through quality healthcare."
        }
    ];



    return (
        <>
            <section className="featured-updates-section">

                <Container>

                    <Row>

                        <Col lg={12}>

                            <div className="featured-wrapper">

                                {/* Left Navigation */}

                                <div className="featured-navigation">

                                    <button
                                        className="featured-nav-btn"
                                        onClick={prevSlide}
                                    >
                                        <i className="bi bi-chevron-left"></i>
                                    </button>

                                    <button
                                        className="featured-nav-btn"
                                        onClick={nextSlide}
                                    >
                                        <i className="bi bi-chevron-right"></i>
                                    </button>

                                </div>

                                {/* Main Content */}

                                <div className="featured-content">

                                    <div className="featured-header">

                                        <h2>

                                            Featured Updates

                                        </h2>

                                        <Button className="featured-btn">

                                            Explore More

                                        </Button>

                                    </div>

                                    <Row className="g-4">
                                        {updates
                                            .slice(currentIndex, currentIndex + cardsPerPage)
                                            .map((item) => (

                                                <Col
                                                    lg={6}
                                                    md={6}
                                                    sm={12}
                                                    key={item.id}
                                                >

                                                    <div className="featured-card">

                                                        {/*=========================
                                  Image
                          =========================*/}

                                                        <div className="featured-image-wrapper">

                                                            <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="img-fluid"
                                                            />

                                                            {/* Overlay */}

                                                            <div className="featured-overlay">

                                                                <span className="featured-badge">

                                                                    {item.badge}

                                                                </span>

                                                                <h4>

                                                                    {item.title}

                                                                </h4>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </Col>

                                            ))}
                                    </Row>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/* ---------Need medical Assistance----------- */}
            {/* <section className="medical-assistance-section">

                <Container>

               

                    <div className="medical-assistance-card">

                        <Row className="align-items-center">

                        

                            <Col lg={5}>

                                <div className="medical-left">

                                    <div className="medical-icon">

                                        <i className="bi bi-headset"></i>

                                    </div>

                                    <div>

                                        <h2>

                                            Need Medical Assistance?

                                        </h2>

                                        <p>

                                            Our healthcare experts are available to help you
                                            24×7 with appointments, emergencies and medical
                                            guidance.

                                        </p>

                                    </div>

                                </div>

                            </Col>

                           

                            <Col lg={7}>

                                <div className="medical-buttons">

                                    <Button className="appointment-btn">

                                        <i className="bi bi-calendar-check me-2"></i>

                                        Book Appointment

                                    </Button>

                                    <Button className="emergency-btn">

                                        <i className="bi bi-telephone me-2"></i>

                                        Emergency Care

                                        <small>

                                            +91 12345 56789

                                        </small>

                                    </Button>

                                </div>

                            </Col>

                        </Row>

                    </div>

                 

                    <Row className="g-4 mt-4">

                        {stats.map((item) => (

                            <Col
                                lg={3}
                                md={6}
                                sm={6}
                                xs={12}
                                key={item.id}
                            >

                                <div className="medical-stat-card">

                                    <div className="medical-stat-icon">

                                        <i className={item.icon}></i>

                                    </div>

                                    <div className="medical-stat-content">

                                        <h3>

                                            {item.value}

                                        </h3>

                                        <h5>

                                            {item.title}

                                        </h5>

                                        <p>

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                            </Col>

                        ))}

                    </Row>

                </Container>

            </section> */}




        </>
    )
}

export default NewsAndEventComponent
