import React from "react";
import "./NewsAndEvents.css";
import { Container, Row, Col, Badge } from "react-bootstrap";


// ======================================================
// Images
// ======================================================

import newsHero from "../../assets/Images/NewsAndEvents/newshero.webp";
import news1 from "../../assets/Images/NewsAndEvents/news1.webp";
import news2 from "../../assets/Images/NewsAndEvents/news2.webp";
import news3 from "../../assets/Images/NewsAndEvents/news4.webp";


// ======================================================
// Hero Data
// ======================================================

const heroData = {

    image: newsHero,

    badge:
        "Hospital Updates",

    title:
        <>
            News <span>&</span> Events
        </>,

    description:
        "Stay updated with our latest medical innovations, healthcare achievements, patient stories, research breakthroughs and upcoming hospital events.",


    stats: [
        {
            number: "250+",
            label: "Medical Articles"
        },
        {
            number: "120+",
            label: "Health Events"
        },
        {
            number: "30K+",
            label: "Monthly Readers"
        }
    ],


    floatingCards: [

        {
            icon: "bi-calendar-event",
            title: "Upcoming Seminar",
            text: "Heart Health Awareness",
            position: "topCard"
        },

        {
            icon: "bi-award",
            title: "Latest Achievement",
            text: "Healthcare Excellence Award",
            position: "bottomCard"
        }

    ]

};


// ======================================================
// Featured Article Data
// ======================================================


const featuredNews = {

    image: news1,

    category: "Medical Innovation",

    date: "July 22, 2026",

    readTime: "5 min read",

    title:
        "AI-Powered Cardiac Diagnostics Improve Early Detection and Patient Outcomes",

    description:
        "Our cardiology department has introduced advanced artificial intelligence technology helping physicians detect cardiovascular conditions faster with improved accuracy."

};



// ======================================================
// Trending News Data
// ======================================================


const trendingNews = [

    {
        id: 1,

        image: news2,

        category: "Community",

        date: "July 15, 2026",

        title:
            "Free Diabetes Awareness Camp Successfully Conducted"

    },


    {
        id: 2,

        image: news3,

        category: "Research",

        date: "July 09, 2026",

        title:
            "Oncology Research Team Publishes Breakthrough Study"

    },


    {
        id: 3,

        image: news2,

        category: "Events",

        date: "July 02, 2026",

        title:
            "Advanced Robotic Surgery Workshop Hosted Successfully"

    },


];

// ======================================================
// Latest News Listing Data
// ======================================================

const latestNewsList = [

    {
        id: 1,

        image: news2,

        category: "Healthcare",

        date: "July 18, 2026",

        title:
            "Advanced Robotic Surgery Facility Introduced For Better Patient Care",

        description:
            "Our hospital has expanded its surgical capabilities with advanced robotic technology, helping surgeons perform complex procedures with improved precision and faster recovery."
    },


    {
        id: 2,

        image: news3,

        category: "Research",

        date: "July 12, 2026",

        title:
            "Hospital Research Team Achieves New Medical Breakthrough",

        description:
            "Our dedicated research team continues to develop innovative healthcare solutions through advanced clinical studies and patient-focused research."
    },


    {
        id: 3,

        image: news1,

        category: "Events",

        date: "July 05, 2026",

        title:
            "Annual Healthcare Excellence Summit Successfully Completed",

        description:
            "Healthcare professionals from different specialties participated in knowledge sharing sessions focused on improving patient outcomes."
    }

];



// ======================================================
// Component
// ======================================================


