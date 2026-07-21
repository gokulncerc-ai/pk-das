import React from 'react'
import "./SocialResponsibility.css"
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import social1 from "../../assets/Images/social1.webp"
import social2 from "../../assets/Images/social2.webp"
import social3 from "../../assets/Images/social3.webp"
import social4 from "../../assets/Images/social4.webp"


const SocialResponsibility = () => {

    const initiatives = [
        {
            id: 1,
            image: social1,
            icon: "bi-heart-pulse-fill",
            title: "Free Health Camps",
            description:
                "Providing free medical check-ups, consultations, and preventive healthcare services to underserved communities.",
        },
        {
            id: 2,
            image: social2,
            icon: "bi-droplet-fill",
            title: "Blood Donation Drives",
            description:
                "Organizing regular blood donation camps to support emergency care and save lives across the region.",
        },
        {
            id: 3,
            image: social3,
            icon: "bi-hospital-fill",
            title: "Rural Healthcare",
            description:
                "Delivering quality healthcare services to remote villages through outreach programs and mobile clinics.",
        },
        {
            id: 4,
            image: social4,
            icon: "bi-people-fill",
            title: "Women & Child Care",
            description:
                "Promoting maternal health, child wellness, nutrition awareness, and preventive healthcare initiatives.",
        },
        {
            id: 5,
            image: social1,
            icon: "bi-tree-fill",
            title: "Green Hospital",
            description:
                "Supporting sustainability through eco-friendly practices, waste management, and energy conservation.",
        },
        {
            id: 6,
            image: social2,
            icon: "bi-mortarboard-fill",
            title: "Medical Education",
            description:
                "Conducting health awareness sessions, workshops, and educational programs for schools and communities.",
        },
    ];

    return (
        <>
            <section className="social-responsibility-section">
                <Container>

                    {/* Section Heading */}
                    <div className="social-heading text-center">
                        <span className="social-badge">
                            Caring Beyond Healthcare
                        </span>

                        <h2>Our Social Responsibility</h2>

                        <p>
                            We believe quality healthcare extends beyond hospital walls.
                            Through impactful community initiatives, awareness programs,
                            and sustainable healthcare practices, we are committed to
                            creating healthier and happier communities.
                        </p>
                    </div>

                    {/* Cards */}
                    <Row className="g-4">
                        {initiatives.map((item) => (
                            <Col lg={4} md={6} key={item.id}>
                                <Card className="social-card border-0 h-100">

                                    {/* Card Image */}
                                    <div className="social-card-img">
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                            alt={item.title}
                                        />

                                        {/* Floating Icon */}
                                        <div className="social-icon">
                                            <i className={`bi ${item.icon}`}></i>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="social-card-title">
                                            {item.title}
                                        </Card.Title>

                                        <Card.Text className="social-card-text">
                                            {item.description}
                                        </Card.Text>

                                        {/* <Button className="social-btn mt-auto">
                                            Learn More
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </Button> */}
                                    </Card.Body>

                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>



        </>
    )
}

export default SocialResponsibility
