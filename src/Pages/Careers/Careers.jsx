import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Careers.css";

const Careers = () => {
    const [resumeName, setResumeName] = useState("");

    const handleResumeChange = (e) => {
        const file = e.target.files && e.target.files[0];
        setResumeName(file ? file.name : "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: wire this up to your careers-apply endpoint.
        // The original form posted multipart/form-data with fields:
        // name, phone, qualification, email, req_let (cover letter), resume (PDF file).
    };

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
                                    Careers
                                </li>
                            </ol>
                        </nav>

                        <span className="gm-badge">
                            <i className="fa fa-briefcase me-2"></i>&nbsp;PKDIMS
                        </span>

                        <h1>Apply Now</h1>
                        <p>Join our team and be part of a hospital committed to exceptional patient care.</p>
                    </div>
                </div>
            </section>

            {/* ===================== APPLICATION FORM ===================== */}
            <section className="careers-form-section">
                <div className="container">
                    <div className="careers-form-card">
                        <div className="careers-form-heading">
                            <span className="gm-section-tag">Join Us</span>
                            <h2>Submit Your Application</h2>
                            <p>
                                Fill in your details below and attach your resume — our HR team will get
                                back to you.
                            </p>
                        </div>

                        <form className="careers-form" onSubmit={handleSubmit}>
                            <label>
                                <i className="fa fa-user"></i>
                                <input name="name" type="text" placeholder="Your Name" required />
                            </label>

                            <label>
                                <i className="fa fa-mobile"></i>
                                <input name="phone" type="text" placeholder="Cell Phone" required />
                            </label>

                            <label>
                                <i className="fa fa-book"></i>
                                <input name="qualification" type="text" placeholder="Qualification" required />
                            </label>

                            <label>
                                <i className="fa fa-envelope-o"></i>
                                <input name="email" type="email" placeholder="Email" required />
                            </label>

                            <label className="careers-form-textarea">
                                <i className="fa fa-comment-o"></i>
                                <textarea name="req_let" rows={4} placeholder="Cover Letter" required></textarea>
                            </label>

                            <label className="careers-form-file">
                                <span className="careers-form-file-trigger">
                                    <i className="fa fa-file-pdf-o"></i>
                                    {resumeName ? resumeName : "Upload Resume (PDF)"}
                                </span>
                                <input
                                    name="resume"
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleResumeChange}
                                    required
                                />
                            </label>

                            <button type="submit" className="gm-primary-btn careers-submit">
                                Apply Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Careers;