import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import "./BlogsComponent.css"
// ----------images imported------------
import hairtransplant from "../../assets/Images/hairtransplant.webp"
import hypertension from "../../assets/Images/hypertension.webp"
import motherbaby from "../../assets/Images/motherbaby.webp"



const BlogsComponent = () => {

    const blogs = [
        {
            id: 1,
            image: motherbaby,
            day: "06",
            month: "AUG",
            year: "2025",
            category: "Women's Health",
            title: "Celebrating Breastfeeding Week: A Promise of Health and Attachment",
            description:
                "Breastfeeding builds a strong bond and provides ideal nutrition for your baby's healthy start in life."
        },
        {
            id: 2,
            image: hairtransplant,
            day: "21",
            month: "JUL",
            year: "2025",
            category: "Hair Care",
            title: "Hair Transplant Issues? Why Choosing the Right Clinic is Important",
            description:
                "Learn the most common hair transplant issues and how selecting the right clinic ensures better results and safety."
        },
        {
            id: 3,
            image: hypertension,
            day: "08",
            month: "JUL",
            year: "2025",
            category: "Heart Health",
            title: "The Rise of Hypertension in Young People",
            description:
                "High blood pressure is increasing among young adults due to stress, sedentary lifestyle and unhealthy habits."
        },
           {
            id: 4,
            image: hypertension,
            day: "08",
            month: "JUL",
            year: "2025",
            category: "Heart Health",
            title: "The Rise of Hypertension in Young People",
            description:
                "High blood pressure is increasing among young adults due to stress, sedentary lifestyle and unhealthy habits."
        }
    ];

    return (
        <>
            <section className="blogs-section">

                <Container>

                    {/* Header */}

                    <Row className="align-items-center blogs-header">

                        <Col lg={8}>

                            <span className="blogs-badge">

                                OUR BLOG

                            </span>

                            <h2>

                                Recent Blogs & Health Insights

                            </h2>

                            <p>

                                Since its founding PKDAS has been providing its patients with
                                comprehensive healthcare services including neurology,
                                diagnostics, outpatient care and much more.

                            </p>

                        </Col>

                        <Col
                            lg={4}
                            className="text-lg-end mt-4 mt-lg-0"
                        >

                            <Button className="blogs-view-btn">

                                View All Articles

                                <i className="bi bi-arrow-right ms-2"></i>

                            </Button>

                        </Col>

                    </Row>

                    <Row className="g-4 mt-2">
                        {blogs.map((blog) => (

                            <Col
                                lg={3}
                                md={6}
                                key={blog.id}
                            >

                                <div className="blogs-card">

                                    {/*=========================
                        Image
                =========================*/}

                                    <div className="blogs-image-wrapper">

                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="img-fluid"
                                        />

                                        {/* Date Badge */}

                                        <div className="blogs-date-badge">

                                            <span className="blogs-day">

                                                {blog.day}

                                            </span>

                                            <span className="blogs-month">

                                                {blog.month}

                                            </span>

                                            <span className="blogs-year">

                                                {blog.year}

                                            </span>

                                        </div>

                                    </div>

                                    {/*=========================
                        Card Body
                =========================*/}

                                    <div className="blogs-card-body">

                                        <span className="blogs-category">

                                            {blog.category}

                                        </span>

                                        <h3>

                                            {blog.title}

                                        </h3>

                                        <p>

                                            {blog.description}

                                        </p>

                                        <a
                                            href="/"
                                            className="blogs-read-more"
                                            onClick={(e) => e.preventDefault()}
                                        >

                                            Read More

                                            <i className="bi bi-arrow-right ms-2"></i>

                                        </a>

                                    </div>

                                </div>

                            </Col>

                        ))}
                    </Row>

                    {/*=====================================
                Slider Indicators
        =====================================*/}

                    {/* <div className="blogs-slider-dots">

                        <span className="blogs-dot active"></span>

                        <span className="blogs-dot"></span>

                        <span className="blogs-dot"></span>

                        <span className="blogs-dot"></span>

                    </div> */}

                </Container>

            </section>







        </>
    )
}

export default BlogsComponent
