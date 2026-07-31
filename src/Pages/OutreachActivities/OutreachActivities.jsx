import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import "./OutreachActivities.css";
import Header from '../../Components/Header/Header';

const videos = [
    {
        id: "gP24SLWOlJk",
        title: "Snake Bite First Aid",
    },
];

const OutreachActivities = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const openVideo = useCallback((videoId) => setActiveVideo(videoId), []);
    const closeVideo = useCallback(() => setActiveVideo(null), []);

    return (
        <>
            <Header />

            {/* ================= PAGE HEADER ================= */}
            <section className="oa-page-header">
                <Container>
                    <Breadcrumb className="oa-breadcrumb">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Outreach Activities</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Outreach Activities</h1>
                </Container>
            </section>

            {/* ================= VIDEO GALLERY ================= */}
            <section className="oa-video-section">
                <Container>
                    <div className="oa-section-heading">
                        <span>Community Outreach</span>
                        <h2>Outreach Activity Highlights</h2>
                        <p>
                            A look at our community outreach programs, camps and
                            awareness drives taking quality healthcare beyond our
                            hospital walls.
                        </p>
                    </div>

                    <Row className="g-4">
                        {videos.map((video) => (
                            <Col lg={4} sm={6} key={video.id}>
                                <div
                                    className="oa-video-card"
                                    onClick={() => openVideo(video.id)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") openVideo(video.id);
                                    }}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                        alt={video.title}
                                    />
                                    <div className="oa-video-overlay"></div>
                                    <div className="oa-video-title">
                                        <h5>{video.title}</h5>
                                    </div>
                                    <span className="oa-video-play" aria-label={`Play ${video.title}`}>
                                        <i className="fa fa-play"></i>
                                    </span>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ================= VIDEO MODAL ================= */}
            {activeVideo && (
                <div className="oa-video-modal" onClick={closeVideo}>
                    <div className="oa-video-modal-inner" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="oa-video-modal-close"
                            onClick={closeVideo}
                            aria-label="Close video"
                        >
                            <i className="fa fa-close"></i>
                        </button>
                        <div className="oa-video-frame">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                                title="Outreach Activity Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OutreachActivities;