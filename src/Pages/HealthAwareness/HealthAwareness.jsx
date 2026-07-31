import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import "./HealthAwareness.css";
import Header from '../../Components/Header/Header';

const videos = [
    {
        id: "pNHaRHuONq0",
        title: "Women's Health Talk",
    },
    {
        id: "gP24SLWOlJk",
        title: "Snake Bite First Aid",
    },
];

const HealthAwareness = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const openVideo = useCallback((videoId) => setActiveVideo(videoId), []);
    const closeVideo = useCallback(() => setActiveVideo(null), []);

    return (
        <>
            <Header />

            {/* ================= PAGE HEADER ================= */}
            <section className="ha-page-header">
                <Container>
                    <Breadcrumb className="ha-breadcrumb">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Health Awareness</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Health Awareness</h1>
                </Container>
            </section>

            {/* ================= VIDEO GALLERY ================= */}
            <section className="ha-video-section">
                <Container>
                    <div className="ha-section-heading">
                        <span>Watch & Learn</span>
                        <h2>Health Awareness Videos</h2>
                        <p>
                            Helpful talks and first-aid guidance from our specialists to
                            keep you and your family informed and prepared.
                        </p>
                    </div>

                    <Row className="g-4">
                        {videos.map((video) => (
                            <Col lg={4} sm={6} key={video.id}>
                                <div
                                    className="ha-video-card"
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
                                    <div className="ha-video-overlay"></div>
                                    <div className="ha-video-title">
                                        <h5>{video.title}</h5>
                                    </div>
                                    <span className="ha-video-play" aria-label={`Play ${video.title}`}>
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
                <div className="ha-video-modal" onClick={closeVideo}>
                    <div className="ha-video-modal-inner" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="ha-video-modal-close"
                            onClick={closeVideo}
                            aria-label="Close video"
                        >
                            <i className="fa fa-close"></i>
                        </button>
                        <div className="ha-video-frame">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                                title="Health Awareness Video"
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

export default HealthAwareness;