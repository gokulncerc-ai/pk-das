import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Testimonials.css";

// Patient testimonials dataset matching the $for_patient collection from PHP reference
const testimonials = [
    { name: "Stroke Patient Testimonial", videoId: "H-Z4YBTklC0" },
    { name: "Cardiology Patient - Vijayan, Peringode", videoId: "FnPGj4907Vk" },
    { name: "Snehasangamam - Recovery Stories", videoId: "k0fryUCKQTA" },
    { name: "Knee Replacement Success Story", videoId: "Eajdup8Ezi0" },
    { name: "Campus Chit Chat & Happy Stories", videoId: "G_pXqrOp4cA" }
];

const Testimonials = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const openVideo = (videoId) => setActiveVideo(videoId);
    const closeVideo = () => setActiveVideo(null);

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
                                    Patient Testimonials
                                </li>
                            </ol>
                        </nav>

                        <span className="gm-badge">
                            <i className="fa fa-comments me-2"></i>&nbsp;Patient Care
                        </span>

                        <h1>Patient Testimonials</h1>
                        <p>
                            Hear directly from our patients about their experience and care journey
                            at PKDAS Hospital.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===================== VIDEO GRID ===================== */}
            <section className="gm-testimonials">
                <div className="container">
                    <div className="row g-4">
                        {testimonials.map((item, idx) => (
                            <div className="col-lg-4 col-sm-6" key={`${item.videoId}-${idx}`}>
                                <div
                                    className="gm-video-card"
                                    onClick={() => openVideo(item.videoId)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") openVideo(item.videoId);
                                    }}
                                >
                                    {/* YouTube Thumbnail Image equivalent to http://i1.ytimg.com/vi/{{$row->testimonials_video}}/hqdefault.jpg */}
                                    <img
                                        src={`https://i1.ytimg.com/vi/${item.videoId}/hqdefault.jpg`}
                                        alt={item.name}
                                    />
                                    <div className="gm-video-overlay"></div>
                                    <span className="gm-video-play">
                                        <i className="fa fa-play"></i>
                                    </span>
                                    <div className="gm-video-title">
                                        <h5>{item.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== VIDEO MODAL / IFRAME ===================== */}
            {activeVideo && (
                <div className="gm-video-modal" onClick={closeVideo}>
                    <div className="gm-video-modal-inner" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="gm-video-modal-close"
                            onClick={closeVideo}
                            aria-label="Close video"
                        >
                            <i className="fa fa-times"></i>
                        </button>
                        <div className="gm-video-modal-frame">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                                title="Patient Testimonial Video"
                                frameBorder="0"
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

export default Testimonials;