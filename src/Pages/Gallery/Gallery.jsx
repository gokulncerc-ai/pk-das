import React from 'react'
import './Gallery.css'
// --------Images section--------------
import gallery1 from "../../assets/Images/Gallery/gallery1.avif"
import gallery2 from "../../assets/Images/Gallery/gallery2.avif"
import gallery3 from "../../assets/Images/Gallery/gallery3.avif"
import gallery4 from "../../assets/Images/Gallery/gallery4.avif"
import gallery5 from "../../assets/Images/Gallery/gallery5.avif"
import gallery6 from "../../assets/Images/Gallery/gallery6.avif"
import gallery7 from "../../assets/Images/Gallery/gallery7.avif"
import gallery8 from "../../assets/Images/Gallery/gallery8.avif"
import gallery9 from "../../assets/Images/Gallery/gallery9.avif"
import gallery10 from "../../assets/Images/Gallery/gallery10.avif"

import { Container, Row, Col, } from "react-bootstrap";
import {
    ArrowRight, Images,
    XLg,
    ChevronLeft,
    ChevronRight,
} from "react-bootstrap-icons";


const Gallery = () => {

    // GalleryData.js

    const galleryData = [
        {
            id: 1,
            title: "Anganwadi Praveshanotsavam 2026",
            image: gallery9,
            category: "Community"
        },
        {
            id: 2,
            title: "Sports Injury Awareness Session",
            image: gallery10,
            category: "Awareness"
        },
        {
            id: 3,
            title: "World Thyroid Day Awareness Program",
            image: gallery1,
            category: "Awareness"
        },
        {
            id: 4,
            title: "Free Medical Camp - Shoranur",
            image: gallery2,
            category: "Medical Camp"
        },
        {
            id: 5,
            title: "International Nurses Day",
            image: gallery3,
            category: "Celebration"
        },
        {
            id: 6,
            title: "Health Magazine Inauguration",
            image: gallery4,
            category: "Event"
        },
        {
            id: 7,
            title: "Intern Hostel and Guest Rooms",
            image: gallery5,
            category: "Infrastructure"
        },
        {
            id: 8,
            title: "PKDIMS : Mammogram Inauguration",
            image: gallery6,
            category: "Inauguration"
        },
        {
            id: 9,
            title: "FREE MEDICAL CONSULTATION AT PK DAS HOSPITAL",
            image: gallery7,
            category: "Medical Camp"
        },
        {
            id: 10,
            title: "FREE MEDICAL CAMP AT PK DAS MULTI SPECIALITY CLINIC, THIRUVILWAMALA",
            image: gallery8,
            category: "Medical Camp"
        },











    ];






    return (
        <>
            <section className="gallery-section">
                <Container>

                    {/* =======================
            Section Heading
        ======================== */}

                    <div className="gallery-heading text-center">

                        <div className="gallery-subtitle">
                            <Images />
                            <span>Hospital Gallery</span>
                        </div>

                        <h2>
                            Capturing Moments of
                            <span> Care, Service & Excellence</span>
                        </h2>

                        <p>
                            Explore memorable moments from our medical camps, awareness
                            programs, inaugurations, healthcare initiatives, conferences and
                            community outreach activities that reflect our commitment to
                            compassionate healthcare.
                        </p>

                    </div>

                    {/* =======================
            Gallery Grid
        ======================== */}

                    <Row className="g-4">

                        {galleryData.map((item) => (

                            <Col
                                lg={4}
                                md={6}
                                key={item.id}
                            >

                                <div className="gallery-card">

                                    {/* Image */}

                                    <div className="gallery-image">

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />

                                        {/* Category Badge */}

                                        <div className="gallery-category">
                                            {item.category}
                                        </div>

                                        {/* Hover Overlay */}

                                        <div className="gallery-overlay">

                                            {/* <button className="gallery-view-btn">
                                                View Image
                                                <ArrowRight />
                                            </button> */}

                                        </div>

                                    </div>

                                    {/* Content */}

                                    <div className="gallery-content">

                                        <h5>{item.title}</h5>

                                    </div>

                                </div>

                            </Col>

                        ))}

                    </Row>

                </Container>
            </section>



        </>
    )
}

export default Gallery