const NewsAndEvents = () => {
    return (

        <>

            {/* ======================================================
    Hero Section
====================================================== */}


            <section className="premiumNewsHero">


                <Container>


                    <Row className="align-items-center gy-5 mt-2">


                        <Col lg={7}>


                            <Badge className="premiumBadge">

                                {/* <i className="bi bi-newspaper"></i>  */}

                                {heroData.badge}

                            </Badge>



                            <h1 className="premiumHeroTitle">

                                {heroData.title}

                            </h1>



                            <p className="premiumHeroDescription">

                                {heroData.description}

                            </p>



                            <div className="premiumStats">


                                {
                                    heroData.stats.map((item, index) => (

                                        <div
                                            className="premiumStatCard"
                                            key={index}
                                        >

                                            <h3>
                                                {item.number}
                                            </h3>


                                            <p>
                                                {item.label}
                                            </p>


                                        </div>

                                    ))
                                }



                            </div>


                        </Col>



                        <Col lg={5}>


                            <div className="premiumHeroImage">


                                <img
                                    src={heroData.image}
                                    alt="Hospital News"
                                />



                                {
                                    heroData.floatingCards.map((card, index) => (


                                        <div
                                            className={`premiumFloatingCard ${card.position}`}
                                            key={index}
                                        >


                                            <div className="floatingIcon">

                                                <i className={`bi ${card.icon}`}></i>

                                            </div>


                                            <div>

                                                <h6>
                                                    {card.title}
                                                </h6>


                                                <p>
                                                    {card.text}
                                                </p>

                                            </div>


                                        </div>


                                    ))
                                }


                            </div>



                        </Col>



                    </Row>


                </Container>


            </section>




            {/* ======================================================
 Featured News Section
====================================================== */}



            <section className="premiumFeaturedNews">


                <Container>


                    <div className="premiumSectionHeader">


                        <Badge>

                            <i className="bi bi-stars"></i>

                            Featured Stories

                        </Badge>



                        <h2>

                            Latest Medical
                            <span>
                                Highlights
                            </span>

                        </h2>



                        <p>

                            Discover the latest healthcare innovations,
                            research updates and inspiring hospital stories.

                        </p>


                    </div>





                    <Row className="g-4">



                        {/* Featured Article */}


                        <Col lg={7}>


                            <div className="premiumFeaturedCard">


                                <div className="featuredImageWrapper">


                                    <img
                                        src={featuredNews.image}
                                        alt={featuredNews.title}
                                    />


                                    <div className="featuredOverlay">


                                        <Badge>

                                            {featuredNews.category}

                                        </Badge>



                                        <h3>

                                            {featuredNews.title}

                                        </h3>


                                        <div className="featuredMeta">


                                            <span>

                                                <i className="bi bi-calendar3"></i>

                                                {featuredNews.date}

                                            </span>



                                            <span>

                                                <i className="bi bi-clock"></i>

                                                {featuredNews.readTime}

                                            </span>


                                        </div>



                                    </div>



                                </div>


                                <p className="featuredDescription">

                                    {featuredNews.description}

                                </p>



                                <button className="premiumReadButton">

                                    Read Full Story

                                    <i className="bi bi-arrow-right"></i>

                                </button>



                            </div>


                        </Col>





                        {/* Trending News */}


                        <Col lg={5}>


                            <div className="trendingWrapper">


                                <h4>

                                    Trending News

                                </h4>



                                {
                                    trendingNews.map((item) => (


                                        <div
                                            className="premiumTrendingCard"
                                            key={item.id}
                                        >


                                            <img
                                                src={item.image}
                                                alt={item.title}
                                            />


                                            <div>


                                                <Badge>

                                                    {item.category}

                                                </Badge>


                                                <h5>

                                                    {item.title}

                                                </h5>


                                                <p>

                                                    <i className="bi bi-calendar3"></i>

                                                    {item.date}

                                                </p>


                                            </div>


                                            <i className="bi bi-arrow-right-circle"></i>



                                        </div>


                                    ))
                                }



                            </div>


                        </Col>



                    </Row>



                </Container>


            </section>
            {/* ======================================================
    Latest News Listing Section
====================================================== */}


            <section className="premiumNewsListing">


                <Container>


                    <div className="premiumSectionHeader">


                        <Badge>

                            <i className="bi bi-journal-medical"></i>

                            Latest Updates

                        </Badge>



                        <h2>

                            Hospital
                            <span>
                                Newsroom
                            </span>

                        </h2>



                        <p>

                            Explore the latest medical updates,
                            hospital achievements and healthcare initiatives.

                        </p>


                    </div>





                    <div className="newsScrollContainer">


                        {
                            latestNewsList.map((news) => (


                                <div
                                    className="premiumNewsListCard"
                                    key={news.id}
                                >


                                    <div className="newsListImage">


                                        <img
                                            src={news.image}
                                            alt={news.title}
                                        />


                                    </div>




                                    <div className="newsListContent">


                                        <Badge>

                                            {news.category}

                                        </Badge>




                                        <div className="newsListMeta">


                                            <span>

                                                <i className="bi bi-calendar3"></i>

                                                {news.date}

                                            </span>


                                        </div>




                                        <h3>

                                            {news.title}

                                        </h3>



                                        <p>

                                            {news.description}

                                        </p>




                                        <button className="newsListButton">

                                            Read More

                                            <i className="bi bi-arrow-right"></i>

                                        </button>



                                    </div>



                                </div>


                            ))
                        }




                    </div>



                </Container>


            </section>


        </>

    );


};


export default NewsAndEvents;